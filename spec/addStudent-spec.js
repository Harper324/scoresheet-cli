var addStudent = require('../lib/addStudent.js');

describe('addStudent', function () {

    var studentMessage = '张一, 1801, 数学: 97, 语文: 96, 英语: 95, 编程: 94';
    var studnetInfo = { 'name': '张一', 'studentId': '1801', 'math': 97, 'language': 96, 'english': 95, 'programming': 94 };

    it('Add and format student information', function () {

        var result = addStudent(studentMessage);
        expect(result).toEqual(studnetInfo);
    });
});
