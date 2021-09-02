// Exercise 1

class Store {
    constructor(name) {
        this.name = name;
        this.inventory = [];
        this.employees = [];
        this.manager = null;
    }

    displayInventory() {
        this.inventory.forEach((item) => {
            alert(`Product: ${item.name}, Stock: ${item.amount}`);
        });
    }

    stock(productName, amount) {
        if (
            this.inventory.reduce(
                (found, currItem) =>
                    currItem.name == productName ? currItem : null,
                null
            )
        ) {
            // The item is in inventory and must be updated
            this.inventory.forEach((val, idx) => {
                if (val.name == productName) {
                    this.inventory[idx].amount += amount;
                }
            });
        } else {
            // Item is new and not currently in inventory
            let item = new Item(productName);
            item.amount += amount;
            this.inventory.push(item);
        }

        this.displayInventory();
    }

    sell(productName, amount) {
        if (
            this.inventory.reduce(
                (found, currItem) =>
                    currItem.name == productName ? currItem : null,
                null
            )
        ) {
            // The item is in inventory and must be updated
            this.inventory.forEach((val, idx) => {
                if (val.name == productName && val.amount - amount > 0) {
                    this.inventory[idx].amount -= amount;
                } else {
                    alert(`${val.name} has too little stock for your sale!`);
                }
            });
        } else {
            // Item is not currently in inventory
            alert(`${productName} is sold out!`);
        }
    }
}

class Item {
    constructor(name) {
        this.name = name;
        this.amount = 0;
    }

    increment(num) {
        this.amount += num;
    }

    decrement(num) {
        this.amount -= num;
    }
}

let piggleWiggly = new Store("Piggly Wiggly");

let productName = prompt("Product to Stock:");
let productAmount = parseInt(prompt("Amount to Stock:"));

piggleWiggly.stock(productName, productAmount);
