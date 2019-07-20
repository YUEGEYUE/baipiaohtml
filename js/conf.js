var SERVERCOM = 'http://192.168.221.130:10007';
var SERVERCOM2 = 'http://192.168.221.130:10009';
var DANMUKEURL = 'http://192.168.221.130:1207/';
var THISROOT='http://192.168.221.130:10008';
var CMAP = new Map();

/**
 * HISTORY_VIEW 播放记录
 * key 为视频标题 value为数组[videoId,videoPic,seekse,2019/7/19 下午10:02:51] 
 */
var HISTORY_VIEW= new Map();

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
function getHISTORY_VIEW(){
    var coo = $.cookie('HISTORY_VIEW');
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
function saveHISTORY_VIEW(){
    console.log("save history");
    
    $.cookie('HISTORY_VIEW', JSON.stringify([...HISTORY_VIEW]), { expires: 7, path: '/' });
}


function removeCmap(){
    $.removeCookie('CMAP',{ path: '/'});
}
function removeHISTORY_VIEW(){
    $.removeCookie('HISTORY_VIEW',{ path: '/'});
}

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");

    var r = decodeURI(window.location.search).substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}