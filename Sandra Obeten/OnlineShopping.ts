// Define interfaces for products
interface Product {
    id: number;
    name: string;
    price: number;
}

class ConcreteProduct implements Product {
    constructor(public id: number, public name: string, public price: number) {}
}

interface ShoppingCart {
    addProduct(product: Product): void;
    removeProduct(product: Product): void;
    calculateTotal(): number;
}

class ConcreteShoppingCart implements ShoppingCart {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    removeProduct(product: Product): void {
        const index = this.products.findIndex(p => p.id === product.id);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    }

    calculateTotal(): number {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}


const product1: Product = new ConcreteProduct(1, 'HP', 1000);
const product2: Product = new ConcreteProduct(2, 'Lenovo', 1500);

const shoppingCart: ShoppingCart = new ConcreteShoppingCart();
shoppingCart.addProduct(product1);
shoppingCart.addProduct(product2);

console.log("Total:", shoppingCart.calculateTotal());
shoppingCart.removeProduct(product2);
console.log("Total after removing product 2: ", shoppingCart.calculateTotal());
