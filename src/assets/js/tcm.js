    $(document).ready(function () {
//      $(".nav li").removeClass("active");  
//      $('#cost').addClass('active');

      $('#menu > ul.navbar-nav li').click(function(e) {
        $('.navbar li.active').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
//        e.preventDefault();
      });
    });
