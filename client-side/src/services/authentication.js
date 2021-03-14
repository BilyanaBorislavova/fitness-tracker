import { post } from './crud';

class AuthenticationService {
    constructor() {
        this.baseURL = 'http://localhost:5000';
        this.registerURL = `${this.baseURL}/auth/register`;
    };

    register = (user) => post(this.registerURL, user);
}

export default AuthenticationService;
