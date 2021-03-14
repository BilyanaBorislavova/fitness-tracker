import '../../styles/components/register/register-form.scss';

import React from 'react';
import { useFormField } from '../../hooks/use-form-field';
import { default as Form } from '../form/form-with-validation';
import AuthenticationService from '../../services/authentication';
import EmailInput from '../input/email-input';
import NameInput from '../input/name-input';
import UsernameInput from '../input/username-input';
import GenericBtn from '../button/generic-btn';
import PasswordInput from '../input/password-input';

const authenticationService = new AuthenticationService();

const RegisterForm = () => {
    const [ firstName, onFirstNameChange ] = useFormField('');
    const [ lastName, onLastNameChange ] = useFormField('');
    const [ username, onUsernameChange ] = useFormField('');
    const [ email, onEmailChange ] = useFormField('');
    const [ password, onPasswordChange ] = useFormField('');

    const onSubmit = async () => {
      const user = {
        firstName,
        lastName,
        username,
        email,
        password,
      };
      console.log()
      try {
        await authenticationService.register(user);
      } catch (err) {
        console.log(err)
      }
    };
  
    return (
        <Form
          className="register-form"
          onSubmit={onSubmit}
        >
            <NameInput
              name="firstName"
              value={firstName}
              onChange={onFirstNameChange}
              label="First Name *"
            />
            <NameInput
              name="lastName"
              value={lastName}
              onChange={onLastNameChange}
              label="Last Name *"
            />
            <UsernameInput
              name="username"
              value={username}
              onChange={onUsernameChange}
              label="Username *"
            />
            <PasswordInput
              name="password"
              value={password}
              onChange={onPasswordChange}
              label="Password *"
            />
            <EmailInput
              name="email"
              value={email}
              onChange={onEmailChange}
              label="Email *"
            />
            <input type="submit" value="Register" />
        </Form>
    )
};

export default RegisterForm;
