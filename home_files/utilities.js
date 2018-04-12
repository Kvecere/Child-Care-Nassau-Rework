function openlink(url) {openLink(url); }
function openLink(url) {
    win = window.open(url, "link", "width=1080,height=600,left=100,scrollbars=yes,resizable=yes,location=yes,menubar=yes,toolbar=yes");
    win.focus;
}

function replaceString(value) {
    return "#" + value;
}

function goBack() {
    window.history.back();
}

function shortString(value) {
    var text = value;
    if (text.length > 300)
        return text.substring(0, 300);
    else return text;
}

////hide all non-existent images
//$("img").error(function () {
//    //$(this).attr("src", "~/images/photos/nophoto.jpg");
//    $(this).css({ visibility: "hidden" }); 
//});