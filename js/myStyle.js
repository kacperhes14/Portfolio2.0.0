// jQuery to collapse the navbar on scroll
$(document).ready(function(){

  function collapseNavbar() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
  }

  // test it later
  $(window).scroll(collapseNavbar);
  $(document).ready(collapseNavbar);

  //smooth scrolling
  $(function(){
    $('a.page-scroll').bind('click', function(event){
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
  });

  // hiding the ul on mobile devices
  $('.navbar-collapse ul li a').click(function() {
      $(".navbar-collapse").collapse('hide');
  });

  // Changing icon when navbar-toggle active
  $('.navbar-toggle').click(function(){
    $("#navbarIcon").toggleClass("fa fa-bars fa fa-times");
  });

  //Animation for elements with class slideanim
  $(window).scroll(function(){
      $(".slideanim").each(function(){
          var pos = $(this).offset().top;

          var winTop = $(window).scrollTop();
          if(pos < winTop + 600){
              $(this).addClass("slide");
          }
      });
  });
});

// sending email via ajax
$(function (){
  $('#sendEmail').click(function(){
    //get the data from form
    var data = {
    name: $('#name').val(),
    email: $('#email').val(),
    topic: $('#subject').val(),
    txt:  $('#message').val()
    }
    // sending message to server with ajax
    $.ajax({
      type: "POST",
      url: "contact.php",
      data: data,
      success: function(){
        swal({
          title: "Suksces!",
          text: "Wiadomośc wysłana poprawnie",
          confirmButtonText: "OK",
          confirmButtonColor: "#1c1d1f"
        });
      }
    });
  });
});


// Sweetalert
/*$('#myPop').on('click', function(event){
  swal({
    title: "Suksces!",
    text: "Wiadomośc wysłana poprawnie",
    confirmButtonText: "OK",
    confirmButtonColor: "#1c1d1f"
  });
});
*/
