import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  flex: 0 0 calc(33.3% - 3rem);
`;

const Box = ({ children }) => {
  return (
    <Wrap>
      <Content>
        <fieldset>
          <legend>PARA USO EXCLUSIVO DEL IOMA</legend>
          <div>
            <label for="user-name">Username:</label>
            <input
              name="user-name"
              type="email"
              placeholder="Your username is your email address"
            />
          </div>
          <div>
            <label for="password">Password:</label>
            <input
              name="password"
              type="password"
              placeholder="6 digits, a combination of numbers and letters"
            />
          </div>
          <div>
            <input name="login" type="submit" value="Login" />
          </div>
        </fieldset>
      </Content>
    </Wrap>
  );
};

export default Box;
