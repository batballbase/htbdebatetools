define(function (require, exports, module) {
    var $ = require('jquery');//引入jquery
    require('onepage')($);
    require('timer')($);//共享给jquery
    require('jstorage')($);//共享给jquery


    $('.main').onepage_scroll({
        sectionContainer: ".container-fluid",
        easing: "ease-in",
        loop: false
    });

    // ===========
    // | 立论环节 |
    // ===========
    $("#time_zhengfang_lilun").custimer({
        time_length: 240,
        begin_btn_id: "beginBtn_zhengfang_lilun",
        stop_btn_id: "stopBtn_zhengfang_lilun",
        reset_btn_id: 'resetBtn_zhengfang_lilun',
    });

    $("#time_fanfang_lilun").custimer({
        time_length: 240,
        begin_btn_id: "beginBtn_fanfang_lilun",
        stop_btn_id: "stopBtn_fanfang_lilun",
        reset_btn_id: 'resetBtn_fanfang_lilun',
    });

    // ========
    // | 质询 |
    // ========
    $("#time_zhengfang_zhixun").custimer({
        time_length: 120,
        begin_btn_id: "beginBtn_zhengfang_zhixun",
        stop_btn_id: "stopBtn_zhengfang_zhixun",
        reset_btn_id: 'resetBtn_zhengfang_zhixun',
    });

    $("#time_fanfang_zhixun").custimer({
        time_length: 120,
        begin_btn_id: "beginBtn_fanfang_zhixun",
        stop_btn_id: "stopBtn_fanfang_zhixun",
        reset_btn_id: 'resetBtn_fanfang_zhixun',
    });

    // ===========
    // | 质询小结 |
    // ===========
    $("#time_zhengfang_zhixunxiaojie").custimer({
        time_length: 120,
        begin_btn_id: "beginBtn_zhengfang_zhixunxiaojie",
        stop_btn_id: "stopBtn_zhengfang_zhixunxiaojie",
        reset_btn_id: 'resetBtn_zhengfang_zhixunxiaojie',
    });

    $("#time_fanfang_zhixunxiaojie").custimer({
        time_length: 120,
        begin_btn_id: "beginBtn_fanfang_zhixunxiaojie",
        stop_btn_id: "stopBtn_fanfang_zhixunxiaojie",
        reset_btn_id: 'resetBtn_fanfang_zhixunxiaojie',
    });

    // =============
    // | 攻辩（一） |
    // =============
    $("#time_zhengfang_gongbian1").custimer({
        time_length: 90,
        begin_btn_id: "beginBtn_zhengfang_gongbian1",
        stop_btn_id: "stopBtn_zhengfang_gongbian1",
        reset_btn_id: 'resetBtn_shuangfang_gongbian1',
    });

    $("#time_fanfang_gongbian1").custimer({
        time_length: 90,
        begin_btn_id: "beginBtn_fanfang_gongbian1",
        stop_btn_id: "stopBtn_fanfang_gongbian1",
        reset_btn_id: 'resetBtn_shuangfang_gongbian1',
    });

    // Button
    var status_gongbian1 = 2;

    $("#beginBtn_zhengfang_gongbian1").on('click', function () {
        status_gongbian1 = 1;
    });
    $("#beginBtn_fanfang_gongbian1").on('click', function () {
        status_gongbian1 = 0;
    });
    $("#switchBtn_gongbian1").on('click', function () {
        if (status_gongbian1 == 1) {
            $("#stopBtn_zhengfang_gongbian1").click();
            $("#beginBtn_fanfang_gongbian1").click();
        } else if (status_gongbian1 == 0) {
            $("#stopBtn_fanfang_gongbian1").click();
            $("#beginBtn_zhengfang_gongbian1").click();
        } else {
            $("#beginBtn_zhengfang_gongbian1").click();
        }
    });

    $("#resetBtn_shuangfang_gongbian1").on('click', function () {
        $("#stopBtn_zhengfang_gongbian1").click();
        $("#stopBtn_fanfang_gongbian1").click();
        status_gongbian1 = 2;
    });

    $("#stopBtn_shuangfang_gongbian1").on('click', function () {
        $("#stopBtn_zhengfang_gongbian1").click();
        $("#stopBtn_fanfang_gongbian1").click();
    });

    // ============
    // | 驳论 (正) |
    // ========
    $("#time_zhengfang_bolun1").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn_zhengfang_bolun1",
        stop_btn_id: "stopBtn_zhengfang_bolun1",
        reset_btn_id: 'resetBtn_zhengfang_bolun1',
    });

    $("#time_fanfang_bolun1").custimer({
        time_length: 15,
        begin_btn_id: "beginBtn_fanfang_bolun1",
        stop_btn_id: "stopBtn_fanfang_bolun1",
        reset_btn_id: 'resetBtn_fanfang_bolun1',
    });

    // =============
    // | 驳论（反） |
    // =============
    $("#time_zhengfang_bolun2").custimer({
        time_length: 15,
        begin_btn_id: "beginBtn_zhengfang_bolun2",
        stop_btn_id: "stopBtn_zhengfang_bolun2",
        reset_btn_id: 'resetBtn_zhengfang_bolun2',
    });

    $("#time_fanfang_bolun2").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn_fanfang_bolun2",
        stop_btn_id: "stopBtn_fanfang_bolun2",
        reset_btn_id: 'resetBtn_fanfang_bolun2',
    });

    // =============
    // | 攻辩（二） |
    // =============
    $("#time_zhengfang_gongbian2").custimer({
        time_length: 90,
        begin_btn_id: "beginBtn_zhengfang_gongbian2",
        stop_btn_id: "stopBtn_zhengfang_gongbian2",
        reset_btn_id: 'resetBtn_shuangfang_gongbian2',
    });

    $("#time_fanfang_gongbian2").custimer({
        time_length: 90,
        begin_btn_id: "beginBtn_fanfang_gongbian2",
        stop_btn_id: "stopBtn_fanfang_gongbian2",
        reset_btn_id: 'resetBtn_shuangfang_gongbian2',
    });

    // Button
    var status_gongbian2 = 2;

    $("#beginBtn_zhengfang_gongbian2").on('click', function () {
        status_gongbian2 = 1;
    });
    $("#beginBtn_fanfang_gongbian2").on('click', function () {
        status_gongbian2 = 0;
    });
    $("#switchBtn_gongbian2").on('click', function () {
        if (status_gongbian2 == 1) {
            $("#stopBtn_zhengfang_gongbian2").click();
            $("#beginBtn_fanfang_gongbian2").click();
        } else if (status_gongbian2 == 0) {
            $("#stopBtn_fanfang_gongbian2").click();
            $("#beginBtn_zhengfang_gongbian2").click();
        } else {
            $("#beginBtn_fanfang_gongbian2").click();
        }
    });

    $("#resetBtn_shuangfang_gongbian2").on('click', function () {
        $("#stopBtn_zhengfang_gongbian2").click();
        $("#stopBtn_fanfang_gongbian2").click();
        status_gongbian2 = 2;
    });

    $("#stopBtn_shuangfang_gongbian2").on('click', function () {
        $("#stopBtn_zhengfang_gongbian2").click();
        $("#stopBtn_fanfang_gongbian2").click();
    });

    // ============
    // | 总结环节 |
    // ============
    $("#time_zhengfang_zongjie").custimer({
        time_length: 240,
        begin_btn_id: "beginBtn_zhengfang_zongjie",
        stop_btn_id: "stopBtn_zhengfang_zongjie",
        reset_btn_id: 'resetBtn_zhengfang_zongjie',
    });

    $("#time_fanfang_zongjie").custimer({
        time_length: 240,
        begin_btn_id: "beginBtn_fanfang_zongjie",
        stop_btn_id: "stopBtn_fanfang_zongjie",
        reset_btn_id: 'resetBtn_fanfang_zongjie',
    });

    // ============
    // | 总结环节 |
    // ============
    $("#time_zhengfang_huanchong").custimer({
        time_length: 300,
        begin_btn_id: "beginBtn_zhengfang_huanchong",
        stop_btn_id: "stopBtn_zhengfang_huanchong",
        reset_btn_id: 'resetBtn_zhengfang_huanchong',
    });

    $("#time_fanfang_huanchong").custimer({
        time_length: 300,
        begin_btn_id: "beginBtn_fanfang_huanchong",
        stop_btn_id: "stopBtn_fanfang_huanchong",
        reset_btn_id: 'resetBtn_fanfang_huanchong',
    });

    var matrix = [
        [
            {full: 0}, {full: 1, moveDirection: 'yx'}, {full: 0}
        ],
        [
            {full: 1}, {full: 1, first: true}, {full: 1}
        ],
        [
            {full: 0}, {full: 1, moveDirection: 'yx'}, {full: 0}
        ]
    ];
});

