import React from "react";
import { auth } from "../../firebase-config";
import { sendPasswordResetEmail } from "firebase/auth";
import { Button, Checkbox, Form, Input } from "antd";
import { ToastContainer, toast,Bounce } from 'react-toastify';
const ChangePass = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emalVal = e.target.email.value;
    sendPasswordResetEmail(auth, emalVal)
      .then((data) => {
        toast.success('Check Your Email!', {
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
      })
      .catch((err) => {
        toast.error('Error !!', {
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
      });
  };
  return (
    <>
      {/* <Form
        onSubmit={(e) => handleSubmit(e)}
        required
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
          display: "flex",
          justifyContent: "center",
          marginTop: "10%",
          marginLeft: "10%",
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form> */}
<ToastContainer/>
      <form onSubmit={(e)=> handleSubmit(e)}>
        <input required name="email" placeholder='Enter email'></input><br /><br />
        <button>Reset</button>
    </form>
    </>
  );
};

export default ChangePass;
