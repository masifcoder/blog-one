import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { Form, Input, Button, Card, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from 'axios';
import Password from 'antd/es/input/Password';

export const Signup = () => {

  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    console.log("Signup Success:", values);

    let formdata = new FormData();

    formdata.append("email", values.email);
    formdata.append("name", "santa");
    formdata.append("password", values.password);
    formdata.append("image", fileList[0].originFileObj);

    // send to api
    axios.post("http://localhost:3003/user/signup", formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": "Bearer asdfsadfsadf"
      }
    }).then((res) => {
      console.log(res)
    }).catch(er => {
      console.log(er.response.data.errors);
      setErrors(er.response.data.errors);

    })



    // navigate("/");
  };

  const handleUploadChange = ({ fileList }) => {
    setFileList(fileList);
  };



  return (
    <Card title="Sign Up" style={{ width: 560, margin: "auto", marginTop: 100 }}>
      {
        errors && <div className='bg-red-100 p-5 rounded-sm mb-4'>
          <h4 className='text-red-400 text-xl font-bold mt-4'>Errors occured</h4>
          <ul className="list-disc ps-10">

            {
              Array.isArray(errors) ? (
                errors.map(er => {
                  return (<>
                    <li className=''>{er.message}</li>
                  </>)
                })
              ) : <li className="">{errors}</li>

            }

          </ul>
        </div>
      }

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
          <Upload beforeUpload={() => false} onChange={handleUploadChange} fileList={fileList}>
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
