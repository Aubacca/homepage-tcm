$(document).ready(function () {

  $('#collapseEx2 > ul.navbar-nav li').click(function (e) {
    $('.navbar li.active').removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
      $this.addClass('active');
    }
    //        e.preventDefault();
  });

  console.log("Loading ebents data..");
/*  var ebentList = $
  var main = document.getElementById('main');//where you want the div to be added
  var div = document.createElement('div');
  div.setAttribute("spry:region", "myDs");
  div.innerHTML = "{hostname}";
  main.appendChild(div);*/

});
