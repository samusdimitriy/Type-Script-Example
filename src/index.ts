type PersonInformation = {
  firstName?: string;
  lastName?: string;
}

class Person {
  private personInfo: PersonInformation = {};

  set firstName(firstName: string) {
    console.log('set firstName');
    this.personInfo.firstName = firstName;
  }

  set lastName(lastName: string) {
    console.log('set lastName');
    this.personInfo.lastName = lastName;
  }

  get info() {
    const { personInfo } = this;
    return `${personInfo.firstName} ${personInfo.lastName}`;
  }
}

const person = new Person();

person.firstName = 'John';
person.lastName = 'Doe';

console.log(person.info); 
```