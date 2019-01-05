function printScoreSheet(allStudentsScore, studentsId) {
    var studentsId = studentsId.split(', ');
    var studentsInfo = allStudentsScore.filter(element => studentsId.indexOf(element.id) > -1);
    var header = studentsInfo[0].courses.map(el => el.course).map(el => el + '|').join('');
    var scores = '';
    for (let i = 0; i < studentsInfo.length; i++) {
        var score = `${studentsInfo[i].name}|${studentsInfo[i].courses.map(el => el.score).map(el => el + '|').join('')}${studentsInfo[i].average}|${studentsInfo[i].total}`;
        scores = scores.concat(score + '\n');
    }
    var allTotalArray = allStudentsScore.map(ele => ele.total);
    var allTotalAverage = getAverage(allTotalArray);
    var allTotalMedian = getMedian(allTotalArray);
    return `
成绩单
姓名|${header}平均分|总分
========================
${scores}========================
全班总分平均数：${allTotalAverage}
全班总分中位数：${allTotalMedian}`;
}


function getAverage(allTotalArray) {
    return allTotalArray.reduce((a, b) => a + b) / allTotalArray.length
}

function getMedian(allTotalArray) {
    let highNumber = Math.floor((allTotalArray.length - 1) / 2);
    let lowNumber = Math.ceil((allTotalArray.length - 1) / 2);
    return (allTotalArray[highNumber] + allTotalArray[lowNumber]) / 2;
}


module.exports = printScoreSheet;