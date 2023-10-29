import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  padding: 48px 80px 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
`;

const Heading = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 52.8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Label = styled.label`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 19.8px;
  padding-right: 422px;
  margin-bottom: 16px;
`;

const Input = styled.input`
  color: var(--Light-Color---1, #737b86);

  border-radius: 8px;
  border: 1px solid rgba(4, 7, 47, 0.4);
  padding: 15px 300px 5px 5px;
  margin-bottom: 32px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.8px;
`;

const Text = styled.input`
  display: flex;
  flex-direction: column;
`;

const ChangePassword = styled.div`
  margin-top: 10px;
`;
const Fotter = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`;

const Checkbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Check = styled.div`
  display: flex;
  flex-direction: row; // Display items in a row
  align-items: center; // Align items vertically in the center
  gap: 10px;
`;

const P = styled.p`
  font-family: "Poppins", sans-serif;
  color: var(--Light-Color---1, #737b86);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.8px;
`;
const Terms = styled.span`
  color: var(--Secondary---1, #f78719);
  text-decoration: underline;
`;
const End = styled.div`
  display: flex;
  gap: 80px;
`;
const Pass = styled.p`
  font-family: "Poppins", sans-serif;
  color: var(--Secondary---1, #f78719);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.8px;
`;

const PasswordContainer = styled.div`
  position: relative;
`;

const PasswordField = styled.div`
  display: flex;
  align-items: center;
`;

const EyeImage = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 10px;
  top: 30%;
  transform: translateY(-50%);
  z-index: 1;
`;

const Button = styled.button`
  margin-top: 20px;
  margin-bottom: 40px;
  padding: 14px 180px;
  border-radius: 8px;
  background: var(--Primary---1, #1575a7);
  color: white;
  font-family: "Poppins", sans-serif;
  border: none;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 19.8px;
  cursor: pointer;
`;

const Last = styled.p`
  color: #04072f;

  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const RegisterLink = styled.span`
  color: var(--Secondary---1, #f78719);
  text-decoration-line: underline;
`;

const RightPage = () => {
  return (
    <PageContainer>
      <Heading>Login</Heading>

      <Form>
        <Label htmlFor="text">Login ID</Label>
        <Input type="text" name="text" placeholder="Enter Login ID" />
        <Label htmlFor="Password">Password</Label>
        <PasswordContainer>
          <PasswordField>
            <Input
              type="password"
              name="password"
              placeholder="Enter Password"
            />
          </PasswordField>
          <EyeImage src="/eye.svg" alt="Toggle Password Visibility" />
        </PasswordContainer>
        <End>
          <Fotter>
            <Checkbox>
              <Text type="checkbox" name="remember-me" />
              <P>Remember Me</P>
            </Checkbox>
            <Check>
              <Text type="checkbox" name="terms and condition" />
              <P>
                Agree to <Terms>Terms & Conditions</Terms>
              </P>
            </Check>
          </Fotter>

          <ChangePassword>
            <Pass>Change Password</Pass>
          </ChangePassword>
        </End>
        <Button>Login</Button>
        <Last>
          Don't have an account? <RegisterLink>Register Here</RegisterLink>
        </Last>
      </Form>
    </PageContainer>
  );
};

export default RightPage;
