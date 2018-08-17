<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>

<!doctype html>
<html lang="en">
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
<body class="this-metro-light-blue">
<div class="container this-padding-0 " >
    <div class="row content this-padding-0"  style="border-radius: 10px;border: 2px solid #0099ff;">
        <div class="col-sm-12  this-padding-0 bg-header " style="border-bottom: 1px solid #0099ff; " >
            <img src="/images/icon/pos.png" class="img-responsive this-left" style="width: 45px"/>
            <span class="this-left this-padding" style="font-weight: bold; font-size: 20px">POS YOUR HEART  </span>
            <div class="this-container this-padding this-left">
            </div>
            <div class="this-container this-padding this-right">
                <span> Admin </span>
                <span><i class="fa fa-user-circle-o" style="font-size:24px" ></i></span>
            </div>
        </div>
        <div class="col-sm-7 foodlist this-padding-0 this-white " >
            <div class="this-container bg-header this-padding " style="position:relative">
                <div class="this-left  ">
                    <select class="form-control  " id="category-select">
                    </select>
                </div>
                <div class="input-group this-right" style="width: 50%">
                    <span class="input-group-addon bg-header">Barcode: </span>
                    <input type="text" class="form-control" placeholder="#000..">
                     <span class="input-group-addon bg-header"><i class="fa fa-search"></i></span>
                  </div>
            </div>
            <br>
            <div class="col-sm-12 this-padding-0 pro_lists  ">
                <div  id="prolist"></div>
            </div>
        </div>
        <div class="col-sm-5 sidenav hidden-xs this-padding-0 ">
            <div class="cols-sm-12 this-padding-0 this-center " style="margin-top: 5px">
                <a href="/app">
                    <div class="col-xs-3 col-md-3 col-sm-3 btn this-metro-dark-blue this-padding-0 " style="border-radius: 10px">
                        <h5 class="this-bar-item">HOME <i class="fa fa-home w3-xxxlarge" style="font-size:
                        20px"></i></h5>
                    </div>
                </a>
                <a href="/bill">
                    <div class="col-xs-3 col-md-3 col-sm-3 btn this-metro-green  this-padding-0" style="border-radius: 10px">
                        <h5 class="this-bar-item">Customer <i class="fa fa-users w3-xxxlarge" style="font-size:
                        20px"></i></h5>
                    </div>
                </a>
                <a href="/sellreport">
                    <div class="col-xs-3 col-md-3 col-sm-3 btn this-metro-green  this-padding-0" style="border-radius: 10px">
                        <h5 class="this-bar-item">Sell Report <i class="fa fa-calendar-check-o w3-xxxlarge"
                                                             style="font-size:
                        20px"></i></h5>
                    </div>
                </a>
                <a href="/login">
                    <div class="col-xs-3 col-md-3 col-sm-3 btn this-metro-red  this-padding-0 " style="border-radius:
                    10px">
                        <h5 class="this-bar-item">Logout <i class="fa fa-sign-out w3-xxxlarge" style="font-size:
                        20px"></i></h5>
                    </div>
                </a>
            </div>
            <div class="this-container this-padding this-white" >
                <div  class="this-large this-left this-padding ">
                    NUMBER ：
                    <select name="number">
                    </select>
                    Delivery：
                    <select name="delivery ">
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>
            </div>
            <div class="this-container this-padding-0 food-order-list" style="">
                <table class="table table-striped list-order" >
                    <thead>
                    <tr class="bg-header this-card ">
                        <th >Name</th>
                        <th>QTY</th>
                        <th >Price</th>
                        <th >SubTotal</th>
                        <th >Action</th>
                    </tr>
                    </thead >
                    <tbody id="list">
                    </tbody>
                </table>
            </div>
            <div class="list-total">
                <div class="this-container this-border-bottom this-center this-padding " style="margin: 0px;
                height:70px;position: relative; font-weight: bold">
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
    <div id="dialog-confirm" title="confirm" style="display:none;">
        <p>Confirm Cancel meal</p>
    </div>
</div>
<?php
$handle = fopen("PRN", "w"); // note 1
fwrite($handle, 'text to printer'); // note 2
fclose($handle); // note 3
?>
<script>

    var billjson = '';
    var menulist ={};
    var numberlist ={};
    var categorylist ={};
    var  Meals = new Array();
    var add_more = false;
    var  result_code ='';
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
