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
    <style>
        .form-control{
            text-align: right!important;
        }
    </style>
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
            <div id="print_receipt" ng-app="myApp" ng-controller="myCtrl" >
                <div class="header_prints">
                    <span>Code：<span id="bill-code"></span></span><br>
                    <span>Number：<span id="bill-number"></span></span><br>
                    <span>Delivery：<span id="bill-delivery"></span></span>
                    <table class="table  table-dark" id="bill-table">
                        <thead >
                        <tr class="this-metro-dark-red">
                            <th width="55%">Name</th>
                            <th style="text-align: center;" width="15%">Price</th>
                            <th style="text-align: center;" width="15%">QTY</th>
                            <th style="text-align: center;" width="15%">SubTotal</th>
                        </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                    <div class="row  " style="margin-top: -10px" >
                        <div class="col-sm-12 this-padding-0" style="font-weight: bold">
                            <div class="col-xs-10 col-md-10 "><label class="this-left"> Discount </label>
                            </div>
                            <div class="col-xs-2 col-md-2  "> <label class="this-right">
                                    <div class="this-hide-large this-hide-medium" style="font-size: 17px"  id="txtdis"></div>
                                    <select class="form-control this-hide-small" name="discount" id="dis">
                                        <option value="1" selected>no</option>
                                        <option value="0.95" >5%</option>
                                        <option value="0.90" >10%</option>
                                        <option value="0.85" >15%</option>
                                        <option value="0.80" >20%</option>
                                    </select> </label>  </div>
                        </div>
                        <div class="col-sm-12 this-padding-0 " style="font-weight: bold">
                            <div class="col-xs-10 col-md-10 this-left this-hide-small" style="font-weight: bold" >
                                USD ：<input type="radio"  value="usd" name="currency" checked />
                                Riel ：<input type="radio"  value="riel" name="currency" />
                            </div>
                            <div class="col-md-12 payusd paydiv this-padding-0" >

                                <div class="col-xs-9 col-sm-9"><label >Cash Receive (USD) </label></div>
                                <div class="col-xs-3 col-sm-3 ">
                                    <div class="this-right this-hide-large this-hide-medium " style="font-size: 17px">{{txtpayinputusd}}</div>
                                    <input class="form-control payinput this-right this-hide-small "   name="payusd"
                                           min="0"
                                           ng-model="txtpayinputusd"
                                           step="0.01"
                                           type="number"  
										   stringToNumber
									>
                                </div>
                            </div>
                            <div class="col-md-12 payriel paydiv this-padding-0" style="display:none;">
                                <div class="col-xs-9 col-sm-9"><label >Cash Receive (Riel)  </label></div>
                                <div class="col-xs-3 col-sm-3 ">
                                    <div class="this-right this-hide-large this-hide-medium " style="font-size: 17px" >{{txtpayinputreil}}</div>
                                    <input class="form-control payinput this-border-bottom this-hide-small "
                                           value="0" name="payriel"
                                           min="0" step="100"
                                           ng-model="txtpayinputreil"
                                           type="number" style="border: none;border-radius: 0px!important;" stringToNumber >
                                </div>
                                <span id="payRiel"></span>
                            </div>
                        </div>
                        <div class="col-sm-12 this-padding-0 " >
                            <div class="col-md-10" >
                                <label class="this-text-black this-left">Cash Return (USD) : </label>
                            </div>
                            <div class="col-md-2">
                                <label class="this-text-black this-right" style="font-size: 17px"  id="change">0.00</label><br>
                            </div>
                            <div class="col-md-12 this-hide-small  ">
                                <label class="this-text-black this-right" id="riel-decimal"> </label><br>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-7 col-sm-8 col-md-8 ">
                            <label class="this-left">Exchange :  </label>
                        </div>
                        <div class="col-xs-5 col-sm-4 col-md-4">
                            <label class="this-text-black this-right" id="usdtoriel"></label>
                        </div>

                        <div class="col-xs-12 col-md-12 col this-center this-margin-top" style="font-weight: bold">
                            THANK YOU!
                        </div>
                    </div>

                </div>
            </div>
        <div class="col-sm-12">
            <div id="printBill"  class="btn btn-danger"> Print </div>
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
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<script>
    $('#txtdis').append('0.0');
    $('#dis').on('change', function() {
        $('#txtdis').append(this.value)
    });
    var app = angular.module('myApp', []);
    app.controller('myCtrl', function($scope) {
        $scope.txtpayinputusd = 0.0;
        $scope.txtpayinputreil = 0.0;
    });
	app.directive('stringToNumber', function() {
	  return {
		require: 'ngModel',
		link: function(scope, element, attrs, ngModel) {
		  ngModel.$parsers.push(function(value) {
			return '' + value;
		  });
		  ngModel.$formatters.push(function(value) {
			return parseFloat(value);
		  });
		}
	  };
	});

</script>
</body>
</html>
