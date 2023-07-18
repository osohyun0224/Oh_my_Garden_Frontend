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

function Signup() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        verificationCode: "" 
    });

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleVerification = e => {
      e.preventDefault();

  };
    const handleSubmit = e => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <FormContain>
            <Form onSubmit={handleSubmit}>
            <Title>Sign Up</Title>
            <p align="center">회원가입을 진행해주세요:)</p>
                <Input name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} />
                <Input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
                <Button onClick={handleVerification}>메일 인증하기</Button> 
                <Input name="verificationCode" type="text" placeholder="Verification Code" value={form.verificationCode} onChange={handleChange} />
                <Input name="username" type="text" placeholder="Username" value={form.username} onChange={handleChange} />
                <Input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
                <Button type="submit">Sign Up</Button>
            </Form>
        </FormContain>
    );
}

export default Signup;
