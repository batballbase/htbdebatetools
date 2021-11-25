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
        time_length: 180,
        begin_btn_id: "beginBtn_zhengfang_lilun",
        stop_btn_id: "stopBtn_zhengfang_lilun",
        reset_btn_id: 'resetBtn_zhengfang_lilun',
    });

    $("#time_fanfang_lilun").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn_fanfang_lilun",
        stop_btn_id: "stopBtn_fanfang_lilun",
        reset_btn_id: 'resetBtn_fanfang_lilun',
    });

    // ===========
    // | 一辩抬杠 |
    // ===========
    $("#time_zhengfang_taigang1").custimer({
        time_length: 120,
        begin_btn_id: "beginBtn_zhengfang_taigang1",
        stop_btn_id: "stopBtn_zhengfang_taigang1",
        reset_btn_id: 'resetBtn_shuangfang_taigang1',
    });

    $("#time_fanfang_taigang1").custimer({
        time_length: 120,
        begin_btn_id: "beginBtn_fanfang_taigang1",
        stop_btn_id: "stopBtn_fanfang_taigang1",
        reset_btn_id: 'resetBtn_shuangfang_taigang1',
    });

    // Button
    var status_taigang1 = 2;

    $("#beginBtn_zhengfang_taigang1").on('click', function () {
        status_taigang1 = 1;
    });
    $("#beginBtn_fanfang_taigang1").on('click', function () {
        status_taigang1 = 0;
    });
    $("#switchBtn_taigang1").on('click', function () {
        if (status_taigang1 == 1) {
            $("#stopBtn_zhengfang_taigang1").click();
            $("#beginBtn_fanfang_taigang1").click();
        } else if (status_taigang1 == 0) {
            $("#stopBtn_fanfang_taigang1").click();
            $("#beginBtn_zhengfang_taigang1").click();
        } else {
            $("#beginBtn_zhengfang_taigang1").click();
        }
    });

    $("#resetBtn_shuangfang_taigang1").on('click', function () {
        $("#stopBtn_zhengfang_taigang1").click();
        $("#stopBtn_fanfang_taigang1").click();
        status_taigang1 = 2;
    });

    $("#stopBtn_shuangfang_taigang1").on('click', function () {
        $("#stopBtn_zhengfang_taigang1").click();
        $("#stopBtn_fanfang_taigang1").click();
    });

    // =============
    // | 驳论环节 1 |
    // =============
    $("#time_zhengfang_bolun1").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn_zhengfang_bolun1",
        stop_btn_id: "stopBtn_zhengfang_bolun1",
        reset_btn_id: 'resetBtn_zhengfang_bolun1',
    });

    $("#time_fanfang_bolun1").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn_fanfang_bolun1",
        stop_btn_id: "stopBtn_fanfang_bolun1",
        reset_btn_id: 'resetBtn_fanfang_bolun1',
    });

    // ===========
    // | 二辩抬杠 |
    // ===========
    $("#time_zhengfang_taigang2").custimer({
        time_length: 120,
        begin_btn_id: "beginBtn_zhengfang_taigang2",
        stop_btn_id: "stopBtn_zhengfang_taigang2",
        reset_btn_id: 'resetBtn_shuangfang_taigang2',
    });

    $("#time_fanfang_taigang2").custimer({
        time_length: 120,
        begin_btn_id: "beginBtn_fanfang_taigang2",
        stop_btn_id: "stopBtn_fanfang_taigang2",
        reset_btn_id: 'resetBtn_shuangfang_taigang2',
    });

    // Button
    var status_taigang2 = 2;

    $("#beginBtn_zhengfang_taigang2").on('click', function () {
        status_taigang2 = 1;
    });
    $("#beginBtn_fanfang_taigang2").on('click', function () {
        status_taigang2 = 0;
    });
    $("#switchBtn_taigang2").on('click', function () {
        if (status_taigang2 == 1) {
            $("#stopBtn_zhengfang_taigang2").click();
            $("#beginBtn_fanfang_taigang2").click();
        } else if (status_taigang2 == 0) {
            $("#stopBtn_fanfang_taigang2").click();
            $("#beginBtn_zhengfang_taigang2").click();
        } else {
            $("#beginBtn_fanfang_taigang2").click();
        }
    });

    $("#resetBtn_shuangfang_taigang2").on('click', function () {
        $("#stopBtn_zhengfang_taigang2").click();
        $("#stopBtn_fanfang_taigang2").click();
        status_taigang2 = 2;
    });

    $("#stopBtn_shuangfang_taigang2").on('click', function () {
        $("#stopBtn_zhengfang_taigang2").click();
        $("#stopBtn_fanfang_taigang2").click();
    });

    // =============
    // | 驳论环节 2 |
    // =============
    $("#time_zhengfang_bolun2").custimer({
        time_length: 180,
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

    // ===========
    // | 三辩抬杠 |
    // ===========
    $("#time_zhengfang_taigang3").custimer({
        time_length: 120,
        begin_btn_id: "beginBtn_zhengfang_taigang3",
        stop_btn_id: "stopBtn_zhengfang_taigang3",
        reset_btn_id: 'resetBtn_shuangfang_taigang3',
    });

    $("#time_fanfang_taigang3").custimer({
        time_length: 120,
        begin_btn_id: "beginBtn_fanfang_taigang3",
        stop_btn_id: "stopBtn_fanfang_taigang3",
        reset_btn_id: 'resetBtn_shuangfang_taigang3',
    });

    // Button
    var status_taigang3 = 2;

    $("#beginBtn_zhengfang_taigang3").on('click', function () {
        status_taigang3 = 1;
    });
    $("#beginBtn_fanfang_taigang3").on('click', function () {
        status_taigang3 = 0;
    });
    $("#switchBtn_taigang3").on('click', function () {
        if (status_taigang3 == 1) {
            $("#stopBtn_zhengfang_taigang3").click();
            $("#beginBtn_fanfang_taigang3").click();
        } else if (status_taigang3 == 0) {
            $("#stopBtn_fanfang_taigang3").click();
            $("#beginBtn_zhengfang_taigang3").click();
        } else {
            $("#beginBtn_zhengfang_taigang3").click();
        }
    });

    $("#resetBtn_shuangfang_taigang3").on('click', function () {
        $("#stopBtn_zhengfang_taigang3").click();
        $("#stopBtn_fanfang_taigang3").click();
        status_taigang3 = 2;
    });

    $("#stopBtn_shuangfang_taigang3").on('click', function () {
        $("#stopBtn_zhengfang_taigang3").click();
        $("#stopBtn_fanfang_taigang3").click();
    });

    // ============
    // | 中场休息 |
    // ============
    $("#time_zhongchangxiuxi").custimer({
        time_length: 120,
        begin_btn_id: "beginBtn_zhongchangxiuxi",
        stop_btn_id: "stopBtn_zhongchangxiuxi",
        reset_btn_id: 'resetBtn_zhongchangxiuxi',
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
    // | 缓冲时间 |
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

