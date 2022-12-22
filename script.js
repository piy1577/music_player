//all variables
var play = document.querySelector(".play");
var audio = new Audio("dandelions.mp3");
var progress = document.querySelector(".progress-bar");
var audio_name = document.querySelector(".name");
audio_name.innerHTML = "dandelions";

//click handlers
play.addEventListener("click", () => {
    play.classList.toggle("fa-play");
    play.classList.toggle("fa-pause");
    if (play.classList.contains("fa-pause")) {
        audio.play();
        document.querySelector(".logo").classList.add("animate");
        document.getElementById("info").style.opacity = 1;
    } else {
        audio.pause();
        document.querySelector(".logo").classList.remove("animate");
        document.getElementById("info").style.opacity = 0;
    }
});

// on time change

audio.addEventListener("timeupdate", () => {
    var currentTime = audio.currentTime;
    var TotalTime = audio.duration;
    var width = currentTime / TotalTime;
    progress.style.width = `${width * 100}%`;
    if (width == 1) {
        audio.currentTime = 0;
        audio.play();
    }
});

// onclick on progress bar

document.querySelector(".progress").addEventListener("click", (e) => {
    var x = e.clientX - e.target.getBoundingClientRect().left;
    var width = (x * 100) / 155;
    audio.currentTime = (width * audio.duration) / 100;
});

//onclick next
document.querySelector(".fa-forward").addEventListener("click", () => {
    audio.currentTime += 10;
});

//onclick previous
document.querySelector(".fa-backward").addEventListener("click", () => {
    audio.currentTime -= 10;
});
