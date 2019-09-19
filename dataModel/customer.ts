export class CustomerModel {
    company: string
    tax: string
    firstName: string
    lastName: string
    address1: string
    address2: string
    city: string
    postCode: string
    phone: string
    email: string
}

export class ValidCustomerModel extends CustomerModel {
    constructor() {
        super();
        this.company = "myCompany";
        this.tax = '444'
        this.firstName = "Vlad";
        this.lastName = "Maslii";
        this.address1 = "myAdress1";
        this.address2 = "myAdress2";
        this.city = "Kiev";
        this.postCode = '16500';
        this.phone = '380931111111';
        this.email = "Test@gmail.com";
    }
}