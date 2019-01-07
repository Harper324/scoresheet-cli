class Student {
    constructor(name, id, courses) {
        this.name = name,
            this.id = id,
            this.courses = courses,
            this.total = courses.map(element => element.score).reduce((a, b) => a + b),
            this.average = this.total / courses.length
    }
}
module.exports = Student;