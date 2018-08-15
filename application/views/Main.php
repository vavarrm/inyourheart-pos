<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>

<!doctype html>
<html lang="en">
<?php
if (isset($_SESSION['id'])) {
    $id =$_SESSION['id'];
    $Acc =$_SESSION['acc'];
}
?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>IN YOUR HEART </title>

    <?php
    include ('layout/header.php');
    include('layout/style.php');
    ?>
</head>
<body  ng-app="myApp" ondrop="drop(event)" ondragenter="dragEnter(event)" ondragleave="dragLeave(event)" ondragover="allowDrop(event)" >


<section class="container-fluid  headerthis-card " style="height: 15%;padding: 0px">
    <!-- Sidebar -->
    <?php
    include('layout/aside.php');
    ?>
    <!-- Page Content -->
    <div id="main" class=" this-container this-padding-0 " style="margin-left:7%;">
        <div class="row">
            <div class="col-sm-12 this-padding-0">
                <div class=" col-xs-7 col-md-7 col-sm-7 this-metro-dark-red this-padding header-top this-border-bottom
                this-padding-0">
                    <div class=" this-bar-block this-animate-left " style="display:none;" id="mySidebar">
                            <button  class="this-bar-item this-metro-dark-red this-large">
                                <i class="fa fa-arrow-circle-left" style="font-size:24px" onclick="w3_close()">  <span> Category </span> </i>
                            </button>
                        <br/>
                           <div class="this-container" style="">
                               <?php include('category.php'); ?>
                           </div>
                     </div>

                    <div class="col-sm-12 this-margin-top " id="product">
                        <div  class="this-bar-item this-metro-dark-red this-large this-margin-left ">
                            <h4 style="font-size:20px;margin-top: -5px"> <i class="fa fa-navicon"></i> Product  </h4>
                        </div>
                        <div class="this-container this-padding-top this-margin-top">
                            <div class="this-container this-padding this-text-black ">
                                <div class="row">
									<div class="col-sm-6">
									  <select class="form-control" id="category-select">
									  </select>
									</div>
									<div class="col-sm-6">
									  <input type="number" max="999"  class="form-control" id="numberselect">
									</div>
									<br>
                                    <div class="col-sm-12">
                                        <div  id="prolist"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-5 col-md-5 col-sm-5 bg-white this-border-left this-right this-padding-0"
                     style="right:0;position: absolute">
                    <div class="this-container this-border-bottom this-padding-0 this-center " style="margin: 0px">

                        <div class="col-xs-4 col-md-4 col-sm-4 btn this-border-right pos-btn-pay  ">
                            <h4 class="this-bar-item"><i class="fa fa-qrcode w3-xxxlarge" style="font-size: 30px"></i></h4>
                        </div>
                        <a href="/customer">
                            <div class="col-xs-4 col-md-4 col-sm-4 btn  this-border-right pos-btn-pay">
                                <h4 class="col-xs-4 col-md-4 col-sm-4"><i class="fa fa-users w3-xxxlarge" style="font-size: 30px"></i></h4>
                            </div>
                        </a>
                        <a href="/create_customer">
                            <div class="col-xs-4 col-md-4 col-sm-4 btn  this-border-right pos-btn-pay ">
                                <h4 class="this-bar-item"><i class="fa fa-user-plus w3-xxxlarge" style="font-size: 30px"></i></h4>
                            </div>
                        </a>

                    </div>
                    <div class="this-container this-border-bottom this-pale-blue this-padding  " >
                        <div  class="this-large this-left this-padding ">
							NUMBER ：
							<select name="number">
							</select>
							<span id="result-number"></span>
							Delivery：
							<select name="delivery">
								<option value="no">No</option>
								<option value="yes">Yes</option>
							</select>
						</div>
                    </div>
                    <div class="this-container" style="min-height: 70%;height: 540px; overflow:scroll;padding: 0px">
                        <table class="table" >
                            <thead>
								<tr class="this-metro-dark-red">
									<th >Name</th>
									<th>QTY</th>
									<th >Price</th>
									<th >SubTotal</th>
									<th >Action</th>
								</tr>
							</thead>
							<tbody id="list">
                            </tbody>
						</table>
                    </div>
                    <div class="this-container this-border-top this-center " style="margin: 0px; height:100px;
                    padding: 0px;">
                        <div class="this-container this-border-bottom this-center this-padding this-metro-dark-red
                        this-text-white" style="margin: 0px;height:80px;position: relative; font-weight: bold">
                            <div class=" this-large col-sm-5">Total Usd： </div>
                            <div class="this-large col-sm-5" id="total">0.00</div>
                            <div class="this-large col-sm-5">Total Riel：</div>
                            <div class="this-large col-sm-5" id="total-khr">0</div>
                        </div>
                        <div class="this-container this-border-bottom this-padding-0 this-center" style="margin: 0px">

                            <div class="col-xs-4 col-md-4 col-sm-4 this-border-right">
                                <h4 class="this-bar-item"><i class="fa fa-check-square w3-xxxlarge" id="addOrder" style="font-size: 30px;cursor: pointer;"></i></h4>
                            </div>
                            <div class="col-xs-4 col-md-4 col-sm-4 this-border-right ">
                                <h4 class="this-bar-item"><i class="fa fa-money w3-xxxlarge" style="font-size: 30px"></i></h4>
                            </div>
                            <div class="col-xs-4 col-md-4 col-sm-4 this-border-right ">
                                <h4 class="this-bar-item"><i class="fa fa-print w3-xxxlarge" style="font-size: 30px"></i></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
	<div id="dialog-confirm" title="confirm" style="display:none;">
		<p>Confirm Cancel meal</p>
	</div>
	<div id="dialog-alert" title="alert" style="display:none;">
		<p></p>
	</div>
