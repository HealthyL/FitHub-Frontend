export class fitExplorerEntity {
    constructor(id= '', name= '', age= '', weight= 0, height= 0, email='', statistics=null, objectiveId=0 ) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.email = email;
        this.statistics=statistics;
        this.objectiveId=objectiveId;
    }
}