let add = document.getElementById('add');

//Creating class
class Animal {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    showInfo() {
        add.innerHTML += `Wow! my name is <b>${this.name}</b> and I am <b>${this.age}</b> years old.`;
    }
}

const obj = new Animal("Buddy", 6);

obj.showInfo();