</section>

<!-- Latest compiled JavaScript -->

<script>

	var billjson = '<?php echo $billjson ?>';
	var menulist ={};
	var numberlist ={};
	var categorylist ={};
	var  Meals = new Array();
	var add_more = false;
	var  result_code ='<?php echo $code ?>';
	if(billjson!="")
	{
		billjson = JSON.parse(billjson);
	}
	if(typeof billjson =='object')
	{
		add_more = true;
	
		$.each(billjson.body.data.list, function(i,e){
			$('#list').append('' +
			  '<tr  style="font-weight: bold" class="this-metro-light-blue" id="titlerow'+e.me_id+'">' +
			  ' <td style="word-wrap:break-word;word-break:break-all">'+e.full_name+'</td>' +
			  ' <td  style="text-align: center"  ><input id="col-qty-'+e.me_id+'" data-id="'+e.me_id+'"  class="input-qty"  style="width:50px" type="number" min="1" step="1" value="'+e.quantity+'"></td>' +
			  ' <td style="text-align: center">'+e.unit_price+'</td>' +
			  ' <td style="text-align: center" id="col-subtotal-'+e.me_id+'" >'+parseFloat(e.quantity * e.unit_price)+'</td>' +
			  ' <td onclick="cancelItem('+e.id+','+"'"+e.code+"'"+')"  ><i class="fa fa-trash this-text-red" ' +
			  '  style="font-size:20px;cursor:pointer "' +
			  '</td>' +
			  ' </tr>'
			);
			Meals.push(
				{
					"me_id":e.me_id,
					"unit_price":e.unit_price,
					"original_price":e.original_price,
					"quantity":e.quantity,
					"id":e.id
				}
			);
		})
		$('#total').text(billjson.body.data.info.total_usd);
		$('#total-khr').text(billjson.body.data.info.total_riel);
		$('#result-number').text(billjson.body.data.info.number);
		$('select[name=number]').hide();
		$('select[name=delivery]').val(billjson.body.data.info.delivery).prop('disabled', true);
	}
</script>
<script src="/js/script.js"></script>
</body>
</html>
