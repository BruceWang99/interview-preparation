// 用Promise实现图片的异步加载
function imageAsync (url) {
	return new Promise((resolve, reject)=> {
		const img = new Image()
		img.setAttribute("src", url)
		img.onload = resolve
		img.onerror = reject
	})
}

imageAsync('https://fresh-android.chengbao88.com/static/img/02.ad3ed5e3.png').then(res=> {
	console.log(res);
})
