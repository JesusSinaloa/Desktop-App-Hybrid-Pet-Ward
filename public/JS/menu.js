
$(document).ready(function() {
    $("#show-adoptions").click(function() {     
 
        $.ajax({
        url: "http://localhost:3000/get-adopts",
        method: "GET",    
        beforeSend: function () {
            //AQUI PUEDE IR UN PRELOADER
        },
        success: function (data)
        {
            console.log(data);
            var $card_holder  = $("#card-holder");
            var $card_container = $('<div class="card-container-adoptions"></div>');
          
            for(var i = 0; i < data.length; i++) {
                var obj = data[i];            
                //console.log(obj.date);
                var $action_item = $('<a onclick=show_adoption("'+obj.idAdoption+'")></a>')
                var $card = $('<div class=""></div>')
                var $card_row = $('<div class="row"></div>')
                var $card_image = $('<div class="col l2 s2 m2 div-img-pet-circle-adoptions"><img src="public/images/'+obj.imagenPet+'"></div>')
                var date = new Date(obj.date);  // dateStr you get from mongodb
                var d = date.getDate();
                var m = date.getMonth()+1;
                var year = date.getFullYear();
                var strDate = d + "/" + m + "/" + year;
                var $card_nombre = $('<div class="col l4 s4 m4 center"></div>').html(obj.nombrePet)
                var $card_date = $('<div class="col l4 s4 m4 center"></div>').html(strDate)
                var $card_icon = $('<div class="col l2 s2 m2 div-icon-check center"><i class="far fa-check-circle"></i></div>')
                $card_row.append([$card_image, $card_nombre, $card_date, $card_icon]);
                $card.append($card_row) 
                $action_item.append($card)
                $card_container.append($action_item)
            }
            
            $card_holder.html($card_container);
            $('#h5-title').html("Adopciones");
        }
        });
           
    });

    
});



function show_adoption(id){
    $.ajax({
        url: "http://localhost:3000/get-detail-adopt",
        method: "POST",         
        data: {
            idAdoption: id
        },   
        beforeSend: function () {
            //AQUI PUEDE IR UN PRELOADER
        },
        success: function (data)
        {
            console.log(data);
            /*var $card_holder  = $("#card-holder");
            var $card_container = $('<div class="card-container-adoptions"></div>');
          
            for(var i = 0; i < data.length; i++) {
                var obj = data[i];            
                //console.log(obj.date);
                var $action_item = $('<a onclick=show_adoption("'+obj.idAdoption+'")></a>')
                var $card = $('<div class=""></div>')
                var $card_row = $('<div class="row"></div>')
                var $card_image = $('<div class="col l2 s2 m2 div-img-pet-circle-adoptions"><img src="public/images/'+obj.imagenPet+'"></div>')
                var date = new Date(obj.date);  // dateStr you get from mongodb
                var d = date.getDate();
                var m = date.getMonth()+1;
                var year = date.getFullYear();
                var strDate = d + "/" + m + "/" + year;
                var $card_nombre = $('<div class="col l4 s4 m4 center"></div>').html(obj.nombrePet)
                var $card_date = $('<div class="col l4 s4 m4 center"></div>').html(strDate)
                var $card_icon = $('<div class="col l2 s2 m2 div-icon-check center"><i class="far fa-check-circle"></i></div>')
                $card_row.append([$card_image, $card_nombre, $card_date, $card_icon]);
                $card.append($card_row) 
                $action_item.append($card)
                $card_container.append($action_item)
            }
            
            $card_holder.html($card_container);
            $('#h5-title').html("Adopciones");*/
        }
        });
}
