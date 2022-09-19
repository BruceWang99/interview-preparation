

function dateFormat(date, format) {
	// YYYY MM DD HH mm ss

	if(!(date instanceof Date)) {
		date = new Date(date)
	}
	let year = '' + date.getFullYear()
	let month = addTag(date.getMonth() + 1)
	console.log(month, date.getMonth() + 1);
	let day = addTag(date.getDate())
	let hour = addTag(date.getHours())
	let minute = addTag(date.getMinutes())
	let second = addTag(date.getSeconds())

	format = format.replace(/YYYY/g, year)
	format = format.replace(/YY/g, year.substring(2))
	format = format.replace(/MM/g, month)
	format = format.replace(/M/g, month.substring(1))
	format = format.replace(/DD/g, day)
	format = format.replace(/D/g, day.substring(1))
	format = format.replace(/HH/g, hour)
	format = format.replace(/H/g, hour.substring(1))
	format = format.replace(/mm/g, minute)
	format = format.replace(/m/g, minute.substring(1))
	format = format.replace(/ss/g, second)
	format = format.replace(/s/g, second.substring(1))
	return format
}
function addTag(v) {
	return (v < 10 ? '0' : '') + v
}
console.log(dateFormat(new Date(), 'YYYY-M-DD HH:mm:ss'))