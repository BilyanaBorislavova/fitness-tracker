import { createContext } from 'react';

const defaultUserData = {
    id: '',
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    avatar: '',
    isLoggedIn: false,
    roles: [],
};

const UserContext = createContext(defaultUserData);

export { UserContext };
