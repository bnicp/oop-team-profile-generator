class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

getName() {
    return this.name;
}

GetId() {
    return this.id;
}

getEmail() {
    return this.email;
}

getRole() {
    return this.email;
}

module.exports = Employee;