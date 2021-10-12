var allPerson = "霹雳太平华联国民型华文中学;金宝培元国民型华文中学;霹雳怡保培南独中;深德评审心;育才独中龙之队;吉辇华中;霹雳三德华中;霹雳和丰兴中国民型华文中学;太平华联独立中学;培南华中辩论队;江沙崇华独中;育才华中辩论队";
//抽奖人员名单


var leaderArr = [];
//领导人员名单
/*注：这个不是黑幕，不会影响中奖率。
只是为了在第一次抽奖时，高亮领导的名字。
（刷新之后会重置）
如果不要高亮直接清空
*/

var setEmptyPerson = new Boolean();
setEmptyPerson = false //是否每次抽取后把人数框清空

var setAutoZoom = new Boolean();
setAutoZoom = true //是否开启自适应缩放