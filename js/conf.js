var SERVERCOM = 'http://192.168.221.130:10007';
var DANMUKEURL = 'http://192.168.221.130:1207';
var CMAP = new Map();
// {
//     "userId": 3,
//     "userPic": "http://localhost/BaiPiao-PHP/",
//     "userName": "lbf",
//     "userPassword": "25f9e794323b453885f5181f1b624d0b",
//     "userEmail": "lbf@qq.com"
// }
function getCmap() {
    var coo = $.cookie('CMAP');
    if (coo == null)
        return null;
    else {
        var cooe = JSON.parse(coo);
        var gm = new Map(cooe);
        return gm;
    }
}
function saveCmap() {
    $.cookie('CMAP', JSON.stringify([...CMAP]), { expires: 7, path: '/' });
}