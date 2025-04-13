//your code here

function updateClock(){
	const now = new Date()
	const sec = now.getSeconds()
	const min = now.getMinutes()
	const hr = now.getHours()

	const secDeg = sec*6;
	const minDeg = min * 6 + sec * 0.1; // 360/60 + slight move with seconds
	const hrDeg = (hr % 12) * 30 + min * 0.5;

	document.querySelector(".second-hand").style.transform = `rotate(${secDeg}deg)`
	document.querySelector(".min-hand").style.transform = `rotate(${minDeg}deg)`
	document.querySelector(".hour-hand").style.transform = `rotate(${hrDeg}deg)`
}

setInterval(updateClock, 1000)
updateClock()
