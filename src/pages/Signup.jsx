import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import { Form, Input, Button, Card, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export const Signup = () => {

  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Signup Success:", values);
    navigate("/");
  };

  const handleUpload = (info) => {
    console.log(info);

    // setFile(info.file.originFileObj);
  };


  return (
    <Card title="Sign Up" style={{ width: 560, margin: "auto", marginTop: 100 }}>
      <Form onFinish={onFinish}>
        <Form.Item name="email" rules={[{ required: true, message: "Please enter your email!", type: "email" }]}>
          <Input size="large" placeholder="Email" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: "Please enter your password!" }]}>
          <Input.Password size="large" placeholder="Password" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match!"));
              },
            }),
          ]}
        >
          <Input.Password size='large' placeholder="Confirm Password" />
        </Form.Item>
        <Form.Item>
          <Upload beforeUpload={() => false} onChange={handleUpload}>
            <Button size='large' icon={<UploadOutlined />}>Upload Profile Image</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button size='large' type="primary" htmlType="submit" block>Sign Up</Button>
        </Form.Item>
      </Form>
      <Link to="/login">Already have an account? Login</Link>
    </Card>
  )
}
