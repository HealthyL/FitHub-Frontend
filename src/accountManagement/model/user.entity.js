export class userEntity {
    constructor(id= '', username= '', email='', birthdate='', objective=null, password='') {
        this.id = id;
        this.username = username;
        this.email = email;
        this.birthdate = birthdate;
        this.objective=objective;
        this.password=password;
    }
}