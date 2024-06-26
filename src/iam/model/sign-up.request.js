export class SignUpRequest {
    constructor(username, email, birthdate, gender, objective,password) {
        this.username = username;
        this.email = email;
        this.birthdate = birthdate;
        this.gender=gender;
        this.objective = objective;
        this.password = password;
    }
}