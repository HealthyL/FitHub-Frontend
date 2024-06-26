export class userEntity {
    constructor(id= '', username= '', email='', birthdate='', gender='', objective=null, password='') {
        this.id = id;
        this.username = username;
        this.email = email;
        this.birthdate = birthdate;
        this.gender=gender;
        this.objective=objective;
        this.password=password;
    }
}