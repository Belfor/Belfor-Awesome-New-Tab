$(window).ready(function() {

    urls = new Array();
    frases = new Array();
    load();

    function load() {

        chrome.storage.sync.get(null, function(data) {

            if (data.urls != undefined || data.urls != null) {
                urls = data.urls;

                for (i = 0; i < urls.length; i++) {
                    $("#urls").append('<li class="list-group-item"> <span id="url' + i + '" class="glyphicon glyphicon-trash"></span> ' + data.urls[i] + "</li>");
                    $("#url" + i).on("click", function() {
                        let i = $(this).attr("id").substr(3, $(this).attr("id").length);
                        var el = urls.splice(i, 1);

                        $(this).closest('li').remove();
                        chrome.storage.sync.set({
                            'urls': urls
                        });
                    })
                }
            }
            if (data.frases != undefined || data.frases != null) {
                frases = data.frases;
                for (i = 0; i < frases.length; i++) {
                    $("#frases").append('<li class="list-group-item"> <span id="frase' + i + '" class="glyphicon glyphicon-trash"></span> ' + data.frases[i] + "</li>");
                    $("#frase" + i).on("click", function() {
                        let i = $(this).attr("id").substr(6, $(this).attr("id").length);
                        var el = frases.splice(i, 1);
                        $(this).closest('li').remove();
                        chrome.storage.sync.set({
                            'frases': frases
                        });
                    })
                }
            }
        });
    }

    function limpiar() {
        $("#urls").empty();
        $("#frases").empty();
    }

    $("#insertURL").click(function() {
        urls.push($("#url").val());
        limpiar();
        $("#url").val("");
        chrome.storage.sync.set({
            'urls': urls
        }, function() {
            load();
        });
    })

    $("#insertFrase").click(function() {
        frases.push($("#frase").val());
        limpiar();
        $("#frase").val("");
        chrome.storage.sync.set({
            'frases': frases
        }, function() {
            load();
        });
    })
});
