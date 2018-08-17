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

<<<<<<< HEAD
    $('#printBill').click(function () {
        var divToPrint=document.getElementById('bill');
=======
    $('#printBill').click(function (e) {
		e.preventDefault();
        var divToPrint=document.getElementById('print_receipt');
>>>>>>> 0c74a17b06967dfd235a8dc297c5ae24726216c1
        var newWin=window.open('','Print-Window');
        newWin.document.open();
        newWin.document.write('<link rel="stylesheet" href="/css/sihalive-style.css" type="text/css" />');
        newWin.document.write('<link rel="stylesheet" href="/css/css_printer.css" type="text/css" />');
        newWin.document.write('<link rel="stylesheet" href="/css/jquery-ui.min.css" type="text/css" />');
        newWin.document.write('<link rel="stylesheet" href="/css/bootstrap.css" type="text/css" />');
        newWin.document.write('<link rel="stylesheet" href="/css/bootstrap.min.css" type="text/css" />');
        newWin.document.write('' +
			'<html><body onload="window.print()">' +
			'<div class="this-left" > <img src="/images/icon/logo.png"class="img-responsive"' +
			' style="width:70px"></div>' +
			' <center>' +
			'<div  style="margin-top:-60px;font-weight: bold"><h4>YOUR HEART</h4><p>បេះដូងអ្នក</p></div></center><br/>' +
			''+divToPrint.innerHTML+' <center><h5> Thank You!  </h5></center></body></html>');
        newWin.document.close();
        setTimeout(function(){
            newWin.close();
        	},10);
     });

<<<<<<< HEAD
    /* not yet use print function*/
=======
	 $('#delivery_select').bind('change',function(){
		var value = $(this).val();
		$('.bill').hidden();

	 })
	 
    $('#printBillss').click(function () {
        var contents = document.getElementById("print_receipt").innerHTML;
        var frame1 = document.createElement('iframe');
        frame1.name = "frame1";
        frame1.style.position = "absolute";
        frame1.style.top = "-1000000px";
        //document.body.appendChild(frame1);
        var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
        frameDoc.document.open();
        frameDoc.document.write('<html><head><title>IN YOUR HEART </title>');
        frameDoc.document.open();
        frameDoc.document.write('<link rel="stylesheet" href="/css/sihalive-style.css" type="text/css" />');
        frameDoc.document.write('<link rel="stylesheet" href="/css/css_printer.css" type="text/css" />');
        frameDoc.document.write('<link rel="stylesheet" href="/css/jquery-ui.min.css" type="text/css" />');
        frameDoc.document.write('<link rel="stylesheet" href="/css/bootstrap.css" type="text/css" />');
        frameDoc.document.write('<link rel="stylesheet" href="/css/bootstrap.min.css" type="text/css" />');
        frameDoc.document.write('</head><body>');
        frameDoc.document.write(contents);
        frameDoc.document.write('</body></html>');
        frameDoc.document.close();
        setTimeout(function () {
            window.frames["frame1"].focus();
            window.frames["frame1"].print();
            document.body.removeChild(frame1);
            self.close();
        }, 500);
        return false;
    });
>>>>>>> 0c74a17b06967dfd235a8dc297c5ae24726216c1
    function printBill(){
            var contents = document.getElementById("print_receipt").innerHTML;
            var frame1 = document.createElement('iframe');
            frame1.name = "frame1";
            frame1.style.position = "absolute";
            frame1.style.top = "-100px";
            document.body.appendChild(frame1);
            var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
            frameDoc.document.open();
            frameDoc.document.write('<html><head>');
            frameDoc.document.open();
            frameDoc.document.write('<link rel="stylesheet" href="/css/sihalive-style.css" type="text/css" />');
            frameDoc.document.write('<link rel="stylesheet" href="/css/css_printer.css" type="text/css" />');
            frameDoc.document.write('<link rel="stylesheet" href="/css/jquery-ui.min.css" type="text/css" />');
            frameDoc.document.write('<link rel="stylesheet" href="/css/bootstrap.css" type="text/css" />');
            frameDoc.document.write('<link rel="stylesheet" href="/css/bootstrap.min.css" type="text/css" />');
            frameDoc.document.write('</head><body style="margin-top: -10px ;padding: 2px!important;">');
             frameDoc.document.write('');
            frameDoc.document.write(contents);
            frameDoc.document.write('</body></html>');
            frameDoc.document.close();
            setTimeout(function () {

                $(".print default").trigger(e);
                window.frames["frame1"].focus();
                window.frames["frame1"].print();
                document.body.removeChild(frame1);
                self.close();
            }, 500);
            return false;
	}


	$.post(getNoCheckBillOrder, function( r) {
		$.each(r.body.data,function (j,e)
		{
			
			var html =''; 
<<<<<<< HEAD
			html+='<div class="col-xs-4 col-md-2 col-sm-2 this-text-blackthis-center">';

=======
			html+='<div class="col-xs-2 col-md-3 col-sm-4 this-padding this-text-blackthis-center bill delivery-'+e.delivery+'">';
			html+='<label>Number:'+e.number+'</label>&nbsp&nbsp';
			html+='<label>Delivery:'+e.delivery+'</label>';
>>>>>>> 0c74a17b06967dfd235a8dc297c5ae24726216c1
			html+= '<div class="">';
			html+= '<div class="list-total  " style="min-height: 100px">';
            html+='<span class="badge this-blue" >No:'+e.number+'</span>';
            html+='<span class="badge this-red">Delivery:'+e.delivery+'</span>';
            html+='<button type="button" data-code="'+e.code+'" class="btn btn-success btn-sm "' +
				' onclick="checkBill(this)">Check Bill</button>&nbsp&nbsp';
            html+='<button type="button" data-code="'+e.code+'" class="btn btn-success btn-sm "' +
				' onclick="addMore(this)">Add More</button>';
				'</div>';
			html+='</div>';

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
		$('#total').text('USD：'+discount_usd_total+' Riel：'+ discount_riel_total);
		console.log(discount_usd_total);
	})
});

function addMore(e)
{
	var code = $(e).data('code');
	location.href ="/Main/index/"+code;
}
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
				var html='<tr class="this-metro-light-blue" style="border-top: 2px solid black; padding: 0px">';
				html+="<td colspan='2' style='font-weight: bold'>Grand Total  </td>";
				html+='<td colspan="4" style="font-weight: bold;" id="total">' +
					'<span class="this-right">'+result.body.data.info.total+' USD </span> ' +
					'<span class="this-right tt-riels this-hide-small">'+result.body.data.info.total_riel+' Riel</span></td>';
				html +="/<tr>";
				$('#bill-table tbody').append(html);
				$( "#dialog" ).removeClass('hidden');
				$('#bill-code').text(result.body.data.info.code);
				$('#bill-number').text(result.body.data.info.number);
				$('#bill-delivery').text(result.body.data.info.delivery);
				usdtoriel = result.body.data.usdtoriel;
				usd_total =result.body.data.info.total;
				riel_total =result.body.data.info.total_riel;
				$('#usdtoriel').text(' 1 USD  = '+result.body.data.usdtoriel+' Riel');
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
													console.log(result);
												
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
														//-------------------------------------------------------------------->Print
                                                        var divToPrint=document.getElementById('print_receipt');
                                                        var newWin=window.open('','Print-Window');
                                                        newWin.document.open();
                                                        newWin.document.write('<link rel="stylesheet" href="/css/sihalive-style.css" type="text/css" />');
                                                        newWin.document.write('<link rel="stylesheet" href="/css/css_printer.css" type="text/css" />');
                                                        newWin.document.write('<link rel="stylesheet" href="/css/jquery-ui.min.css" type="text/css" />');
                                                        newWin.document.write('<link rel="stylesheet" href="/css/bootstrap.css" type="text/css" />');
                                                        newWin.document.write('<link rel="stylesheet" href="/css/bootstrap.min.css" type="text/css" />');
                                                        newWin.document.write('' +
                                                            '<html>' +
															'<body onload="window.print()">'+
                                                            '<div class="this-left" > <img src="/images/icon/logo.png"class="img-responsive"' +
                                                            ' style="width:70px"></div>' +
                                                            ' <center>' +
                                                            '<div  style="margin-top:-60px;font-weight: bold"><h4>YOUR HEART</h4><p>បេះដូងអ្នក</p></div></center><br/>' +
															         +divToPrint.innerHTML+
															'</body>' +
															'</html>');
                                                        newWin.document.close();
                                                        setTimeout(function(){
                                                            newWin.close();
                                                        },10);
														//-------------------------------------------------------------------->end
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