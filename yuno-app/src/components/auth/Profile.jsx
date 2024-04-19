import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavBarMobile from "../layout/NavBarMobile";
import Header from "../layout/Header";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { getUserFromLocalStorage } from "../localStorage";
import Wapper from "../../Style/Profile";
import {
  getDocs,
  addDoc,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import { Button, Checkbox, Form, Input } from "antd";
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
  const [informationUser, setInformationUser] = useState();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedInfo({ ...editedInfo, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (informationUser) {
        //edit information
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
      navigate("/profile");
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
        <div className="profile-user">
          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="displayName"
                placeholder="Tên hiển thị"
                value={editedInfo.displayName}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Số điện thoại"
                value={editedInfo.phoneNumber}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Địa chỉ"
                value={editedInfo.address}
                onChange={handleInputChange}
                required
              />

              <button type="submit">Lưu</button>
            </form>
          ) : (
            <div className="profile-user__info">
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
              {informationUser ? (
                <button
                  style={{ background: "red" }}
                  onClick={() => setIsEditing(true)}
                >
                  edit
                </button>
              ) : (
                <button
                  style={{ background: "red" }}
                  onClick={() => setIsEditing(true)}
                >
                  Add profile
                </button>
              )}
                 <Link to="/changePass">
                <button>Change Pass</button>
              </Link>
              <Link to="/paymentHistory">
                <button>Order History</button>
              </Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </Wapper>
      <NavBarMobile />
    </>
  );
};

export default Profile;
