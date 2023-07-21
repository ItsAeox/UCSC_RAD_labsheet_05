
class Solid {
    pi = 3.14

    constructor() {}
    GetArea() {}
    GetVolume() {}
}

class Cube extends Solid {
    constructor(l) {
        super()
        this.length = l
    }

    GetArea() {
        return this.length * 2 * 6
    }

    GetVolume() {
        return this.length ** 3
    }
}

class Cuboid extends Solid {
    constructor(l, w, h) {
        super()
        this.length = l
        this.width = w
        this.height = h
    }

    GetArea() {
        let shape1Area = this.length * this.width * 2
        let shape2Area = this.length * this.height * 2
        let shape3Area = this.width * this.height * 2

        return shape1Area + shape2Area + shape3Area
    }

    GetVolume() {
        return this.length * this.width * this.height
    }
}

class Cylinder extends Solid {
    constructor(r, h) {
        super()
        this.radius = r
        this.height = h
    }

    GetArea() {
        let shape1Area = this.pi * this.radius ** 2
        let shape2Area = 2 * this.pi * this.radius * this.height

        return shape1Area * 2 + shape2Area
    }

    GetVolume() {
        let shape1Area = this.pi * this.radius ** 2

        return shape1Area * this.height
    }
}

class Sphere extends Solid {
    constructor(r) {
        super()
        this.radius = r
    }

    GetArea() {
        return 4 * this.pi * this.radius ** 2
    }

    GetVolume() {
        return (4 / 3) * (this.pi * this.radius ** 3)
    }
}

class Cone extends Solid {
    constructor(r, h) {
        super()
        this.radius = r
        this.height = h
    }

    GetArea() {
        const l = (this.radius ** 2 + this.height ** 2) ** 0.5
        return this.pi * this.radius * (l + this.radius)
    }

    GetVolume() {
        return (1 / 3) * this.pi * this.radius ** 2 * this.height
    }
}

let cube = new Cube(3)

console.log("Area of Cube: " + cube.GetArea())
console.log("Volume of Cube: " + cube.GetVolume())

let cuboid = new Cuboid(3, 5, 2)

console.log("Area of Cuboid: " + cuboid.GetArea())
console.log("Volume of Cuboid: " + cuboid.GetVolume())

let cylinder = new Cylinder(6, 3)

console.log("Area of Cylinder: " + cylinder.GetArea())
console.log("Volume of Cylinder: " + cylinder.GetVolume())

let sphere = new Sphere(4)

console.log("Area of Sphere: " + sphere.GetArea())
console.log("Volume of Sphere: " + sphere.GetVolume())

let cone = new Cone(6, 2)

console.log("Area of Cone: " + cone.GetArea())
console.log("Volume of Cone: " + cone.GetVolume())