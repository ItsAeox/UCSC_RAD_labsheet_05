class Book {
    discount = 0

    constructor(name, price, author, publisher) {
        this.name = name
        this.price = price
        this.author = author
        this.publisher = publisher
    }

    displayDetails() {
        const discountPrice = this.discount * this.price
        const newPrice = this.price - discountPrice

        console.log("Name: " + this.name)
        console.log("Price: " + this.price)
        console.log("Author: " + this.author)
        console.log("publisher: " + this.publisher)
        console.log("Discount: " + this.discount * 100 + "%")
        console.log("Discount Price: " + discountPrice)
        console.log("New Price: " + newPrice)
    }
}

class EducationalBook extends Book {
    discount = 0.2

    constructor(name, price, author, publisher) {
        super(name, price, author, publisher)
    }
}

class Novel extends Book {
    discount = 0.15

    constructor(name, price, author, publisher) {
        super(name, price, author, publisher)
    }
}

class ShortStoryBook extends Book {
    discount = 0.15

    constructor(name, price, author, publisher) {
        super(name, price, author, publisher)
    }
}
class BiographicBook extends Book {
    discount = 0.1

    constructor(name, price, author, publisher) {
        super(name, price, author, publisher)
    }
}

const Educational1 = new EducationalBook(
    "Educated",
    4500,
    "Tara Westover",
    "Tara Westover"
)

Educational1.displayDetails()

console.log("")
const Novel1 = new Novel("The Vampire Diaries", 5000, "L. J. Smith", "	Harper Paperbacks")

Novel1.displayDetails()

console.log("")
const shortStory1 = new ShortStoryBook("The nightingale and the rose", 1000, "Oscar Wilde", "Oscar Wilde")

shortStory1.displayDetails()

console.log("")
const Biographical1 = new BiographicBook("Steve Jobs", 4000, "Walter Isaacson", "Simon & Schuster")

Biographical1.displayDetails()