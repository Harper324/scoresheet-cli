function printScoreSheet(allStudentsScore, studentsId) {
    studentsId = studentsId.split(', ');
    let studentsInfo = allStudentsScore.filter(element => studentsId.indexOf(element.id) > -1);
    let header = studentsInfo[0].courses.map(el => el.course).map(el => el + '|').join('');
    let scores = '';
    for (let i = 0; i < studentsInfo.length; i++) {
        let score = `${studentsInfo[i].name}|${studentsInfo[i].courses.map(el => el.score).map(el => el + '|').join('')}${studentsInfo[i].average}|${studentsInfo[i].total}`;
        scores = scores.concat(score + '\n');
    }
    let allTotalArray = allStudentsScore.map(ele => ele.total);
    let allTotalAverage = getAverage(allTotalArray);
    let allTotalMedian = getMedian(allTotalArray);
    return `
成绩单
姓名|${header}平均分|总分
========================
${scores}========================
全班总分平均数：${allTotalAverage}
全班总分中位数：${allTotalMedian}`;
}


function getAverage(allTotalArray) {
    return allTotalArray.reduce((a, b) => a + b) / allTotalArray.length;
}

function getMedian(allTotalArray) {
    let highNumber = Math.floor((allTotalArray.length - 1) / 2);
    let lowNumber = Math.ceil((allTotalArray.length - 1) / 2);
    return (allTotalArray[highNumber] + allTotalArray[lowNumber]) / 2;
}


module.exports = printScoreSheet;