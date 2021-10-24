// CSS JS functions
$(document).ready(function(){
    btnStart();
    btnPause();
    btnReset();
});

function btnStart(){
    $(".btnStart").addClass("btn btn-success btn-lg");
}

function btnPause(){
    $(".btnPause").addClass("btn btn-danger btn-lg");
}

function btnReset(){
    $(".btnReset").addClass("btn btn-warning btn-lg ");
}

// Time function
function time_end_audio() {
  const audio = new Audio("assets/audio/audio_timeend.mp3");
  audio.play();
}

function time_30sec_audio() {
  const audio = new Audio("assets/audio/audio_30sec.mp3");
  audio.play();
}

function timeend_trigger(timeID, setInterval_var){
    var timeID_val = $(timeID).text();
    var time_end = "00:00";

    if (timeID_val == time_end) {
        time_end_audio();
        // Clear interval so that function will not be constantly checking for time d 
        // Which means after time end audio trigger, webpage will need to be refreshed to restart time check function
        clearInterval(setInterval_var);
    }
}

function time30sec_trigger(timeID, setInterval_var){
    var timeID_val = $(timeID).text();
    var time_30sec = "00:30";
    if (timeID_val == time_30sec) {
        time_30sec_audio();

        clearInterval(setInterval_var);
    }
}

// ========
// | 立论 |
// ========
var zhengfang_lilun_timeend = setInterval(function(){
    timeend_trigger("#time_zhengfang_lilun", zhengfang_lilun_timeend);
}, 1000);
var zhengfang_lilun_time30sec = setInterval(function(){
    time30sec_trigger("#time_zhengfang_lilun", zhengfang_lilun_time30sec);
}, 1000);

var time_fanfang_lilun_timeend = setInterval(function(){
    timeend_trigger("#time_fanfang_lilun", time_fanfang_lilun_timeend);
}, 1000);
var fanfang_lilun_time30sec = setInterval(function(){
    time30sec_trigger("#time_fanfang_lilun", fanfang_lilun_time30sec);
}, 1000);

// ===========
// | 一辩抬杠 |
// ===========
var zhengfang_taigang1_timeend = setInterval(function(){
    timeend_trigger("#time_zhengfang_taigang1", zhengfang_taigang1_timeend);
}, 1000);
var zhengfang_taigang1_time30sec = setInterval(function(){
    time30sec_trigger("#time_zhengfang_taigang1", zhengfang_taigang1_time30sec);
}, 1000);

var fanfang_taigang1_timeend = setInterval(function(){
    timeend_trigger("#time_fanfang_taigang1", fanfang_taigang1_timeend);
}, 1000);
var fanfang_taigang1_time30sec = setInterval(function(){
    time30sec_trigger("#time_fanfang_taigang1", fanfang_taigang1_time30sec);
}, 1000);

// =============
// | 驳论环节 1 |
// =============
var zhengfang_bolun1_timeend = setInterval(function(){
    timeend_trigger("#time_zhengfang_bolun1", zhengfang_bolun1_timeend);
}, 1000);
var zhengfang_bolun1_time30sec = setInterval(function(){
    time30sec_trigger("#time_zhengfang_bolun1", zhengfang_bolun1_time30sec);
}, 1000);

var fanfang_bolun1_timeend = setInterval(function(){
    timeend_trigger("#time_fanfang_bolun1", fanfang_bolun1_timeend);
}, 1000);
var fanfang_bolun1_time30sec = setInterval(function(){
    time30sec_trigger("#time_fanfang_bolun1", fanfang_bolun1_time30sec);
}, 1000);

// ===========
// | 二辩抬杠 |
// ===========
var zhengfang_taigang2_timeend = setInterval(function(){
    timeend_trigger("#time_zhengfang_taigang2", zhengfang_taigang2_timeend);
}, 1000);
var zhengfang_taigang2_time30sec = setInterval(function(){
    time30sec_trigger("#time_zhengfang_taigang2", zhengfang_taigang2_time30sec);
}, 1000);

var fanfang_taigang2_timeend = setInterval(function(){
    timeend_trigger("#time_fanfang_taigang2", fanfang_taigang2_timeend);
}, 1000);
var fanfang_taigang2_time30sec = setInterval(function(){
    time30sec_trigger("#time_fanfang_taigang2", fanfang_taigang2_time30sec);
}, 1000);

