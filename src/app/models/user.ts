export class User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    token: string;
    role: string;

    constructor(json?: any) {
        if (json) {
            this.id = json.id;
            this.firstName = json.firstName;
            this.lastName = json.lastName;
            this.username = json.username;
            this.password = json.password;
            this.token = json.token;
            this.role = json.role;
        }
    }
}
