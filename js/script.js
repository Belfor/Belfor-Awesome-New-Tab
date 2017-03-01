$(document).ready( function(){


    chrome.storage.sync.get(null, function(data) {

      $('body').css('backgroundImage' ,'url('+ data.urls[Math.floor(Math.random() * data.urls.length)] +')');
      $('#frase').text('" ' + data.frases[Math.floor(Math.random() * data.frases.length)] + ' "');
      });
    });
