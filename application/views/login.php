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
    <div class="row content"  style="border-radius: 10px;border: 5px solid #0099ff; ">
        <div class="col-sm-12 bg-header this-padding  this-border-bottom " style="height: 70px;">
            <img src="/images/icon/pos.png" class="img-responsive" style="width: 60px"/>
        </div>
        <div style="padding-top: 230px">
            <div class="col-xs-3 col-md-4 col-sm-4"></div>
            <div class="col-xs-6 col-md-4 col-sm-4 this-padding ">
                <div class="this-container bg-header this-margin this-card " style="border-radius: 5px">
                <form class="form" >
                    <div class="this-center this-padding-large">
                        <i class="fa fa-user-circle-o" style="font-size: 80px"></i>
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="text" placeholder="username " required >
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="text" placeholder="password  " required >
                    </div>
                    <div class="form-group">
                        <div class="col-sm-6 this-padding-0">
                            <button class="btn btn-info btn-block"> Cancel </button>
                        </div>
                        <div class="col-sm-6 this-padding-0">
                            <button class="btn btn-danger btn-block"> Login </button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>

    </div>
</div>

</body>
</html>
