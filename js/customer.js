var ajaxloading = false;
var getNoCheckBillOrder =domain_url+"Api/Api/getNoCheckBillList";
var getBillByForCheckBill =domain_url+"Api/Api/getBillByForCheckBill";
var dialogOpen = false;
$( "#dialog" ).dialog();
$( "#dialog" ).dialog('close');
$( document ).ready(function() {

	$.post(getNoCheckBillOrder, function( r) {
		$.each(r.body.data,function (j,e)
		{
			var html =''; 
			html+='<div class="col-xs-4 col-md-2 col-sm-2 this-padding this-text-blackthis-center">';
			html+= '<div class="">';
			html+= '<img src="/images/icon/bill.png"class="img-responsive"/>';
			html+='</div>';
			html+='<button type="button" data-code="'+e.code+'" class="btn" onclick="checkBill(this)">Check Bill</button>';
			html+='</div>';

			$('#datalist').append(html);
		});
    },'json')
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
				console.log(result);
				$( "#dialog" ).dialog('close');
				$('#bill-table tbody tr').remove();
				$.each(result.body.data.list,function(i,e){
					var html ="";
					html +="<tr>";
					html +='<td >'+e.full_name+"</td>";
					html +='<td style="text-align: center;">'+e.unit_price+"</td>";
					html +='<td style="text-align: center;">'+"1</td>";
					html +='<td style="text-align: center;">'+"1</td>";
					html +="/<tr>";
					$('#bill-table tbody').append(html);
				})
				
				$( "#dialog" ).removeClass('hidden');
				$( "#dialog" ).dialog(
					{   
						height: 400,
						width: 800,
					}
				);
			}else
			{
				alert(result.message);
			}
			ajaxloading =false;
		  },
	});
	return false;
}