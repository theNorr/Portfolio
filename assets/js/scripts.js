// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {
    scrollFunction()
};
var screenSize = parseInt(window.screen.width);

function scrollFunction() {
    if (screenSize > 767) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("header").style.background = "black";
            document.getElementById("header").style.height = "50px";
            //document.getElementById("logo-header").style.height = "30px";
            //document.getElementById("logo-header").style.paddingTop = "-35px";
            document.getElementById("header").style.fontSize = "14px";
        } else {
            document.getElementById("header").style.background = "transparent";
            document.getElementById("header").style.height = "60px";
            //document.getElementById("logo-header").style.height = "40px";
            //document.getElementById("logo-header").style.paddingTop = "-10px";
            document.getElementById("header").style.fontSize = "16px";
        }
    } else {
            document.getElementById("header").style.background = "black";
            document.getElementById("header").style.height = "60px";
            //document.getElementById("logo-header").style.height = "40px";
            //document.getElementById("logo-header").style.paddingTop = "-10px";
            document.getElementById("header").style.fontSize = "16px";
            document.getElementsByClassName("nav-item").style.background = "black";
    }
}

window.scroll(function(){
    var hT = $(".skills-header").offset().top,
        hH = $(".skills-header").outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if(wS > (hT+hH-wH)){
        myTimer();
    }
})


var myVar=setInterval(function(){myTimer()},1);
var count = 30;

function myTimer(bars, listOfPer) {
    if(count < 50){
        $('.progress1').css('width', count + "%");
        count += 0.5;
        document.getElementById("demo").innerHTML = Math.round(count) +"%";
    }
    if(count > 99){
        $('.progress2').css('width', count + "%");
        count += 0.5;
        document.getElementById("demo2").innerHTML = Math.round(count) +"%";
    }
}
