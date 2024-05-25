export class ProductEntity {
    constructor(id = 0, name = '', description = '', price = 0, photoUrl = '',  categoryId = 0) {  // Cambiado a número
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.photoUrl = photoUrl;
        this.categoryId = Number(categoryId);
    }
}