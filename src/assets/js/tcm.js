    $(document).ready(function () {

      $('#collapseEx2 > ul.navbar-nav li').click(function(e) {
        $('.navbar li.active').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
//        e.preventDefault();
      });
    });
