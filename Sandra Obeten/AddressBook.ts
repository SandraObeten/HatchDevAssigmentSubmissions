// Implement an address book system using OOP principles. 
// Each contact should be represented as an object 
// with attributes like name, phone number, and address.
// Demonstrate inheritance and encapsulation 
// in your implementation.


class Contact {
    private name: string;
    private phoneNumber: string;
    private address: string;

    constructor(name: string, phoneNumber: string, address: string) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    getName(): string {
        return this.name;
    }

    getPhoneNumber(): string {
        return this.phoneNumber;
    }

    getAddress(): string {
        return this.address;
    }

    setName(name: string): void {
        this.name = name;
    }

    setPhoneNumber(phoneNumber: string): void {
        this.phoneNumber = phoneNumber;
    }

    setAddress(address: string): void {
        this.address = address;
    }

    displayInfo(): void {
        console.log(`Name: ${this.name}, Phone Number: ${this.phoneNumber}, Address: ${this.address}`);
    }
}

class BusinessContact extends Contact {
    private email: string;

    constructor(name: string, phoneNumber: string, address: string, email: string) {
        super(name, phoneNumber, address);
        this.email = email;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    displayInfo(): void {
        super.displayInfo();
        console.log(`Email: ${this.email}`);
    }
}

class AddressBook {
    private contacts: Contact[];

    constructor() {
        this.contacts = [];
    }

    addContact(contact: Contact): void {
        this.contacts.push(contact);
    }

    displayAllContacts(): void {
        this.contacts.forEach(contact => {
            contact.displayInfo();
        });
    }
}


const addressBook = new AddressBook();

const contact1 = new Contact("Biola", "654-758-7890", "somolu");
const contact2 = new BusinessContact("Tola", "987-654-3210", "Ajah", "tola@gmail.com");
const contact3 = new BusinessContact("Ade", '893-456-3245', "Ozolua", "ade@gmail.com")

addressBook.addContact(contact1);
addressBook.addContact(contact2);
addressBook.addContact(contact3);

addressBook.displayAllContacts();
