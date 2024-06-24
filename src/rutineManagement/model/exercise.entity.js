export class ExerciseEntity{
    constructor(id = 0,
                name = '',
                photoUrl = '',
                sets = 0,
                reps = 0,
                weight = '',
                rutineId = 0)
    {
        this.id = id;
        this.name = name;
        this.photoUrl = photoUrl;
        this.sets = sets;
        this.reps = reps;
        this.weight = weight;
        this.rutineId = rutineId;
    }
}