// =============
// | 驳论环节 2 |
// =============
var zhengfang_bolun2_timeend = setInterval(function(){
    timeend_trigger("#time_zhengfang_bolun2", zhengfang_bolun2_timeend);
}, 1000);
var zhengfang_bolun2_time30sec = setInterval(function(){
    time30sec_trigger("#time_zhengfang_bolun2", zhengfang_bolun2_time30sec);
}, 1000);

var fanfang_bolun2_timeend = setInterval(function(){
    timeend_trigger("#time_fanfang_bolun2", fanfang_bolun2_timeend);
}, 1000);
var fanfang_bolun2_time30sec = setInterval(function(){
    time30sec_trigger("#time_fanfang_bolun2", fanfang_bolun2_time30sec);
}, 1000);

// ===========
// | 三辩抬杠 |
// ===========
var zhengfang_taigang3_timeend = setInterval(function(){
    timeend_trigger("#time_zhengfang_taigang3", zhengfang_taigang3_timeend);
}, 1000);
var zhengfang_taigang3_time30sec = setInterval(function(){
    time30sec_trigger("#time_zhengfang_taigang3", zhengfang_taigang3_time30sec);
}, 1000);

var fanfang_taigang3_timeend = setInterval(function(){
    timeend_trigger("#time_fanfang_taigang3", fanfang_taigang3_timeend);
}, 1000);
var fanfang_taigang3_time30sec = setInterval(function(){
    time30sec_trigger("#time_fanfang_taigang3", fanfang_taigang3_time30sec);
}, 1000);

// ========
// | 中场休息 |
// ========
var zhongchangxiuxi_timeend = setInterval(function(){
    timeend_trigger("#time_zhongchangxiuxi", zhongchangxiuxi_timeend);
}, 1000);
var zhongchangxiuxi_time30sec = setInterval(function(){
    time30sec_trigger("#time_zhongchangxiuxi", zhongchangxiuxi_time30sec);
}, 1000);

// ========
// | 总结 |
// ========
var zhengfang_zongjie_timeend = setInterval(function(){
    timeend_trigger("#time_zhengfang_zongjie", zhengfang_zongjie_timeend);
}, 1000);
var zhengfang_zongjie_time30sec = setInterval(function(){
    time30sec_trigger("#time_zhengfang_zongjie", zhengfang_zongjie_time30sec);
}, 1000);

var fanfang_zongjie_timeend = setInterval(function(){
    timeend_trigger("#time_fanfang_zongjie", fanfang_zongjie_timeend);
}, 1000);
var fanfang_zongjie_time30sec = setInterval(function(){
    time30sec_trigger("#time_fanfang_zongjie", fanfang_zongjie_time30sec);
}, 1000);

// ===========
// | 缓冲时间 |
// ===========
var zhengfang_huanchong_timeend = setInterval(function(){
    timeend_trigger("#time_zhengfang_huanchong", zhengfang_huanchong_timeend);
}, 1000);
var zhengfang_huanchong_time30sec = setInterval(function(){
    time30sec_trigger("#time_zhengfang_huanchong", zhengfang_huanchong_time30sec);
}, 1000);

var fanfang_huanchong_timeend = setInterval(function(){
    timeend_trigger("#time_fanfang_huanchong", fanfang_huanchong_timeend);
}, 1000);
var fanfang_huanchong_time30sec = setInterval(function(){
    time30sec_trigger("#time_fanfang_huanchong", fanfang_huanchong_time30sec);
}, 1000);

// ===========
// | 投票时间 |
// ===========
var toupiao_huanchong_timeend = setInterval(function(){
    timeend_trigger("#time_toupiao_huanchong", toupiao_huanchong_timeend);
}, 1000);
var toupiao_huanchong_time30sec = setInterval(function(){
    time30sec_trigger("#time_toupiao_huanchong", toupiao_huanchong_time30sec);
}, 1000);

var toupiao_toupiao_timeend = setInterval(function(){
    timeend_trigger("#time_toupiao_toupiao", toupiao_toupiao_timeend);
}, 1000);
var toupiao_toupiao_time30sec = setInterval(function(){
    time30sec_trigger("#time_toupiao_toupiao", toupiao_toupiao_time30sec);
}, 1000);