var SERVERCOM='http://192.168.221.130:10007';
var CMAP=new Map();
// {
//     "userId": 3,
//     "userPic": "http://localhost/BaiPiao-PHP/",
//     "userName": "lbf",
//     "userPassword": "25f9e794323b453885f5181f1b624d0b",
//     "userEmail": "lbf@qq.com"
// }
function getCmap(){
    var coo=$.cookie("CMAP",CMAP);
    return new Map(JSON.parse(coo));
}
function saveCmap(){
    $.cookie('CMAP', JSON.stringify([...CMAP]), { expires: 7, path: '/' });
}