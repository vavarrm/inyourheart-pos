var ajaxloading = false;
var getNoCheckBillOrder =domain_url+"Api/Api/getNoCheckBillList";
var getBillByForCheckBill =domain_url+"Api/Api/getBillByForCheckBill";
var checkBillApi =domain_url+"Api/Api/checkBill";
var dialogOpen = false;
var usdtoriel = 0;
var usd_total = 0; 
var riel_total = 0; 
$( "#dialog" ).dialog();
$( "#dialog" ).dialog('close');
$( "#dialog-confirm" ).dialog();
$( "#dialog-confirm" ).dialog('close');
var pay_amount_usd ;
var pay_amount_riel ;
var discount ;
var pay_change; 
$( document ).ready(function() {

	$.post(getNoCheckBillOrder, function( r) {
		$.each(r.body.data,function (j,e)
		{
			
			var html =''; 
			html+='<div class="col-xs-4 col-md-2 col-sm-2 this-padding this-text-blackthis-center">';
			html+='<label>Number:'+e.number+'</label><br>';
			html+='<label>Delivery:'+e.delivery+'</label>';
			html+= '<div class="">';
			html+= '<img src="/images/icon/bill.png"class="img-responsive"/>';
			html+='</div>';
			html+='<button type="button" data-code="'+e.code+'" class="btn btn-success" onclick="checkBill(this)">Check Bill</button>&nbsp&nbsp';
			html+='<button type="button" data-code="'+e.code+'" class="btn btn-success" onclick="addMore(this)">Add More</button>';
			html+='</div>';

			$('#datalist').append(html);
		});
    },'json')
	
	$("input[name=payusd]").bind('keyup mouseup', function () {
		var payusd = $(this).val();
		var change = payusd-usd_total ;
		if( change >=0)
		{
			$('#change').text(change.toFixed(2));
			var temp =change.toFixed(2).toString();
			var res = temp.split(".");
			if(res[1]*0.01 !="NaN"  && typeof res[1] !="undefined")
			{
				if(res[1] >1 && res[1] <10)
				{
					$('#riel-decimal').text('usd 0.'+res[1]+' riel='+(res[1]*0.1*usdtoriel).toFixed(0));
				}else{
					$('#riel-decimal').text('usd 0.'+res[1]+' riel='+(res[1]*0.01*usdtoriel).toFixed(0));
				}
				// console.log(res[1]);
			}else
			{
				$('#riel-decimal').text('');
			}
		}else
		{
			$('#change').text(0.00);
			$('#riel-decimal').text('');
		}
	});
	
	$("input[name=payriel]").bind('keyup mouseup', function () {
		var payriel = $(this).val();
		var change = (payriel-riel_total)/usdtoriel ;
		if( change >=0)
		{
			$('#change').text(change.toFixed(2));
			var temp =change.toString();
			var res = temp.split(".");
			if(res[1]*0.01 !="NaN"  && typeof res[1] !="undefined")
			{
				if(res[1] >1 && res[1] <10)
				{
					$('#riel-decimal').text('usd 0.'+res[1]+' riel='+(res[1]*0.1*usdtoriel).toFixed(0));
				}else
				{
					$('#riel-decimal').text('usd 0.'+res[1]+' riel='+(res[1]*0.01*usdtoriel).toFixed(0));
				}
				
			}else
			{
				$('#riel-decimal').text('');
			}
		}else
		{
			$('#change').text(0.00);
			$('#riel-decimal').text('');
		}
	});
	
	$("input[name=currency]").bind("click", function(){
		var currency = $(this).val();
		$(".paydiv").hide();
		$(".pay"+currency).show();
		$('.payinput').val('0');
		$('#riel-decimal').text('');
		$('#change').text('0.00');
	})
	
	$("select[name=discount]").bind('change',function(){
		var discount_usd_total = usd_total * $(this).val();
		var discount_riel_total = riel_total  * $(this).val();
		$('#total').text('usd：'+discount_usd_total+' riel：'+ discount_riel_total);
		console.log(discount_usd_total);
	})
});
function checkBill(doc)
{
	if(ajaxloading == true)
	{
		alert('loading');
		return false;
	}
	ajaxloading = true;
	var code = $(doc).data('code');
	var data = {'code':code};


	$.ajax({
		  url : getBillByForCheckBill,
		  type : 'post', 
		  dataType : 'json', 
		  contentType:"application/x-www-form-urlencoded",
		  data : JSON.stringify(data),
		  success : function(result) {
			if(result.status =="200")
			{
			
				$( "#dialog" ).dialog('close');
				$('#bill-table tbody tr').remove();
				$.each(result.body.data.list,function(i,e){
					var html ="";
					html +='<tr >';
					html +='<td >'+e.full_name+"</td>";
					html +='<td style="text-align: center;">'+e.unit_price+"</td>";
					html +='<td style="text-align: center;">'+e.quantity+"</td>";
					html +='<td style="text-align: center;">'+e.subtotal+"</td>";
					html +="/<tr>";
					$('#bill-table tbody').append(html);
				})
				var html='<tr class="this-metro-light-blue">';
				html+="<td colspan='2'>Total</td>";
				html+='<td colspan="2" style="text-align: center;" id="total"> usd：'+result.body.data.info.total+' riel：'+result.body.data.info.total_riel+'</td>';
				html +="/<tr>";
				$('#bill-table tbody').append(html);
				$( "#dialog" ).removeClass('hidden');
				$('#bill-code').text(result.body.data.info.code);
				$('#bill-number').text(result.body.data.info.number);
				$('#bill-delivery').text(result.body.data.info.delivery);
				usdtoriel = result.body.data.usdtoriel;
				usd_total =result.body.data.info.total;
				riel_total =result.body.data.info.total_riel;
				$('#usdtoriel').text('($1 usd  to '+result.body.data.usdtoriel+' riel)');
				$( "#dialog" ).dialog(
					{   
						height: 600,
						width: 800,
						buttons: {
							Send: function() {
								pay_amount_usd = $('input[name=payusd]').val();
								pay_amount_riel = $('input[name=payriel]').val();
								discount = $('select[name=discount]').val();
								pay_change =$('#change').text();
								if(
									pay_amount_usd  ==0 &&
									pay_amount_riel  ==0
								)
								{
									$('#dialog-alert p').text('please keyin pay');
									$( "#dialog-alert" ).dialog({
										buttons:{
											close: function() {
											$(this).dialog( "close" );
										}}
									});
									return false;
								}
								$( "#dialog-confirm" ).show().dialog({
									buttons: {
										Ok:function(){
											
											if(ajaxloading == true)
											{
												alert('loading');
												return false;
											}
											ajaxloading = true;
	
											var data = {
												'code':code,
												'pay_amount_usd' : 	pay_amount_usd,
												'pay_amount_riel' : 	pay_amount_riel,
												'pay_change' : 	pay_change,
												'discount' : 	discount,
											};
											$.ajax({
												url : checkBillApi,
												type : 'post', 
												dataType : 'json', 
												contentType:"application/x-www-form-urlencoded",
												data : JSON.stringify(data),
												success : function(result) 
												{
													$('#dialog-alert p').text(result.message);
													$( "#dialog-confirm" ).dialog( "close" );
													if(result.status =="200")
													{
														$( "#dialog" ).dialog( "close" );

														$( "#dialog-alert" ).dialog({
															buttons:{
																close: function() {
																location.reload() ;
																$(this).dialog( "close" );
															}}
														});
													}else
													{
														
														$( "#dialog-alert" ).dialog({
															buttons:{
																close: function() {
																$(this).dialog( "close" );
															}}
														});
													}
													
													ajaxloading = false;
												}
											})
											
										},
										Cancel: function() {
											$(this).dialog( "close" );
										}
									}
								});
							},
							Cancel: function() {
								$(this).dialog( "close" );
							}
						}
					}
				).css({"overflow-x":"hidden"});
			}else
			{
				alert(result.message);
			}
			ajaxloading =false;
		  },
	});
	return false;
}