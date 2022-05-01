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



    // Huanjie 1
    $("#time_huanjie1_zheng").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn_huanjie1_zheng",
        stop_btn_id: "stopBtn_huanjie1_zheng",
        reset_btn_id: 'resetBtn_huanjie1_zheng',
    });

    $("#time_huanjie1_fan").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn_huanjie1_fan",
        stop_btn_id: "stopBtn_huanjie1_fan",
        reset_btn_id: 'resetBtn_huanjie1_fan',
    });



    // Huanjie 2
    $("#time_huanjie2_zheng").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn_huanjie2_zheng",
        stop_btn_id: "stopBtn_huanjie2_zheng",
        reset_btn_id: 'resetBtn_huanjie2_zheng',
    });

    $("#time_huanjie2_fan").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn_huanjie2_fan",
        stop_btn_id: "stopBtn_huanjie2_fan",
        reset_btn_id: 'resetBtn_huanjie2_fan',
    });
    


    // Huanjie 3
    $("#time_huanjie3_zheng").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn_huanjie3_zheng",
        stop_btn_id: "stopBtn_huanjie3_zheng",
        reset_btn_id: 'resetBtn_huanjie3_zheng',
    });

    $("#time_huanjie3_fan").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn_huanjie3_fan",
        stop_btn_id: "stopBtn_huanjie3_fan",
        reset_btn_id: 'resetBtn_huanjie3_fan',
    });



    // Huanjie 4
    $("#time_huanjie4_zheng").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn_huanjie4_zheng",
        stop_btn_id: "stopBtn_huanjie4_zheng",
        reset_btn_id: 'resetBtn_huanjie4_zheng',
    });

    $("#time_huanjie4_fan").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn_huanjie4_fan",
        stop_btn_id: "stopBtn_huanjie4_fan",
        reset_btn_id: 'resetBtn_huanjie4_fan',
    });



    // Huanjie 5
    $("#time_huanjie5_zheng").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn_huanjie5_zheng",
        stop_btn_id: "stopBtn_huanjie5_zheng",
        reset_btn_id: 'resetBtn_huanjie5_zheng',
    });

    $("#time_huanjie5_fan").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn_huanjie5_fan",
        stop_btn_id: "stopBtn_huanjie5_fan",
        reset_btn_id: 'resetBtn_huanjie5_fan',
    });



    // Huanjie 6
    $("#time_huanjie6_zheng").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn_huanjie6_zheng",
        stop_btn_id: "stopBtn_huanjie6_zheng",
        reset_btn_id: 'resetBtn_huanjie6_zheng',
    });

    $("#time_huanjie6_fan").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn_huanjie6_fan",
        stop_btn_id: "stopBtn_huanjie6_fan",
        reset_btn_id: 'resetBtn_huanjie6_fan',
    });




    // Huanjie 7
    $("#time_huanjie7_zheng").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn_huanjie7_zheng",
        stop_btn_id: "stopBtn_huanjie7_zheng",
        reset_btn_id: 'resetBtn_huanjie7_zheng',
    });

    $("#time_huanjie7_fan").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn_huanjie7_fan",
        stop_btn_id: "stopBtn_huanjie7_fan",
        reset_btn_id: 'resetBtn_huanjie7_fan',
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

