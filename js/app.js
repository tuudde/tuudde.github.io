$("a").click(function (e) {
    var btnId = "section"+e.currentTarget.id;

    $('html, body').animate({
        scrollTop: $("#" + btnId).offset().top
    }, 1000);
});
var  mn = $(".logo-scroll");
    mns = "main-nav-scrolled";

$(window).scroll(function() {
  if( $(this).scrollTop() >450 ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});

var  mg = $(".para1");
    mgn = "menu-gone";

$(window).scroll(function() {
  if( $(this).scrollTop() >2200 ) {
    mg.addClass(mgn);
  } else {
    mg.removeClass(mgn);
  }
});

var  mc = $(".contacts");
    mcn = "menu-gone";

$(window).scroll(function() {
  if( $(this).scrollTop() >550 ) {
    mc.addClass(mcn);
  } else {
    mc.removeClass(mcn);
  }
});
