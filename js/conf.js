var SERVERCOM = 'http://172.16.56.161:10007';
var DANMUKEURL = 'http://172.16.56.161:1207';
var THISROOT='http://172.16.56.161:10008';
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

function removeCmap(){
    $.removeCookie('CMAP',{ path: '/'});
}
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");

    var r = decodeURI(window.location.search).substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}