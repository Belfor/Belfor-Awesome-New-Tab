$(document).ready( function(){


    chrome.storage.sync.get('urls', function(data) {
      console.log(data.urls)
      Math.floor(Math.random() * data.urls.length);
      $('body').css('backgroundImage' ,'url('+ data.urls[Math.floor(Math.random() * data.urls.length)] +')')
      });
    });
