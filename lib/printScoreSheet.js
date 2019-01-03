

function printScoreSheet(studentsInfo) {
    var scores = '';
    for (let i = 0; i < studentsInfo.length; i++) {
        var score = `${studentsInfo[i].name}|${studentsInfo[i].math}|${studentsInfo[i].language}|${studentsInfo[i].english}|${studentsInfo[i].programming}`;
        var total = studentsInfo[i].math + studentsInfo[i].language + studentsInfo[i].english + studentsInfo[i].programming;
        var average = total / 4;

        scores = scores.concat(`${score}|${average}|${total}
`);
    }
    return `
成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================
${scores}========================
全班总分平均数：xxx
全班总分中位数：xxx`;
}


module.exports = printScoreSheet;