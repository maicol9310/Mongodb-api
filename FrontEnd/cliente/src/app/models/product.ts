export class Product {
    _id?: number;
    name: string;
    description: string;
    category: string;
    price: number;
    amount: number;

    constructor(name: string,description: string, category: string, price: number, amount: number){
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
        this.amount = amount;
    }
}