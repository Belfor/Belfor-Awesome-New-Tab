
  document.addEventListener("DOMContentLoaded", function() {
            //chrome.management.getAll(getAllCallback);
            //document.getElementsByClassName("responsive")[0].style.backgroundImage = "url('https://unsplash.it/1920/1080/?random')";
        //     document.body.style.backgroundImage = "url('https://unsplash.it/1920/1080/?random')";
             dia();

          });

          function dia(){
            var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
            var f = new Date();

            if (f.getDay() == 5){
              document.getElementById("aguanta").innerHTML = "¡¡¡¡¡YA ES VIERNES!!!!!";
            }else if (f.getDay() == 6){
              document.getElementById("aguanta").innerHTML = "¡¡¡¡¡ES SABADO DISFRUTA DEL DIA!!!!!";
            }else if (f.getDay() == 7){
              document.getElementById("aguanta").innerHTML = "¡¡¡¡¡ES DOMINGO AUN!!!!!";
            }else{
              document.getElementById("aun").innerHTML = "Ya falta menos solo es " + diasSemana[f.getDay()];
            
            }


            console.log(document.getElementById("aun").innerHTML);
          }

    /*      var getAllCallback = function(list) {
            var apps = document.getElementById("apps");
            for(var i in list) {
              // we don't want to do anything with extensions yet.
              var extInf = list[i];
              if(extInf.isApp && extInf.enabled) {
                var app = document.createElement("div");

                var img = new Image();
                img.className = "image";
                img.src = find128Image(extInf.icons);
                img.addEventListener("click", (function(ext) {
                  return function() {
                    chrome.management.launchApp(ext.id);
                  };
                })(extInf));

                var name = document.createElement("div");
                name.className = "name";
                name.textContent = extInf.name;

                app.className = "app";
                app.appendChild(img);
                app.appendChild(name);
                apps.appendChild(app);
              }
            }
          };

          var find128Image = function(icons) {
            for(var icon in icons) {
              if(icons[icon].size == "128") {
                return icons[icon].url;
              }
            }

            return "/noicon.png";
          };*/
