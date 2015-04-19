function getCurrentLinkFrom(links){
    var curPage = document.URL;
    var res;
    curPage = curPage.substr(curPage.lastIndexOf("/") + 1);

    links.each(function(){
        var linkPage = $(this).attr("href");
        if (curPage === linkPage){
            res = $(this);
        }
    });
    return res;
};

function getCurrentLinkFrom(links){
    var curPage = document.URL;
    var res;
    curPage = curPage.substr(curPage.lastIndexOf("/") + 1);

    links.each(function(){
        var linkPage = $(this).attr("href");
        if (curPage === linkPage){
            res = $(this);
        }
    });
    return res;
};

$(document).ready(function(){
    var currentLink = getCurrentLinkFrom($("nav a"));
    currentLink.addClass("currentLink");
    currentLink.parent().parent().addClass("currentSelection");
});
