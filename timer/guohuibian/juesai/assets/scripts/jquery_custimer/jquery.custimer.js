/* 
* cusTimerDown 0.1 
* Copyright (c) 2014 Zhangdi http://cindyfn.com/ 
* Date: 2014-09-16 
* 输入秒数，转换成分钟＋秒，然后进行倒计时
* 主要方法:时间转换，倒计时，暂停计时，启动计时，声音点设置。
*/ 
;
define(function(require,exports,moudles){
     return function(jquery){
            /* 创建一个闭包 */
            ;(function ($) {
                /* 插件的定义 */
                
                $.fn.custimer = function (options) {
                    debug(this);

                    var altolTime;//总时间和剩余事件
                    var stimeClock;//timeOut循环记录
                    var contentDiv;//时间容器
                    var beginBtn;//开始按钮
                    var stopBtn;//停止按钮
                    var resetBtn;//停止按钮

                    // build main options before element iteration
                    var opts = $.extend({}, $.fn.custimer.defaults, options);
                    // iterate and reformat each matched element
                    
                    return this.each(function () {
                        $this = $(this);
                        // build element specific options
                        var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
                        // update element styles
                        altolTime = o.time_length;

                        // contentDiv = $("#"+o.show_ele_id);
                        contentDiv = $(this);
                        $(this).addClass('timedownclass');
                        beginBtn = $("#"+o.begin_btn_id);
                        stopBtn = $("#"+o.stop_btn_id);
                        resetBtn = $("#"+o.reset_btn_id);

                        contentDiv.html(sencondToTimer(o.time_length));//显示在容器中的内容
                        //开始的按钮绑定事件
                        beginBtn.on('click',function(){
                            if(altolTime < 10){
                                contentDiv.css({"color":"red"});
                            }else{
                                contentDiv.css({"color":"black"});
                            }
                            clearTimeout(stimeClock);
                            stimeClock = setTimeout(timeDownFn,1000);

                        });
                        //停止的按钮绑定事件
                        stopBtn.on('click',function(){
                            if(altolTime < 10){
                                contentDiv.css({"color":"red"});
                            }else{
                                contentDiv.css({"color":"black"});
                            }
                            clearTimeout(stimeClock);
                        });

                        //重置参数
                        resetBtn.on('click',function(){
                            if(altolTime < 10){
                                contentDiv.css({"color":"red"});
                            }else{
                                contentDiv.css({"color":"black"});
                            }
                            altolTime = o.time_length;
                            contentDiv.html(sencondToTimer(altolTime));//显示在容器中的内容
                            clearTimeout(stimeClock);
                        });
                        function sencondToTimer(sec){
                            var s = parseInt(sec);
                            minuite = parseInt(s/60);
                            if(minuite < 10){
                                minuite = "0"+minuite;
                            }
                            second = parseInt(s%60);
                            if(second < 10){
                                second = "0"+second;

                            }
                            return minuite+":"+ second;
                        }
                        //循环倒计时
                        function timeDownFn(){

                            o.onFlagTime();

                            if(altolTime<=0){
                                clearTimeout(stimeClock);
                                return false;
                            }

                            altolTime = altolTime -1;
                            if(altolTime < 10){
                                contentDiv.css({"color":"red"});
                            }else{
                                contentDiv.css({"color":"black"});
                            }
                            contentDiv.html(sencondToTimer(altolTime));//显示在容器中的内容
                            stimeClock = setTimeout(timeDownFn,1000);
                        }
                    });
                };
                // 私有函数：debugging
                function debug($obj) {
                    if (window.console && window.console.log)
                        window.console.log('obj size: ' + $obj.size());
                }

                /* 定义暴露format函数 */
                $.fn.custimer.format = function (txt) {
                };
                // 插件的defaults
                $.fn.custimer.defaults = {
                    show_ele_id: "timedown",//显示的容器
                    time_length: 170, //输入的秒数
                    begin_btn_id: 'beginBtn',
                    stop_btn_id: 'stopBtn',
                    reset_btn_id: 'resetBtn',
                    onFlagTime:function(){}//当到设定时间时候触发事件
                };

            })(jQuery);


     }
 
});
