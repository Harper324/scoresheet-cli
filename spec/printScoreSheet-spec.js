var printScoreSheet = require('../lib/printScoreSheet');

describe('printScoreSheet', function () {

    var studnetsInfo = [{ 'name': '张一', '学号': '1801', 'math': 97, 'language': 96, 'english': 95, 'programming': 94 },
    { 'name': '李子', '学号': '1802', 'math': 99, 'language': 90, 'english': 91, 'programming': 96 },
    { 'name': '王小', '学号': '1803', 'math': 92, 'language': 95, 'english': 93, 'programming': 92 }];

    var scoreSheet = `
成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================
张一|97|96|95|94|95.5|382
李子|99|90|91|96|94|376
王小|92|95|93|92|93|372
========================
全班总分平均数：xxx
全班总分中位数：xxx`

    it('Add and format student information', function () {

        var result = printScoreSheet(studnetsInfo);
        expect(result).toEqual(scoreSheet);
    });
});