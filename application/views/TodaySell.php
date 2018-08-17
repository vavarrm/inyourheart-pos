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
    <style>
        .menu{
            width: 120px!important;
        }
        .btn{
            margin-top: 20px;
        }
    </style>
</head>
<body class="this-metro-light-blue">
<div class="container this-padding-0  " >
    <div class="row content this-padding-0"  style="border-radius: 10px;border: 5px solid #0099ff; ">
        <div class="this-container  this-padding-0 bg-header " style="border-bottom: 1px solid #0099ff; " >
            <img src="/images/icon/pos.png" class="img-responsive this-left" style="width: 45px"/>
            <span class="this-padding  this-left" style="font-weight: bold">SELL TODAYS </span>
            <div class="this-container this-padding this-right">
                <span> Admin </span>
                <span><i class="fa fa-user-circle-o" style="font-size:24px" ></i></span>
            </div>

            <div class="this-container this-right this-padding" style="margin-top: -20px">
                <a href="/app">
                    <div class="col-xs-3 col-md-3 col-sm-3 btn this-metro-dark-blue this-padding-0 menu "
                         style="border-radius: 10px">
                        <h5 >HOME <i class="fa fa-home w3-xxxlarge" style="font-size:
                        20px"></i></h5>
                    </div>
                </a>
                <a href="/bill">
                    <div class="col-xs-3 col-md-3 col-sm-3 btn this-metro-green  this-padding-0 menu"
                         style="border-radius: 10px">
                        <h5 >Customer <i class="fa fa-users w3-xxxlarge" style="font-size:
                        20px"></i></h5>
                    </div>
                </a>
                <a href="/sellreport">
                    <div class="col-xs-3 col-md-3 col-sm-3 btn this-metro-green  this-padding-0 menu"
                         style="border-radius: 10px">
                        <h5>Sell Report <i class="fa fa-calendar-check-o w3-xxxlarge" style="font-size:20px"></i></h5>
                    </div>
                </a>
                <a href="/login">
                    <div class="col-xs-3 col-md-3 col-sm-3 btn this-metro-red  this-padding-0 menu "
                         style="border-radius:
                    10px">
                        <h5 >Logout <i class="fa fa-sign-out w3-xxxlarge" style="font-size:
                        20px"></i></h5>
                    </div>
                </a>

            </div>

        </div>
        <div id="main" class=" this-container " >
            <div class="row">
                <div class="col-sm-12 this-center ">
                        <h4> Sell Todays Report  </h4>
                </div>
                   <div class="col-sm-12">
                      <div class="food-order-list-report">
                          <table class="table table-striped">
                              <thead>
                              <tr>
                                  <th>No </th>
                                  <th>Sub Total</th>
                                  <th>Discount</th>
                                  <th>Amount</th>
                                  <th> Action </th>
                                  <th>By </th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr class="this-text-blue-gray" style="font-weight: bold">
                                  <td>0</td>
                                  <td>0.0 $ </td>
                                  <td>0% </td>
                                  <td class="bg-warning">0.00$</td>
                                  <td><span class="badge this-blue">Detail </span></td>
                                  <td> user </td>
                              </tr>
                              <tr class="this-text-blue-gray" style="font-weight: bold">
                                  <td>0</td>
                                  <td>0.0 $ </td>
                                  <td>0% </td>
                                  <td class="bg-warning">0.00$</td>
                                  <td><span class="badge this-blue">Detail </span></td>
                                  <td> user </td>
                              </tr>
                              <tr class="this-text-blue-gray" style="font-weight: bold">
                                  <td>0</td>
                                  <td>0.0 $ </td>
                                  <td>0% </td>
                                  <td class="bg-warning">0.00$</td>
                                  <td><span class="badge this-blue">Detail </span></td>
                                  <td> user </td>
                              </tr>
                              <tr class="this-text-blue-gray" style="font-weight: bold">
                                  <td>0</td>
                                  <td>0.0 $ </td>
                                  <td>0% </td>
                                  <td class="bg-warning">0.00$</td>
                                  <td><span class="badge this-blue">Detail </span></td>
                                  <td> user </td>
                              </tr>
                              <tr class="this-text-blue-gray" style="font-weight: bold">
                                  <td>0</td>
                                  <td>0.0 $ </td>
                                  <td>0% </td>
                                  <td class="bg-warning">0.00$</td>
                                  <td><span class="badge this-blue">Detail </span></td>
                                  <td> user </td>
                              </tr>
                              <tr class="this-text-blue-gray" style="font-weight: bold">
                                  <td>0</td>
                                  <td>0.0 $ </td>
                                  <td>0% </td>
                                  <td class="bg-warning">0.00$</td>
                                  <td><span class="badge this-blue">Detail </span></td>
                                  <td> user </td>
                              </tr>
                              <tr class="this-text-blue-gray" style="font-weight: bold">
                                  <td>0</td>
                                  <td>0.0 $ </td>
                                  <td>0% </td>
                                  <td class="bg-warning">0.00$</td>
                                  <td><span class="badge this-blue">Detail </span></td>
                                  <td> user </td>
                              </tr>
                              <tr class="this-text-blue-gray" style="font-weight: bold">
                                  <td>0</td>
                                  <td>0.0 $ </td>
                                  <td>0% </td>
                                  <td class="bg-warning">0.00$</td>
                                  <td><span class="badge this-blue">Detail </span></td>
                                  <td> user </td>
                              </tr>
                              <tr class="this-text-blue-gray" style="font-weight: bold">
                                  <td>0</td>
                                  <td>0.0 $ </td>
                                  <td>0% </td>
                                  <td class="bg-warning">0.00$</td>
                                  <td><span class="badge this-blue">Detail </span></td>
                                  <td> user </td>
                              </tr>
                              <tr class="this-text-blue-gray" style="font-weight: bold">
                                  <td>0</td>
                                  <td>0.0 $ </td>
                                  <td>0% </td>
                                  <td class="bg-warning">0.00$</td>
                                  <td><span class="badge this-blue">Detail </span></td>
                                  <td> user </td>
                              </tr>
                              <tr class="this-text-blue-gray" style="font-weight: bold">
                                  <td>0</td>
                                  <td>0.0 $ </td>
                                  <td>0% </td>
                                  <td class="bg-warning">0.00$</td>
                                  <td><span class="badge this-blue">Detail </span></td>
                                  <td> user </td>
                              </tr>
                              <tr class="this-text-blue-gray" style="font-weight: bold">
                                  <td>0</td>
                                  <td>0.0 $ </td>
                                  <td>0% </td>
                                  <td class="bg-warning">0.00$</td>
                                  <td><span class="badge this-blue">Detail </span></td>
                                  <td> user </td>
                              </tr>
                              <tr class="this-text-blue-gray" style="font-weight: bold">
                                  <td>0</td>
                                  <td>0.0 $ </td>
                                  <td>0% </td>
                                  <td class="bg-warning">0.00$</td>
                                  <td><span class="badge this-blue">Detail </span></td>
                                  <td> user </td>
                              </tr>
                              <tr class="this-text-blue-gray" style="font-weight: bold">
                                  <td>0</td>
                                  <td>0.0 $ </td>
                                  <td>0% </td>
                                  <td class="bg-warning">0.00$</td>
                                  <td><span class="badge this-blue">Detail </span></td>
                                  <td> user </td>
                              </tr>
                              <tr class="this-text-blue-gray" style="font-weight: bold">
                                  <td>0</td>
                                  <td>0.0 $ </td>
                                  <td>0% </td>
                                  <td class="bg-warning">0.00$</td>
                                  <td><span class="badge this-blue">Detail </span></td>
                                  <td> user </td>
                              </tr>
                              <tr class="this-text-blue-gray" style="font-weight: bold">
                                  <td>0</td>
                                  <td>0.0 $ </td>
                                  <td>0% </td>
                                  <td class="bg-warning">0.00$</td>
                                  <td><span class="badge this-blue">Detail </span></td>
                                  <td> user </td>
                              </tr>
                              <tr class="this-text-blue-gray" style="font-weight: bold">
                                  <td>0</td>
                                  <td>0.0 $ </td>
                                  <td>0% </td>
                                  <td class="bg-warning">0.00$</td>
                                  <td><span class="badge this-blue">Detail </span></td>
                                  <td> user </td>
                              </tr>
                              <tr class="this-text-blue-gray" style="font-weight: bold">
                                  <td>0</td>
                                  <td>0.0 $ </td>
                                  <td>0% </td>
                                  <td class="bg-warning">0.00$</td>
                                  <td><span class="badge this-blue">Detail </span></td>
                                  <td> user </td>
                              </tr>
                              <tr class="this-text-blue-gray" style="font-weight: bold">
                                  <td>0</td>
                                  <td>0.0 $ </td>
                                  <td>0% </td>
                                  <td class="bg-warning">0.00$</td>
                                  <td><span class="badge this-blue">Detail </span></td>
                                  <td> user </td>
                              </tr>
                              <tr class="this-text-blue-gray" style="font-weight: bold">
                                  <td>0</td>
                                  <td>0.0 $ </td>
                                  <td>0% </td>
                                  <td class="bg-warning">0.00$</td>
                                  <td><span class="badge this-blue">Detail </span></td>
                                  <td> user </td>
                              </tr>
                              </tbody>
                          </table>
                      </div>
                       <div class="list-total">
                           <div class="this-container this-border-bottom this-center this-padding " style="margin: 0px;
                height:70px;position: relative; font-weight: bold">
                               <div class=" this-large col-sm-5">Total Usd： </div>
                               <div class="this-large col-sm-5" >0.00</div>
                               <div class="this-large col-sm-5">Total Riel：</div>
                               <div class="this-large col-sm-5" >0</div>
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
</div>
<script src="/js/customer.js"></script>

</body>
</html>
