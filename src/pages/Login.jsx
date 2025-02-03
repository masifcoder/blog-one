import React, { useContext } from 'react'
import { Form, Input, Button, Card } from "antd";
import { useNavigate, Link } from 'react-router-dom';
import { CheckAuth } from '../context/CheckAuth';

const Login = () => {
    const authCtx = useContext(CheckAuth);


    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log("Login Success:", values);
        
        authCtx.setIsLogin(true);

        navigate("/dashboard");
    };


    return (
        <Card title="Login" bordered={false} style={{ width: 500, margin: "auto", marginTop: 100 }}>
            <Form onFinish={onFinish}>
                <Form.Item name="email" rules={[{ required: true, message: "Please enter your email!", type: "email" }]}>
                    <Input size="large" placeholder="Email" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: "Please enter your password!" }]}>
                    <Input.Password size="large" placeholder="Password" />
                </Form.Item>
                <Form.Item>
                    <Button size="large" type="primary" htmlType="submit" block>Login</Button>
                </Form.Item>
            </Form>
            <Link to="/signup">Don't have an account? Sign up</Link>
        </Card>
    )
}

export default Login