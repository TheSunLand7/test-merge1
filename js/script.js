let container = document.getElementById('container');

//Creating class
class Animal {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    showInfo() {
        container.innerHTML += `Wow! my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const obj = new Animal("Buddy", 6);

obj.showInfo();