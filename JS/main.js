
function addFavorite2() {
    var url = window.location;
    var title = document.title;
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("360se") > -1) {
    alert("由於360瀏覽器功能限制，請按 Ctrl D 手動收藏！");
    }
    else if (ua.indexOf("msie 8") > -1) {
    window.external.AddToFavoritesBar(url, title); //IE8
    }
    else if (document.all) {
    try{
    window.external.addFavorite(url, title);
    }catch(e){
    alert('您的瀏覽器不支援,請按 Ctrl D 手動收藏!');
    }
    }
    else if (window.sidebar) {
    window.sidebar.addPanel(title, url, "");
    }
    else {
    alert('您的瀏覽器不支援,請按 Ctrl D 手動收藏!');
    }
    }