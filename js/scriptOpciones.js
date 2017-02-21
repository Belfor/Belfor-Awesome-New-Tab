$(window).ready(function() {

    urls = new Array();

    chrome.storage.sync.get('urls', function(data) {

        if (data.urls != undefined || data.urls != null) {
            urls = data.urls;
            for (i = 0; i < urls.length; i++) {
                $("#urls").append('<li class="list-group-item"> <span id="url' + i + '" class="glyphicon glyphicon-trash"></span> ' + data.urls[i] + "</li>");
                $("#url" + i).on("click", function() {
                    let i = $(this).attr("id").substr(-1,1);
                    var el = urls.splice(i, 1);
                    $(this).closest('li').remove();
                    chrome.storage.sync.set({
                        'urls': urls
                    });
                })
            }
        }
    });

    $("#insertURL").click(function() {
        urls.push($("#url").val());
        $("#urls").append('<li class="list-group-item"><span class="glyphicon glyphicon-trash"> ' + $("#url").val() + "</li>");
        $("#url").val("");
        chrome.storage.sync.set({
            'urls': urls
        });

    })
});
