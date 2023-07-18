import React, { useState } from 'react';
import styled from 'styled-components';

const FormContain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    background-color: white;
`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
`;

const Button = styled.button`
    padding: 10px;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: #62a443;
    cursor: pointer;

    &:hover {
        background-color: green;
    }
`;
const Title = styled.h1`
    font-size: 24px;
    text-align: center;
    color: #333;
`;

function Login() {
    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <FormContain>
            <Form onSubmit={handleSubmit}>
            <Title>Login</Title>
            <p align="center">로그인을 진행해주세요:)</p>
                <Input name="username" type="text" placeholder="Username" value={form.username} onChange={handleChange} />
                <Input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
                <Button type="submit">Login</Button>
            </Form>           
        </FormContain>
    );
}

export default Login;
