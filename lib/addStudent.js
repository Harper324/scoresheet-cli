function addStudent(inputStudent) {
    class Student {
        constructor(name, id, courses) {
            this.name = name,
                this.id = id,
                this.courses = courses,
                this.total = courses.map(element => element.score).reduce((a, b) => a + b),
                this.average = this.total / courses.length
        }
    }
    var studentArray = inputStudent.split(', ');
    var courses = [];
    for (let i = 2; i < studentArray.length; i++) {
        courses.push({
            course: studentArray[i].split(': ')[0],
            score: parseInt(studentArray[i].split(': ')[1])
        });
    }
    var student = new Student(studentArray[0], studentArray[1], courses)
    return student;
}
module.exports = addStudent;