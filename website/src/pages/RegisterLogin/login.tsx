import React, { useState } from "react";
import { Card, Form, Input, Button } from "semantic-ui-react";

function LoginCard(props) {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleEmailUpdate = (event) => {
    const email = event.target.value;
    setInput((prevState) => ({ ...prevState, email }));
  };

  const handlePasswordUpdate = (event) => {
    const password = event.target.value;
    setInput((prevState) => ({ ...prevState, password }));
  };

  return (
    <div className={props.className}>
      <Form>
        <Form.Field>
          <label>Email</label>
          <Input
            icon="mail"
            iconPosition="left"
            placeholder="Email"
            value={input.email}
            onChange={(event) => handleEmailUpdate(event)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input
            icon="key"
            iconPosition="left"
            placeholder="Password"
            value={input.password}
            onChange={(event) => handlePasswordUpdate(event)}
          />
        </Form.Field>
        <Form.Field>
          <div className="flex-container-centered">
            <Button className="login-button">Login</Button>
          </div>
        </Form.Field>
      </Form>
    </div>
  );
}

export default LoginCard;
