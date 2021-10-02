var allPerson = "公教中学;加影育华国中;高阳国中;光华国中;中华国中;斯里伯乐独中;循人中学;中华独中;甲洞卫星市国中;兴华独中;光华独中;坤成中学";
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