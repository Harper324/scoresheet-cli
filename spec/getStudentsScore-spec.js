var getStudentsScore = require('../lib/getStudentsScore');

describe('getStudentsScore', function () {

    var studentsId = '1801, 1802, 1803';
    var allStudentsScore = [{ 'name': '张一', 'studentId': '1801', 'math': 97, 'language': 96, 'english': 95, 'programming': 94 },
{ 'name': '李子', 'studentId': '1802', 'math': 99, 'language': 90, 'english': 91, 'programming': 96 },
{ 'name': '王小', 'studentId': '1803', 'math': 92, 'language': 95, 'english': 93, 'programming': 92 },
{ 'name': '赵云', 'studentId': '1804', 'math': 96, 'language': 94, 'english': 97, 'programming': 90 },
{ 'name': '田野', 'studentId': '1805', 'math': 90, 'language': 92, 'english': 94, 'programming': 90 }];
    var studentsInfo = [{ 'name': '张一', 'studentId': '1801', 'math': 97, 'language': 96, 'english': 95, 'programming': 94 },
    { 'name': '李子', 'studentId': '1802', 'math': 99, 'language': 90, 'english': 91, 'programming': 96 },
    { 'name': '王小', 'studentId': '1803', 'math': 92, 'language': 95, 'english': 93, 'programming': 92 }];


    it('get students score', function () {

        var result = getStudentsScore(studentsId, allStudentsScore);
        expect(result).toEqual(studentsInfo);
    });
});