class Game {
    constructor(level, score) {
        this.level = level
        this.score = score
    }

    displayWinningMessage() {
        if (this.getWinningState()) {
            console.log("Game: Won!")
        } else {
            console.log("Game: Lost!")
        }
    }
}

class CarGame extends Game {
    constructor(level, winningScore) {
        super(level, winningScore)
    }

    getWinningState(score) {
        return score >= this.score
    }

    displayWinningMessage() {
        const score = 80
        if (this.getWinningState(score)) {
            console.log("Car Game: Won!")
        } else {
            console.log("Car Game: Lost!")
        }
    }
}

class PuzzelGame extends Game {
    constructor(level, winningTime) {
        super(level, winningTime)
    }

    getWinningState(time) {
        return time <= this.score
    }

    displayWinningMessage() {
        const time = 50
        if (this.getWinningState(time)) {
            console.log("Puzzle Game: Won!")
        } else {
            console.log("Puzzle Game: Lost!")
        }
    }
}

class ShootingGame extends Game {
    constructor(level, mission) {
        super(level, mission)
    }

    getWinningState(isCompleted) {
        return isCompleted
    }

    displayWinningMessage() {
        const isCompleted = true
        if (this.getWinningState(isCompleted)) {
            console.log("Shooting Game: Won!")
        } else {
            console.log("Shooting Game: Lost!")
        }
    }
}

const Car = new CarGame("Beginner", 100)
Car.displayWinningMessage()

const Puzzle = new PuzzelGame("Intermediate", 60)
Puzzle.displayWinningMessage()

const Shooting = new ShootingGame("Advanced", 1)
Shooting.displayWinningMessage()