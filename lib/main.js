var getNumber = require('cli-interact').getNumber;
var question = require('cli-interact').question;
var addStudent = require('../lib/addStudent.js');
var getStudentsScore = require('../lib/getStudentsScore');
var printScoreSheet = require('../lib/printScoreSheet');


function main() {
    var number = getNumber(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);

    var allStudentsScore = [];
    while (number === 1) {
        var studentMessage = question('请输入学生信息（格式：姓名, 学号, 学科: 成绩, ...），按回车提交：');
        while (!judgeFormat(studentMessage)) {
            studentMessage = question('请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：');
        }

        allStudentsScore.push(addStudent(studentMessage));
        console.log(addStudent(studentMessage));
        console.log(`学生${studentMessage.split(', ')[0]}的成绩被添加`);
        number = getNumber(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
    }
    while (number === 2) {
        var studentsId = question('请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
        while (!judgeId(studentsId)) {
            studentsId = question('请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
        }
        let studentsScore = getStudentsScore(allStudentsScore, studentsId);
        let scoreSheet = printScoreSheet(studentsScore);

        console.log(scoreSheet);
        number = getNumber(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
    }
    while (number === 3) {
        return;
    }
}





function judgeFormat(studentMessage) {
    if (studentMessage.split(',').length > 2) {
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