const ALARM_HOUR = 20;
const ALARM_MINUTE = 36;
var isPlaying = false;

function updateTime(){
    var timeNow = new Date();
   
    if(timeNow.getHours() == ALARM_HOUR && timeNow.getMinutes() == ALARM_MINUTE && isPlaying == false){
        playAudio();
        isPlaying = true;
    }

    var timeString = timeNow.getFullYear() + "年" + (timeNow.getMonth()+1) + "月" + timeNow.getDate() + "日 " + timeNow.toLocaleTimeString();

    document.getElementById("timenow").innerHTML = "现在是 " + "<b>" + timeString.toString() + "</b>";
}

setInterval(updateTime, 1000);

function playAudio(){
    document.getElementById("audio").play();
}