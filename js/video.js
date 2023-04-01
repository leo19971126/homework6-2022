var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	console.log('Autoplay is set to ' + video.autoplay)
	video.loop = false;
	console.log('Loop is set to ' + video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector('#volume').innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
})

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.90;
	console.log("New speed is " + video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.90;
	console.log("New speed is " + video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
	}
	console.log("Current location: " + video.currentTime);
})

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		this.textContent = "Mute";
		console.log('Unmute')
	}else{
		video.muted = true;
		this.textContent = "Unmute";
		console.log('Mute')
	}
})

document.querySelector("#slider").addEventListener("change", function() {
    video.volume = this.value / 100;
	console.log(this.value / 100);
	document.querySelector('#volume').innerHTML = (video.volume * 100) + "%";
})

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Vintage");
})

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original");
})
