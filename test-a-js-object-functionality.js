var js_object_1 = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
        fullName: function () {
                return this.firstName + " " + this.lastName;
        },
};

console.log(js_object_1.fullName());
