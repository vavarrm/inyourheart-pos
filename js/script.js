var getMenuListApi =domain_url+"Api/Api/getMenu";
var getBillForCodeApi =domain_url+"Api/Api/getBillForCode";
var delMealsApi =domain_url+"Api/Api/delMeals";
var addOrderApi =domain_url+"Api/Api/addOrder";
var addMoreOrderApi =domain_url+"Api/Api/addMoreOrder";

$(window).on('load',function(){
<<<<<<< HEAD
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

    $('#addOrder').bind('click',function(){
        if(Meals.length >0)
        {
            var apiurl ;
            var number;
            if(add_more ==true)
            {
                apiurl = addMoreOrderApi;
                number =$('#result-number').text();
            }else{
                apiurl = addOrderApi;
                number = $("select[name=number]").val();
            }
            $( "#dialog-confirm" ).text('new order');
            $( "#dialog-confirm" ).dialog({
                buttons:{
                    ok: function()
                    {
                        var data =
                            {
                                "number" 	:number,
                                "delivery"  :$('select[name=delivery]').val(),
                                "meals"  :Meals,
                                "code"	:result_code
                            };
                        $.ajax({
                            url : apiurl,
                            type : 'post',
                            dataType : 'json',
                            contentType:"application/x-www-form-urlencoded",
                            data : JSON.stringify(data),
                            success : function(result) {
                                $('#dialog-alert p').text(result.message);
                                if(result.status =="200")
                                {
                                    $( "#dialog-alert" ).dialog({
                                        buttons:
                                            {
                                                ok: function() {
                                                    $( "#dialog-confirm" ).dialog( "close" );
                                                    $(this).dialog( "close" );
                                                    window.location.reload();
                                                }}
                                    });
                                }else
                                {
                                    $( "#dialog-alert" ).dialog({
                                        buttons:
                                            {
                                                ok: function() {
                                                    $( "#dialog-confirm" ).dialog( "close" );
                                                    $(this).dialog( "close" );
                                                }}
                                    });
                                }
                            },
                        });
                    },
                    cancel :function(){
                        $(this).dialog( "close" );
                    }
                }
            });
        }
    })
=======
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
	function padding1(num, length) {
        for(var len = (num + "").length; len < length; len = num.length) {
            num = "0" + num;            
        }
        return num;
    }
	
	$('#numberselect').keyup(function(e){
		if(e.keyCode == 13)
		{
			var code = padding1($(this).val(),3);
			if($('*[data-code="'+code+'"]').length >0)
			{
				$('.Meals').hide();
				$('*[data-code="'+code+'"]').show();
			}else
			{
				$('.Meals').show();
			}
		}
	});
	
	
	
	$('#addOrder').bind('click',function(){
		if(Meals.length >0)
		{
			var apiurl ;
			var number;
			if(add_more ==true)
			{	
				apiurl = addMoreOrderApi;
				number =$('#result-number').text();
			}else{
				apiurl = addOrderApi;
				number = $("select[name=number]").val();
			}
			$( "#dialog-confirm" ).text('new order');
			$( "#dialog-confirm" ).dialog({
				buttons:{
					ok: function() 
					{
						var data = 
						{
							"number" 	:number,
							"delivery"  :$('select[name=delivery]').val(),
							"meals"  :Meals,
							"code"	:result_code
						};
						$.ajax({
						  url : apiurl,
						  type : 'post', 
						  dataType : 'json', 
						  contentType:"application/x-www-form-urlencoded",
						  data : JSON.stringify(data),
						  success : function(result) {
							$('#dialog-alert p').text(result.message);
							if(result.status =="200")
							{
								$( "#dialog-alert" ).dialog({
									buttons:
									{
										ok: function() {
										$( "#dialog-confirm" ).dialog( "close" );
										$(this).dialog( "close" );
										window.location.reload();
									}}
								});
							}else
							{
								$( "#dialog-alert" ).dialog({
									buttons:
									{
										ok: function() {
										$( "#dialog-confirm" ).dialog( "close" );
										$(this).dialog( "close" );
									}}
								});
							}
						  },
						});
					},
					cancel :function(){
						$(this).dialog( "close" );
					}
				}
			});
		}
	})
>>>>>>> 0c74a17b06967dfd235a8dc297c5ae24726216c1
});

