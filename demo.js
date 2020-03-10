

/*
1.点击按钮btn-play
2.音频暂停 - 音频播放   图片变成正在播放
3.音频播放 - 音频暂停   图片变成暂停
*/
//获取按钮
var oBtn = document.getElementsByClassName("btn-play")[0];
//获取音频
var oAudio = document.getElementById("audio");


oBtn.onclick = function() {
	//音频播放
	if(oAudio.paused) {
		oAudio.play();
		oBtn.style.background = "url('./img/5.jpg') no-repeat"

	}else {
		//音频暂停
		oAudio.pause();
		oBtn.style.background = "url('./img/6.jpg') no-repeat"
	}
}