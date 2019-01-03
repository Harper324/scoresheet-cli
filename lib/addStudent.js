function addStudent(studentMessage) {
    if (judgeFormat(studentMessage)) {
        return formatInfo(studentMessage);

    }
}

function judgeFormat(studentMessage) {
    if (studentMessage.split(',').length > 2) {
        return true;
    }
    return false;
}

function formatInfo(studentMessage) {
    var studentArray = studentMessage.split(', ');
    var studentInfo = {};
    studentInfo.name = studentArray[0];
    studentInfo.studentId = studentArray[1];
    studentInfo.math = parseInt(studentArray[2].split(': ')[1]);
    studentInfo.language = parseInt(studentArray[3].split(': ')[1]);
    studentInfo.english = parseInt(studentArray[4].split(': ')[1]);
    studentInfo.programming = parseInt(studentArray[5].split(': ')[1]);
    return studentInfo;



}



module.exports = addStudent;