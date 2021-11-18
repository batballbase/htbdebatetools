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

// ========
// | 质询 |
// ========
var zhengfang_zhixun_timeend = setInterval(function(){
    timeend_trigger("#time_zhengfang_zhixun", zhengfang_zhixun_timeend);
}, 1000);
var zhengfang_zhixun_time30sec = setInterval(function(){
    time30sec_trigger("#time_zhengfang_zhixun", zhengfang_zhixun_time30sec);
}, 1000);

var fanfang_zhixun_timeend = setInterval(function(){
    timeend_trigger("#time_fanfang_zhixun", fanfang_zhixun_timeend);
}, 1000);
var fanfang_zhixun_time30sec = setInterval(function(){
    time30sec_trigger("#time_fanfang_zhixun", fanfang_zhixun_time30sec);
}, 1000);

// ===========
// | 质询小结 |
// ===========
var zhengfang_zhixunxiaojie_timeend = setInterval(function(){
    timeend_trigger("#time_zhengfang_zhixunxiaojie", zhengfang_zhixunxiaojie_timeend);
}, 1000);
var zhengfang_zhixunxiaojie_time30sec = setInterval(function(){
    time30sec_trigger("#time_zhengfang_zhixunxiaojie", zhengfang_zhixunxiaojie_time30sec);
}, 1000);

var fanfang_zhixunxiaojie_timeend = setInterval(function(){
    timeend_trigger("#time_fanfang_zhixunxiaojie", fanfang_zhixunxiaojie_timeend);
}, 1000);
var fanfang_zhixunxiaojie_time30sec = setInterval(function(){
    time30sec_trigger("#time_fanfang_zhixunxiaojie", fanfang_zhixunxiaojie_time30sec);
}, 1000);

// =============
// | 攻辩（一） |
// =============
var zhengfang_gongbian1_timeend = setInterval(function(){
    timeend_trigger("#time_zhengfang_gongbian1", zhengfang_gongbian1_timeend);
}, 1000);
var zhengfang_gongbian1_time30sec = setInterval(function(){
    time30sec_trigger("#time_zhengfang_gongbian1", zhengfang_gongbian1_time30sec);
}, 1000);

var fanfang_gongbian1_timeend = setInterval(function(){
    timeend_trigger("#time_fanfang_gongbian1", fanfang_gongbian1_timeend);
}, 1000);
var fanfang_gongbian1_time30sec = setInterval(function(){
    time30sec_trigger("#time_fanfang_gongbian1", fanfang_gongbian1_time30sec);
}, 1000);

// ============
// | 驳论 (正）|
// ============
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

// ============
// | 驳论 (反）|
// ============
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

// =============
// | 攻辩（一） |
// =============
var zhengfang_gongbian2_timeend = setInterval(function(){
    timeend_trigger("#time_zhengfang_gongbian2", zhengfang_gongbian2_timeend);
}, 1000);
var zhengfang_gongbian2_time30sec = setInterval(function(){
    time30sec_trigger("#time_zhengfang_gongbian2", zhengfang_gongbian2_time30sec);
}, 1000);

var fanfang_gongbian2_timeend = setInterval(function(){
    timeend_trigger("#time_fanfang_gongbian2", fanfang_gongbian2_timeend);
}, 1000);
var fanfang_gongbian2_time30sec = setInterval(function(){
    time30sec_trigger("#time_fanfang_gongbian2", fanfang_gongbian2_time30sec);
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

// ========
// | 缓冲 |
// ========
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