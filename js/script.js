
var getMenuList ="http://inyourheart.beta.com/Api/Api/getMenu";

    $.post(getMenuList, function( data ) {
        $.each(data.body.data.menu,function (i,item) {
            $.each(item.list,function (i,e){
                var img;
                if(e.img==""){
                    img=e.img;
                }else{
                    img="/images/defult.jpg";
                }
                $('#prolist').append(''+
                    '<div class="col-xs-4 col-md-3 col-sm-3 this-padding this-text-black this-center "' +
                    ' onclick="orderFood('+e.id+')" >' +
                    '<img src="'+img+' "class="img-responsive "/>'+
                    '<p>'+e.full_name.substr(0,30)+'</p>'+
                    '</div>'

                );
            });
        })
    },'json');
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
                      var filter, table, tr, td, i;
                      filter = Id;
                      table = document.getElementById("list");
                      tr = table.getElementsByTagName("tr");
                      alert('1');
                      for (i = 0; i < tr.length; i++) {
                          td = tr[i].getElementsByTagName("td")[0];
                          if (td) {
                                  $('#list').append('' +
                                      '<tr style="font-weight: bold" id="check" >\n' +
                                      ' <td style="display: none" id="id">\'+e.id+\'</td>'+
                                      ' <td id="rowOrder">'+e.full_name+'</td>\n' +
                                      ' <td style="width: 50px">1</td>\n' +
                                      ' <td style="width: 120px">'+e.unit_price+'</td>\n' +
                                      ' <td  style="width: 40px"><i class="fa fa-trash this-text-red"  style="font-size: 20px;cursor:' +
                                      ' pointer"></i>' +
                                      '</td>\n' +
                                      ' </tr>'

                                  );

                          }
                      }


                  }


              });
          })
      },'json');


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