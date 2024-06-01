export class SubscriptionEntity {
    constructor(id, name, description, isCurrent) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.isCurrent = isCurrent;
    }
}