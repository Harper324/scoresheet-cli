var Student = require ('./student.js');
function addStudent(inputStudent) {

    let studentArray = inputStudent.split(', ');
    let courses = [];
    for (let i = 2; i < studentArray.length; i++) {
        courses.push({
            course: studentArray[i].split(': ')[0],
            score: parseInt(studentArray[i].split(': ')[1])
        });
    }
    let student = new Student(studentArray[0], studentArray[1], courses)
    return student;
}
module.exports = addStudent;