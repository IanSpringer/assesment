console.log("hello")


$(document).ready(function(){
  if ($('body').hasClass('logo-title')){
    console.log("alert")
  }
  $('.transit').transition({opacity: 1, duration: 300})
  $('.logo-title').transition({y: 20, success: function(){
    $(this).transition({y: 0, opacity: 1})
  }})
  $('.form-username').transition({y: 20, success: function(){
    $(this).transition({y: 0, opacity: 1, delay: 1200})
  }})
  $('.form-password').transition({y: 20, success: function(){
    $(this).transition({y: 0, opacity: 1, delay: 1300})
  }})
  $('.submit').transition({y: 20, success: function(){
    $(this).transition({y: 0, opacity: 1, delay: 1400})
  }})
  $('body').on('click', '.submit', function(e){
    var username = $('.username').val()
    var password = $('.password').val()
    if(username === "test" && password === "portal"){

      $('.alert').html("Login Successful")
      $('.alert').css("color", "green")
      // $('.login-header').html('Login Successful')
    }

  })
  $('body').on('mouseover', '.submit', function(){
    $('.submit').stop().transition({opacity: .8})
  })
    $('body').on('mouseleave', '.submit', function(){
    $('.submit').stop().transition({opacity: 1})
  })
  $('.project a').on('mouseover', function(){
    console.log("projcet")
    $(this).stop().transition({"color": "#fe6159"})
  })
    $('.project a').on('mouseleave', function(){
    console.log("projcet")
    $(this).stop().transition({"color": "grey", })
  })
})






