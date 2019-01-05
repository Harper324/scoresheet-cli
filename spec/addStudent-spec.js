var addStudent = require('../lib/addStudent.js');

describe('addStudent', function () {

    class Student {
        constructor(name, id, courses) {
            this.name = name,
                this.id = id,
                this.courses = courses
        }
    }
    var inputStudent = '张一, 1801, 数学: 97, 语文: 96, 英语: 95, 编程: 94';
    var studnetInfo = new Student('张一', '1801', [{ course: '数学', score: 97 },
    { course: '语文', score: 96 },
    { course: '英语', score: 95 },
    { course: '编程', score: 94 }])

    it('Add and format student information', function () {

        var result = addStudent(inputStudent);
        expect(result).toEqual(studnetInfo);
    });
});
