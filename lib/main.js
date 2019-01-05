var getNumber = require('cli-interact').getNumber;
var question = require('cli-interact').question;
var addStudent = require('../lib/addStudent.js');
var printScoreSheet = require('../lib/printScoreSheet');
var allStudentsScore = [];

function main() {
    var number = getNumber(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);

    switch (number) {
        case 1:
            var inputStudent = question('请输入学生信息（格式：姓名, 学号, 学科: 成绩, ...），按回车提交：');
            while (!judgeFormat(inputStudent)) {
                inputStudent = question('请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：');
            }
            allStudentsScore.push(addStudent(inputStudent));
            console.log(`学生${inputStudent.split(', ')[0]}的成绩被添加`);
            main();
            break;
        case 2:
            var studentsId = question('请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
            while (!judgeId(studentsId)) {
                studentsId = question('请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
            }
            let scoreSheet = printScoreSheet(allStudentsScore, studentsId);
            console.log(scoreSheet);
            main();
            break;
        default:
            return;
    }
}





function judgeFormat(inputStudent) {
    if (inputStudent.split(',').length > 2) {
        return true;
    }
    return false;
}

function judgeId(studentsId) {
    studentsId = studentsId.split(', ').map(element => Number(element));
    var judgeId = studentsId.filter(element => element == element);
    if (studentsId.length === judgeId.length) {
        return true;
    }
    return false;
}

module.exports = main();