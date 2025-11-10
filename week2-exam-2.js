// Create constructor function with prototype methods

function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;


}

Product.prototype.sell = function (quantity) {
    if (quantity > this.stock) {
        return `not enough to sell`
    }

    this.stock = this.stock - quantity

    return quantity * this.price
}

Product.prototype.restock = function(addProduct) {
    if(addProduct>0){
        this.stock = this.stock + addProduct
        return `Restocked successfully`;

    }
    return `error adding stock`
}

Product.prototype.getInfo = function(){
    return `${this.name} - $${this.price} (${this.stock} en stock)`
}
// Add these methods to prototype:
// 1. sell(quantity) - reduces stock, returns total price or error if not enough stock
// 2. restock(quantity) - adds to stock
// 3. getInfo() - returns formatted string with all info

// Test
const laptop = new Product("Laptop", 1000000, 5);
console.log(laptop.sell(2));     // 2000000
console.log(laptop.getInfo());   // "Laptop - $1000000 (3 in stock)"
console.log(laptop.sell(10));    // Error: not enough stock