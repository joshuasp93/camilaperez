$(document).ready(function(){
    //Setting background color to menu desktop bar while reducing Scrolling

    $(function () {
      $(document).scroll(function () {
        var $nav = $(".navigation");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
    });

    //Scrolling

    $.fn.scrollView = function () {
      return this.each(function () {
        $('html, body').animate({
          scrollTop: $(this).offset().top - 125
        }, 1000);
      });
    }

    $('.menu, .menu-mob').click(function (event) {
      event.preventDefault();
      $($(this).attr('href')).scrollView();
      $('.menu-toggle').toggle("slide");
    });

    //Submit data to CSV file with PHP

    $(".complete").hide();
    $("form").submit(function(event){
      event.preventDefault();
      var name = $("[type=name]").val();
      var email = $("[type=email]").val();
      $.ajax({
        type: "POST",
        url: "../data/storing.php",
        data: { name: name, email: email},
        success: function() {
          console.log("Form sent")
        }
      });
      $(".form").hide();
      $(".complete").show();
    });

    //Mobile menu hide/show

    $('.menu-toggle').hide();
    $('#show').click(function() {
      $('.menu-toggle').toggle("slide");
    });
});