function cancelItem(id,code)
{
	$( "#dialog-confirm" ).dialog({
		buttons:{
			ok: function() {
				var data = 
				{
					"code" :code,
					"meals"  :[{"id":id}]
				};
				$.ajax({
				  url : delMealsApi,
				  type : 'post', 
				  dataType : 'json', 
				  contentType:"application/x-www-form-urlencoded",
				  data : JSON.stringify(data),
				  success : function(result) {
					$('#dialog-alert p').text(result.message);
					if(result.status =="200")
					{
<<<<<<< HEAD
						window.location.reload();
=======
						$( "#dialog-alert" ).dialog({
							buttons:
							{
								ok: function() {
								$( "#dialog-confirm" ).dialog( "close" );
								$(this).dialog( "close" );
								window.location.reload();
							}}
						});
>>>>>>> 0c74a17b06967dfd235a8dc297c5ae24726216c1
					}else
					{
						$( "#dialog-alert" ).dialog({
							buttons:
							{
								ok: function() {
								$( "#dialog-confirm" ).dialog( "close" );
								$(this).dialog( "close" );
							}}
						})
					}
				  },
				});
				$(this).dialog( "close" );
			},
			cancel :function(){
				$(this).dialog( "close" );
			}
		}
	});
}
function list() {
    $.post(getMenuListApi, function( data ) {
        menulist =data.body.data.menu;
        khrtousd =data.body.data.khrtousd;
        categorylist =data.body.data.category;
        numberlist =data.body.data.canUseNumber;
        $.each(menulist,function (i,item){
            $.each(item.list,function (j,e)
			{
                $('#prolist').append(''+
<<<<<<< HEAD
                    '<div  data-id="'+e.id+'" data-unit_price="'+e.unit_price+'" data-full_name="'+e.full_name+'" class=" Meals  category-'+i+'"' +
                    ' onclick="orderFood(this)" >' +
                    '<div class="  col-xs-2 col-md-3 col-sm-4 this-animate-opacity " >'+
					'<div class="well  well-sm food-list this-hover-opacity ">'+
                    '<span class="label label-danger" style="position: absolute">Code : '+e.id+'</span>'+
                         '<img onerror="'+"javascript:this.src='/images/default.jpg'"+ '" src="http://inyourheart.beta.com/images/menu/'+e.img+'.png" class="img-responsive this-animate-opacity" />'+
                         '<div class="foodName">'+e.full_name+'</div>'+
					'</div>'+
                    '</div>'+
=======
                    '<div  data-id="'+e.id+'" data-unit_price="'+e.unit_price+'" data-code="'+e.code+'" data-full_name="'+e.full_name+'" class="col-xs-4 col-md-3 col-sm-3 Meals this-padding  this-text-blackthis-center category-'+i+'"' +
                    ' onclick="orderFood(this)" >' +
                    '<img onerror="'+"javascript:this.src='/images/default.jpg'"+ '" src="'+ domain_url+'images/menu/'+e.img+'.png" class="img-responsive" />'+
                    '<div style="height:60px;cursor: pointer;">'+e.code+e.full_name+'</div>'+
>>>>>>> 0c74a17b06967dfd235a8dc297c5ae24726216c1
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
		$.each(numberlist,function (i,item){
			if(i==0)
			{
				$("select[name=number]").append($("<option selected></option>").attr("value", item).text(item))
			}else
			{
				$("select[name=number]").append($("<option></option>").attr("value", item).text(item))
			}
		})
    },'json')

}

    //event drap  ondragstart="dragStart(event)" draggable="true" id="dragtarget"
function orderFood(e) 
{
	var id = $(e).data('id');
	var full_name = $(e).data('full_name');
	var unit_price = $(e).data('unit_price');
	var code = $(e).data('code');
	var add_quantity = 0;
	var qty =1;
	$(Meals).each(function (i,e) 
	{
		if(e.me_id == id)
		{
			add_quantity = 1;
			Meals[i].quantity= parseInt(Meals[i].quantity)+1;
			$("#col-qty-"+id).val(Meals[i].quantity);
			$("#col-subtotal-"+id).text(parseFloat(Meals[i].quantity * e.unit_price));
			return false;
		}
	});
	if(add_quantity ==0)
	{
		$('#list').append('' +
<<<<<<< HEAD
			  '<tr  id="titlerow'+id+'">' +
			  ' <td style="word-wrap:break-word;word-break:break-all">'+full_name+'</td>' +
			  ' <td  style="text-align: center"  ><input id="col-qty-'+id+'" data-id="'+id+'"  class="input-qty' +
			' form-control input-sm"' +
			'  style="width:50px" type="number" min="1" step="1" value="'+qty+'"></td>' +
=======
			  '<tr  style="font-weight: bold" id="titlerow'+id+'">' +
			  ' <td style="word-wrap:break-word;word-break:break-all">'+code+full_name+'</td>' +
			  ' <td  style="text-align: center"  ><input id="col-qty-'+id+'" data-id="'+id+'"  class="input-qty"  style="width:50px" type="number" min="1" step="1" value="'+qty+'"></td>' +
>>>>>>> 0c74a17b06967dfd235a8dc297c5ae24726216c1
			  ' <td style="text-align: center">'+unit_price+'</td>' +
			  ' <td style="text-align: center" id="col-subtotal-'+id+'" >'+parseFloat(qty * unit_price)+'</td>' +
			  ' <td onclick="deletedOrder('+id+')"  ><span class="label label-danger"><i class="fa fa-trash-o"' +
			'style="font-size: 15px"></i></span>' +
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
	$("#total-khr").html(commafy(total*khrtousd));
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