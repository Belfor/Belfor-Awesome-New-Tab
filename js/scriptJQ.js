$(document).ready( function(){


  $.getJSON("config/config.json",
    function(data){
      console.log(data.urls)
      Math.floor(Math.random() * data.urls.length);
      $('body').css('backgroundImage' ,'url('+ data.urls[Math.floor(Math.random() * data.urls.length)] +')')
      });
    });
