$(document).ready(function () {

<<<<<<< HEAD
      $('#collapseEx2 > ul.navbar-nav li').click(function(e) {
        $('.navbar li.active').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
//        e.preventDefault();
      });


      $('#newEvents').html('started ..');

    });
=======
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
>>>>>>> 979f49907cc7d9f69d79e1fe1e53cd5a699776dc
