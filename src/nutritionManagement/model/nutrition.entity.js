export class NutritionEntity {
    constructor(id= '', name= '',
                description= '',
                photoUrl= '',
                classificationId= 0) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.photoUrl = photoUrl;
        this.classificationId = classificationId;
    }
}