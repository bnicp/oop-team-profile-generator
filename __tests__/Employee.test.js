const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe:("Intitialization"), () => {
        it("should instantiate an employee instance", () => {
            const employee = new Employee()

            expect(typeof employee).tobe("object");
        });

        it("Should set name via constructor arguments", () => {
            const name = "Alice"
        })
     });
});





describe("Getter methods", () => {
    it("should get name via getName()", () => {

        const name = "Alice";

        const employee = new Employee(name, 100, "test@test.com")




    }
});