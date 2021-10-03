var videoid=document.getElementById('videoid');

var playBtn=document.getElementById('playBtn');

var icon=document.getElementById('icon');

playBtn.onclick=function(){
    videoid.style.display="block";

    if(videoid.paused){
        videoid.play();
        icon.src="pics/pause.png";
    }
    else{
        videoid.pause();
        icon.src="pics/play.png";
    }
}