class Examination {
    constructor(i, mcq, essay) {
        this.indexNumber = i
        this.mcqMarks = mcq
        this.essayMarks = essay
    }

    getTotal() {
        this.totalMarks = this.mcqMarks + this.essayMarks
    }

    displayTotal() {
        console.log("Total Marks: " + this.totalMarks + "")
    }

    displayResult() {
        if (this.totalMarks >= 50) {
            console.log("Pass")
        } else {
            console.log("Fail")
        }
    }

    displayGrade() {
        if (this.totalMarks < 35) {
            console.log("Grade W")
        } else if (this.totalMarks < 55) {
            console.log("Grade S")
        } else if (this.totalMarks < 65) {
            console.log("Grade C")
        } else if (this.totalMarks < 75) {
            console.log("Grade B")
        } else {
            console.log("Grade A")
        }
    }
}

const student1 = new Examination(21000557, 40, 40);
student1.getTotal()
student1.displayTotal()
student1.displayResult()
student1.displayGrade()