var getMenuList ="http://inyourheart.beta.com/Api/Api/getMenu";
var menulist ={};
var categorylist ={};
$( window ).load(function() {

   list();
  /* category();
   list_byCat();*/

});

function list() {
    $.post(getMenuList, function( data ) {
        menulist =data.body.data.menu;
        categorylist =data.body.data.category;
        $.each(data.body.data.menu,function (i,item) {
            $.each(item.list,function (j,e){

                var img;
                if(e.img==""){
                    img=e.img;
                }else{
                    img="/images/defult.jpg";
                }
                $('#prolist').append(''+
                    '<div class="col-xs-4 col-md-3 col-sm-3 this-padding this-text-blackthis-center category-'+i+'"' +
                    ' onclick="orderFood('+e.id+')" >' +
                    '<img src="'+img+' "class="img-responsive "/>'+
                    '<p>'+e.full_name.substr(0,20)+'</p>'+
                    '</div>'

                );
            });
        })
    },'json').done(
        function() {
            category()
        }
    );

}

function category() {

        $.each(categorylist,function (i,e) {
            var img;
            if(e.img==""){
                img=e.img;
            }else{
                img="/images/defult.jpg";
            }
            $('#menu_list').append(''+
                '<div class="col-xs-4 col-md-3 col-sm-3 this-padding this-text-black this-center " >' +
                '<img src="'+img+' "class="img-responsive " onclick="list_byCat('+e.id+')" />'+
                '<p>'+e.full_name.substr(0,20)+'</p>'+
                '</div>'
            );
        })
}

function list_byCat(id) {
    console.log(id);
    $('.category-'+id).hide();
    /*
    $.post(getMenuList, function( data ) {
        $.each(data.body.data.menu[id],function (i,item) {
            $.each(item.list,function (i,e){
               console.log(e);
            });
        })
    },'json');*/

    //$('#prolist').empty();
    w3_close();
    //list();
}


    //event drap  ondragstart="dragStart(event)" draggable="true" id="dragtarget"
  function orderFood(Id) {
      $.post(getMenuList, function( data ) {
          $.each(data.body.data.menu,function (i,item) {
              $.each(item.list,function (i,e){
                  var img;
                  if(e.img==""){
                      img=e.img;
                  }else{
                      img="/images/defult.jpg";
                  }
                  if(e.id==Id){
                      $('#list').append('' +
                          '<tr  style="font-weight: bold" id="titlerow'+e.id+'">\n' +
                          ' <td style="display: none" id="rowid">'+e.id+'</td>'+
                          ' <td >'+e.full_name.substr(0,20)+'</td>\n' +
                          ' <td style="width: 30px">1</td>\n' +
                          ' <td id="rowOrder" style="width: 80px">'+e.unit_price+'</td>\n' +
                          ' <td onclick="deletedOrder('+e.id+')"  style="width: 40px"><i class="fa fa-trash this-text-red" ' +
                          '  style="font-size:' +
                          ' 20px;cursor:' +
                          ' pointer"></i>' +
                          '</td>\n' +
                          ' </tr>'
                      );
                  }
                  var Total=0;
                  $("[id*=rowOrder]").each(function () {
                      Total=Total+parseFloat($(this).html());
                  });
                  $("[id*=total]").html(Total.toString());
              });
          })
      },'json');
  }
function deletedOrder(id) {
    $('#titlerow'+id).remove();
}
function refreshMenu() {
    $('#prolist').empty();
    w3_close();
    list();
}
    function dragStart(event) {
        event.dataTransfer.setData("Text", event.target.id);
    }
    function dragEnter(event) {
        if ( event.target.className == "droptarget" ) {
            document.getElementById("demo").innerHTML = "Entered the dropzone";
            event.target.style.border = "3px dotted red";
        }
    }
    function dragLeave(event) {
        if ( event.target.className == "droptarget" ) {
            document.getElementById("demo").innerHTML = "Left the dropzone";
            event.target.style.border = "";
        }
    }
    function allowDrop(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    }