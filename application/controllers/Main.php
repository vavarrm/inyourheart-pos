<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->helper('url');
        $this->load->library(array('session'));
    }


    public function index($code='')
	{
		
		if($code !="")
		{
			$data = array("code" => $code);                                                                    
			$data_string = json_encode($data);                                                                                   
			$ch = curl_init($_SERVER['API_HOST'].getBillForCode);
			curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
			curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_HTTPHEADER, array(
				'Content-Type: application/json',
			));
			$result = curl_exec($ch);
		}
        $cat=array(
            'cat'=>$data,
            'pro'=>$pro,
            'Noinv'=>$NoInvoice,
			'billjson'	=>$result
        );
		$this->load->view('App',$cat);
	}
	public function startOrder($inv){
        $pro=$this->product-> getProduct();
        $data=$this->category->getAll();
        $pro_ByInv=$this->order->getInv($inv);
        foreach ($pro_ByInv as $i){
         $order=$this->order->getOrderDetail_ByInvID($i->t_InvID);
        }
        $cat=array(
            'cat'=>$data,
            'pro'=>$pro,
            'inv'=>$pro_ByInv,
            'list'=>$order
        );
        $this->load->view('Main',$cat);
    }


	public function getProbyCat($catID){
        $pro=$this->product->getProductByCatId($catID);
        $data=$this->category->getAll();
        //$pro=$this->product-> getProduct();
        $cat=array(
            'cat'=>$data,
            'pro'=>$pro
        );
        $this->load->view('Main',$cat);
    }
    public function getProbyproID($proID){
        $pro=$this->product->getProductById($proID);
        $data=$this->category->getAll();
        //$pro=$this->product-> getProduct();
        $cat=array(
            'cat'=>$data,
            'pro'=>$pro
        );
        $this->load->view('Main',$cat);
    }

	public function login(){
	   // $data=$this->user->userLogin();
	    $this->load->view('login');
    }
    public function doLogin(){
        $acc = $this->security->xss_clean($this->input->post('t_Accountname'));
        $pwd = $this->security->xss_clean($this->input->post('t_Password'));
        $login=$this->user->userLogin($acc,$pwd);
        $user=$this->user->get_userById($acc);
        if($login!=false){


                $id=$user[0]->t_UerID;
                $acc=$user[0]->t_Accountname;
                $name=$user[0]->t_Username;

            $this->session->set_userdata('id',$id);
            $this->session->set_userdata('acc',$acc);
            $this->session->set_userdata('id',$name);
            $this->load->view('main');
        }else{
           redirect('/login');
        }
    }
    public function logout() {
        $sess_array = array(
            'username' => ''
        );
        $this->session->unset_userdata('logged_in', $sess_array);
        $data['message_display'] = 'Successfully Logout';
        $this->load->view('login_form', $data);
    }


    public function orderProduct()
    {
        header('Content-Type', 'application/json');
        $_POST = json_decode(trim(file_get_contents('php://input'), 'r'), true);
        if ($_GET['id']) {
            $id = $_GET['id'];
            $data = $this->product-> getProductById($id);
               $iv=$_GET['inv'];
            foreach ($data as $dt){
                $arr=array(
                    'temp_ProID'=>$dt->t_proID,
                    'temp_Qty'=>'1',
                    'temp_Price'=>'1'
                );
            }
            $odr=$this->order->Temp_order($arr);
            $tt=$this->order->Temp_Oreder_Total();
            $t=array(
                'tt'=>$tt
            );
            $encode_data = json_encode($odr);
            echo $encode_data;


        }
    }
    public function getProductbyCat()
    {
        header('Content-Type', 'application/json');
        $_POST = json_decode(trim(file_get_contents('php://input'), 'r'), true);
        if ($_GET['id']) {
            $id = $_GET['id'];
            $data = $this->product-> getProductByCatId($id);
            $encode_data = json_encode($data);
            echo $encode_data;
        }
    }
    public function customer(){
        // $pro=$this->product-> getProduct();
        // $data=$this->category->getAll();
        // $cus=$this->customer->index();
        $cat=array(
            'cat'=>$data,
            'pro'=>$pro,
            'cus'=>$cus
        );
        $this->load->view('customer',$cat);
    }
    public function create_customer(){
        $pro=$this->product-> getProduct();
        $data=$this->category->getAll();
        $cus=$this->customer->index();
        $cat=array(
            'cat'=>$data,
            'pro'=>$pro,
            'cus'=>$cus
        );
        $this->load->view('create_customer',$cat);
    }
    public function inv($invId){

        $pro=$this->product-> getProduct();
        $data=$this->category->getAll();
        $cat=array(
            'cat'=>$data,
            'pro'=>$pro
        );
        $this->load->view('Main',$cat);
    }

    public function app($x=null){
        $this->load->view('app');
    }
    public function bill(){
        $this->load->view('bill');
    }
    public function sellreport(){
        $this->load->view('TodaySell');
    }
























}
