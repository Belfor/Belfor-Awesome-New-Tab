$(window).ready(function() {

    urls = new Array();

    chrome.storage.sync.get('urls', function(data) {

        if (data.urls != undefined || data.urls != null) {
            urls = data.urls;
            for (i = 0; i < urls.length; i++) {
                $("#urls").append('<li class="list-group-item"><span class="glyphicon glyphicon-trash"> ' + data.urls[i] + "</li>");
            }
        }
    });



    /*    $.getJSON("config/config.json",
            function(data) {
                json = data
                for (i = 0; i < data.urls.length; i++) {
                    $("#urls").append('<li class="list-group-item"><span class="glyphicon glyphicon-trash"> ' + data.urls[i] + "</li>");
                }
            });*/
    $("#insertURL").click(function() {
        urls.push($("#url").val());
        $("#urls").append('<li class="list-group-item"><span class="glyphicon glyphicon-trash"> ' + $("#url").val() + "</li>");
        $("#url").val("");
        chrome.storage.sync.set({
            'urls': urls
        });
        //  json.urls.push($("#url").val());

    })
});
