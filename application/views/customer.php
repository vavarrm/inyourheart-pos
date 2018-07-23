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
    <title>Main</title>

    <?php
    include ('layout/header.php');
    include('layout/style.php');
    ?>
</head>
<body>
<section class="container-fluid  headerthis-card " style="height: 15%;padding: 0px">
    <!-- Sidebar -->
    <?php
    include('layout/aside.php');
    ?>
    <!-- Page Content -->
    <div id="main" class=" this-container this-padding-0 " style="margin-left:7%;">
        <div class="row">
            <div class="col-sm-12 this-padding-0">
                <div class="col-sm-12 this-metro-dark-red this-padding header-top this-border-bottom
                this-padding-0">
                    <div class=" this-bar-block this-animate-left " style="display:none;" id="mySidebar">
                        <button  class="this-bar-item this-metro-dark-red this-large">
                            <i class="fa fa-arrow-circle-left" style="font-size:24px" onclick="w3_close()">  <span> Category </span> </i>
                        </button>
                        <br/>
                        <div class="this-container">
                            <div class="this-container this-padding this-text-black ">
                                <div class="row">
                                    <?php
                                    if (!empty($cat)){
                                        foreach ($cat as $c){
                                            ?>
                                            <a href="/category-<?php echo $c->t_catID  ?>">
                                                <div class="col-xs-4 col-md-2 col-sm-2 this-padding this-text-black this-center">
                                                    <div class="this-border">
                                                        <img src="<?php if($c->t_catImg==""){echo 'https://www.molitics.in/images/dummy_feed_image.png';}else{echo $c->t_catImg;}   ?>"
                                                             class="img-responsive "/>
                                                    </div>
                                                    <p> <?php echo $c->t_catName?></p>
                                                </div>
                                            </a>
                                            <?php
                                        }
                                    }
                                    ?>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 this-margin-top " id="product">
                        <div  class="this-bar-item this-metro-dark-red this-large this-margin-left ">
                            <h4 style="font-size:20px;margin-top: -5px">
                                <a href="/">
                                    <i class="fa fa-arrow-circle-left" style="font-size:24px" onclick="w3_close()"></i>
                                </a>
                                 Customer  </h4>
                        </div>
                        <div class="this-container this-padding-top this-margin-top">
                            <div class="this-container this-padding this-text-black ">
                                <div class="row" id="datalist">            
									                              
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
	<div id="dialog" title="Bill List" class="hidden">
		<label>Code：<span id="bill-code"></span></label><br>
		<label>Number：<span id="bill-number"></span></label><br>
		<label>Delivery：<span id="bill-delivery"></span></label>
		<table class="table  table-dark" id="bill-table">
			<thead >
			  <tr class="this-metro-dark-red">
				<th width="55%">name</th>
				<th style="text-align: center;" width="15%">unit price</th>
				<th style="text-align: center;" width="15%">qty</th>
				<th style="text-align: center;" width="15%">subtotal</th>
			  </tr>
			</thead>
			<tbody>
			</tbody>
		</table>
		<div class="row">
			<div class="col-md-6" >
				usd：<input type="radio"  value="usd" name="currency" checked />
				riel：<input type="radio"  value="riel" name="currency" />
				Discount：<select name="discount">
					<option value="1" selected>no</option>
					<option value="0.95" >5%</option>
					<option value="0.90" >10%</option>
					<option value="0.85" >15%</option>
					<option value="0.80" >20%</option>
				</select>
			</div>
		</div>
		<div class="row">
			<div class="col-md-3 payusd paydiv" >
				<label>pay usd</label> 
				<input class="form-control payinput"  value="0" name="payusd"  min="0" step="0.01" type="number" >
			</div>
			<div class="col-md-3 payriel paydiv" style="display:none;">
				<label>pay riel</label> 
				<input class="form-control payinput" value="0" name="payriel"  min="0" step="100" type="number"  >
			</div>
		</div>
		<div class="row">
			<br>
			<div class="col-md-6" >
				<label style="color:blue">change usd</label> 
				<span style="color:blue" id="change">0.00</span><br>
				<span style="color:red" id="riel-decimal"></span><br>
				<span style="color:red" id="usdtoriel"></span>
			</div>
		</div>
	</div>
	<div id="dialog-confirm" title="confirm" style="display:none;">
		<p>Confirm Check Bill</p>
	</div>
	<div id="dialog-alert" title="alert" style="display:none;">
		<p></p>
	</div>
</section>
<script src="/js/customer.js"></script>
</body>
</html>
