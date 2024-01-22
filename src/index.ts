class Invoice {
   // readonly client: string; // when using readonly, we can not change the property outside of the class(AKA access modifiers)
   // private details: string; // when using private, we can not access the property outside of the class
   // public amount: number; // public is the default

    // constructor(client: string, details: string, amount: number) {
    //     this.client = client;
    //     this.details = details;
    //     this.amount = amount;
    // }

    //shorter way of writing the constructor and assigning the properties
    constructor(readonly client: string, private details: string, public amount: number) {
        // this.client = c;
        // this.details = d;
        // this.amount = a;
    }


    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice('Mario', 'work on the mario website', 250);
const invTwo = new Invoice('Luigi', 'work on the luigi website', 300);

console.log('invOne.format();: ', invOne.format())

// create an array and only allow objects of type Invoice in teh array

//let invoices: string[] = []; // only allow strings in the array
let invoices: Invoice[] = [];

// invoices.push('hello'); // error

invoices.push(invOne); // ok
invoices.push(invTwo); // ok


invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});

// change properties

invOne.client = 'Jason';
