var getMenuList ="http://inyourheart.beta.com/Api/Api/getMenu";
var menulist ={};
var categorylist ={};
// $( window ).load(function() {

   
  /* category();
   list_byCat();*/

// });
$(window).on('load',function(){
	list();
	$('#category-select').bind('change',function(e){
		event.preventDefault();
		var id =$(this).val();
		if(id=="all")
		{
			return false;
		}
		$('.Meals').hide();
		
		$('.category-'+id).show();
	})
});
function list() {
    $.post(getMenuList, function( data ) {
        menulist =data.body.data.menu;
        categorylist =data.body.data.category;
        $.each(menulist,function (i,item){
            $.each(item.list,function (j,e)
			{
                var img;
                if(e.img==""){
                    img=e.img;
                }else{
                    img="/images/defult.jpg";
                }
                $('#prolist').append(''+
                    '<div  data-id="'+e.id+'" data-unit_price="'+e.unit_price+'" data-full_name="'+e.full_name+'" class="col-xs-4 col-md-3 col-sm-3 Meals this-padding  this-text-blackthis-center category-'+i+'"' +
                    ' onclick="orderFood(this)" >' +
                    '<img src="'+img+' "class="img-responsive "/>'+
                    '<div style="height:60px;">'+e.full_name+'</div>'+
                    '</div>'
                );
            });
        })
		$.each( categorylist,function (i,item){
			if(i==0)
			{
				$("#category-select").append($("<option selected></option>").attr("value", item.id).text(item.full_name))
			}else
			{
				$("#category-select").append($("<option></option>").attr("value", item.id).text(item.full_name))
			}
		})
		var default_selected = $("#category-select").val();
		$('.Meals').hide();
		$('.category-'+default_selected).show();
    },'json')

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

var  Meals = new Array();
    //event drap  ondragstart="dragStart(event)" draggable="true" id="dragtarget"
function orderFood(e) 
{
	var id = $(e).data('id');
	var full_name = $(e).data('full_name');
	var unit_price = $(e).data('unit_price');
	var add_quantity = 0;
	var qty =1;
	$(Meals).each(function (i,e) 
	{
		if(e.me_id == id)
		{
			add_quantity = 1;
			Meals[i].quantity+=1;
			$("#col-qty-"+id).val(Meals[i].quantity);
			$("#col-subtotal-"+id).text(parseFloat(Meals[i].quantity * e.unit_price));
			return false;
		}
	});
	if(add_quantity ==0)
	{
		$('#list').append('' +
			  '<tr  style="font-weight: bold" id="titlerow'+id+'">' +
			  ' <td style="word-wrap:break-word;word-break:break-all">'+full_name+'</td>' +
			  ' <td  style="text-align: center"  ><input id="col-qty-'+id+'" data-id="'+id+'"  class="input-qty"  style="width:50px" type="number" min="1" step="1" value="'+qty+'"></td>' +
			  ' <td style="text-align: center">'+unit_price+'</td>' +
			  ' <td style="text-align: center" id="col-subtotal-'+id+'" >'+parseFloat(qty * unit_price)+'</td>' +
			  ' <td onclick="deletedOrder('+id+')"  ><i class="fa fa-trash this-text-red" ' +
			  '  style="font-size:20px;cursor:pointer "' +
			  '</td>' +
			  ' </tr>'
		);
		Meals.push(
			{
				"me_id":id,
				"unit_price":unit_price,
				"original_price":unit_price,
				"quantity":1
			}
		);
	}
	subTotal();
}


$('body').on("keyup mouseup", '.input-qty', function () {
	var qty = $(this).val();
	var id = $(this).data('id');
	$(Meals).each(function (i,e) 
	{
		if(e.me_id == id)
		{
			Meals[i].quantity =qty ;
			$("#col-subtotal-"+id).text(parseFloat(qty * e.unit_price));
		}
	});
	subTotal();
});



function qtychange(e,id)
{
	
	$(Meals).each(function (i,e) 
	{
		if(e.me_id == id)
		{
			Meals[i].quantity =qty ;
			$("#col-subtotal-"+id).text(parseFloat(qty * e.unit_price));
			// return false;
		}
	});
}

function subTotal()
{
	var total  = 0;
	$(Meals).each(function (i,e) 
	{
		total+=parseFloat(e.quantity * e.unit_price);
	});
	$("#total").html(total);
	$("#total-khr").html(commafy(total*4000));
}

function commafy(num) 
{
	num = num + "";
	var re = /(-?\d+)(\d{3})/
	while (re.test(num)) {
		num = num.replace(re, "$1,$2")
	}
	return num;
}

function deletedOrder(id) {
    $('#titlerow'+id).remove();
	$(Meals).each(function (i,e) 
	{
		if(id == e.me_id)
		{
			Meals.splice(i,1);
			return false;
		}
	});
	subTotal();
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