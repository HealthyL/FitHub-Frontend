export class userEntity {
    constructor(id= '', name= '', email='', birthdate='', gender='', objective=null, password='') {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthdate = birthdate;
        this.gender=gender;
        this.objective=objective;
        this.password=password;
    }
}