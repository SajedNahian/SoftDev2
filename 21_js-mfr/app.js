const percentSchoolsWithMoreFemalesThanMales = data.filter((school) => school.male_per > 50).length / data.length
let schoolDifferences = []
const highestDifferenceInPercentBetweenAsianPerAndHispanicPer = data.reduce((curHighest, currentSchool) => {
	const schoolDifference = Math.abs(currentSchool.asian_per - currentSchool.hispanic_per)
	schoolDifferences.push(schoolDifference)
	return schoolDifference > curHighest ? schoolDifference : curHighest
}, 0)
let schoolFreeLunches = []
const lowestFreeLunchPercentage = data.reduce((curLowest, currentSchool) => {
	const percentFree = currentSchool.fl_percent
	schoolFreeLunches.push(percentFree)
	return percentFree < curLowest ? percentFree : curLowest
}, 100)
const rootDiv = document.getElementById('container')
rootDiv.innerHTML += `<p>Schools with more females than males: ${percentSchoolsWithMoreFemalesThanMales * 100}%</p>`
rootDiv.innerHTML += `<p>Highest difference in percent between asian students and hispanic students: ${highestDifferenceInPercentBetweenAsianPerAndHispanicPer}% (${data[schoolDifferences.indexOf(Math.max(...schoolDifferences))].Name})</p>`
rootDiv.innerHTML += `<p>Lowest free lunch percentage: ${lowestFreeLunchPercentage}% (${data[schoolFreeLunches.indexOf(1.6)].Name})</p>`