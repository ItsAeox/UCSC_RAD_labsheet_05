class Student {
    constructor(i, n, d, a, c, e) {
        this.indexNumber = i
        this.name = n
        this.dob = d
        this.address = a
        this.contactNumber = c
        this.email = e
    }

    showDetails() {
        console.log("Name: " + this.name)
        console.log("Index Number: " + this.indexNumber)
        console.log("Date of Birth: " + this.dob)
        console.log("Address: " + this.address)
        console.log("Contact Number: " + this.contactNumber)
        console.log("Email: " + this.email)
    }

    setGroup() {
        var remainder = this.indexNumber % 4;
        switch (remainder) {
            case 0:
                this.group = 1;
                break
            case 1:
                this.group = 2;
                break
            case 2:
                this.group = 3;
                break
            case 3:
                this.group = 4;
                break
          }
    }

    showGroup() {
        console.log(
            "Group number of " + this.indexNumber + " is " + this.group
        );
    }
}

const person1 = new Student(
    21000557,
    "Gayathra",
    "2000-03-21",
    "Post office quarters, Maharagama",
    "0702604647",
    "gayathradissa@gmail.com"
)

person1.showDetails()
person1.setGroup()
person1.showGroup()
    