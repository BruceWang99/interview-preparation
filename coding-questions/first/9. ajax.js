let xhr = new XMLHttpRequest()

xhr.open('GET', 'url', true)

xhr.onreadystatechange = function() {
	if(this.readyState !== 4) return

	if(this.status === 200) {
		console.log(this.response);
	} else {
		console.log(this.statusText)
	}
}

xhr.onerror = function () {
	console.log(this.statusText);
}

xhr.setRequestHeader('Accept', 'application/json')

xhr.responseType = 'json'

xhr.send(null)