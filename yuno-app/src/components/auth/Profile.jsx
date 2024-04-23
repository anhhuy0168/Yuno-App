import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavBarMobile from "../layout/NavBarMobile";
import Header from "../layout/Header";
import React, { useState, useEffect } from "react";
import { getUserFromLocalStorage } from "../localStorage";
import Wapper from "../../Style/Profile";
import { Skeleton } from "antd";
import {
  getDocs,
  addDoc,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import { ToastContainer, toast, Bounce } from "react-toastify";
const Profile = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedInfo, setEditedInfo] = useState({
    displayName: "",
    phoneNumber: "",
    address: "",
  });
  const user = getUserFromLocalStorage();
  const usersCollectionRef = collection(db, "users");
  const [informationUser, setInformationUser] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedInfo({ ...editedInfo, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (informationUser) {
        //edit information
        const isNameChanged = editedInfo.displayName !== informationUser.name;
        const isPhoneNumberChanged =
          editedInfo.phoneNumber !== informationUser.phoneNumber;
        const isAddressChanged = editedInfo.address !== informationUser.address;

        if (!isNameChanged && !isPhoneNumberChanged && !isAddressChanged) {
          toast.error("No Information Changed!!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
          return; // Không thực hiện thêm bước nào nếu không có thay đổi
        }
        const userDoc = doc(db, "users", informationUser.id);
        const newFields = {
          uid: user.uid,
          name: editedInfo.displayName || informationUser.name,
          phoneNumber: editedInfo.phoneNumber || informationUser.phoneNumber,
          address: editedInfo.address || informationUser.address,
        };
        await updateDoc(userDoc, newFields);
        localStorage.setItem("informationUser", JSON.stringify(newFields));
      } else {
        const informationUser = {
          uid: user.uid,
          name: editedInfo.displayName,
          phoneNumber: editedInfo.phoneNumber,
          address: editedInfo.address,
        };
        await addDoc(usersCollectionRef, informationUser);
        setIsEditing(false);
        setEditedInfo({ displayName: "", phoneNumber: "", address: "" });
        localStorage.setItem(
          "informationUser",
          JSON.stringify(informationUser)
        );
      }
      toast.success("Edit Success!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      setTimeout(async () => {
        navigate(0);
      }, 2000);
      // Quay lại trang trước đó trong lịch sử duyệt
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  useEffect(() => {
    setInformationUser(users.find((id) => id?.uid === user?.uid));
  }, [users]);

  useEffect(() => {
    if (informationUser) {
      setIsEditing(false);
    }
  }, [informationUser]);

  useEffect(() => {
    if (informationUser) {
      // Nếu có thông tin người dùng, cập nhật giá trị của `editedInfo` thành thông tin người dùng
      setEditedInfo({
        displayName: informationUser.name || "",
        phoneNumber: informationUser.phoneNumber || "",
        address: informationUser.address || "",
      });
    }
  }, [informationUser]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <Header />
      <Wapper>
        <ToastContainer />
        <div className="profile-user">
          {isEditing ? (
            <form
              onSubmit={handleSubmit}
              style={{
                backgroundColor: "#C0C0C0",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <label style={{ display: "block", marginBottom: "10px" }}>
                Display name:
              </label>
              <input
                type="text"
                name="displayName"
                value={editedInfo?.displayName}
                onChange={handleInputChange}
                required
                style={{
                  marginBottom: "15px",
                  border: "1px solid white",
                  borderRadius: "5px",
                  paddingLeft: "10px",
                  height: "35px",
                }}
              />

              <label style={{ display: "block", marginBottom: "10px" }}>
                Phone Number:
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={editedInfo?.phoneNumber}
                onChange={handleInputChange}
                required
                style={{
                  marginBottom: "15px",
                  border: "1px solid white",
                  borderRadius: "5px",
                  paddingLeft: "10px",
                  height: "35px",
                }}
              />

              <label style={{ display: "block", marginBottom: "10px" }}>
                Address:
              </label>
              <input
                type="text"
                name="address"
                value={editedInfo?.address}
                onChange={handleInputChange}
                required
                style={{
                  marginBottom: "15px",
                  border: "1px solid white",
                  borderRadius: "5px",
                  paddingLeft: "10px",
                  height: "35px",
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <button type="button" onClick={() => navigate(0)}>
                  Back
                </button>
                <button
                  type="submit"
                  style={{
                    color: "#007bff",
                    padding: "5px 0px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    background: "none",
                    fontSize: "smaller",
                  }}
                >
                  Save
                </button>
              </div>
            </form>
          ) : (
            <>
              <div className="profile-user__info" style={{ padding: "20px" }}>
                <h2 className="profile-user__name">
                  Name: {informationUser?.name}
                </h2>
                <p className="profile-user__email">Email: {user?.email}</p>
                <p className="profile-user__phone">
                  Phone: {informationUser?.phoneNumber}
                </p>
                <p className="profile-user__address">
                  Address: {informationUser?.address}
                </p>
                <button
                  style={{
                    color: "#007bff",
                    padding: "5px 0px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    background: "none",
                    fontSize: "smaller",
                  }}
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </button>
                <Link to="/changePass" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      color: "#007bff",
                      padding: "5px 0px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      background: "none",
                      fontSize: "smaller",
                    }}
                  >
                    Change Pass
                  </button>
                </Link>
                <Link to="/paymentHistory" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      color: "#007bff",
                      padding: "5px 0px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      background: "none",
                      fontSize: "smaller",
                    }}
                  >
                    Order History
                  </button>
                </Link>
                <button
                  style={{
                    color: "red",
                    padding: "5px 0px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    background: "none",
                    fontSize: "smaller",
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </Wapper>
      <NavBarMobile />
    </>
  );
};

export default Profile;
