<?php
error_reporting(E_ALL);
ini_set('display_errors',1);
header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$db_conn= mysqli_connect("localhost","root", "", "grostore");
if($db_conn===false)
{
  die("ERROR: Could Not Connect".mysqli_connect_error());
}

$method = $_SERVER['REQUEST_METHOD'];
//echo "test----".$method; die;
switch($method)
{
  case "POST":
    if(isset($_FILES['pfile']))
    {      
      $ptitle= $_POST['ptitle'];
      $pprice= $_POST['pprice'];
      $pstock= $_POST['pstock'];
      $pfile= time().$_FILES['pfile']['name'];
      $pfile_temp= $_FILES['pfile']['tmp_name'];
      $destination= $_SERVER['DOCUMENT_ROOT'].'/grostore/images'."/".$pfile;

      $result= mysqli_query($db_conn,"INSERT INTO tbl_product (ptitle, pprice,pstockinitiale,pstock, pfile, pstatus)
      VALUES('$ptitle','$pprice','$pstock','$pstock','$pfile','1')");

      if($result)
      { 
        move_uploaded_file($pfile_temp, $destination);
        echo json_encode(["success"=>"Product Inserted Successfully"]);
         return;
      } else{
        echo json_encode(["success"=>"Product Not Inserted!"]);
         return;
      }

    } else{
      echo json_encode(["success"=>"Data not in Correct Format"]);
      return;
    }
      
  break;
  case "GET":
    $path = explode('/', $_SERVER['REQUEST_URI']);

    if (isset($path[4]) && is_numeric($path[4])) {
        $json_array = array();
        $userid = $path[4];
        $getuserrow = mysqli_query($db_conn, "SELECT * FROM tbl_product WHERE p_id='$userid' ");
         $userrow = mysqli_fetch_assoc($getuserrow);
        if ($userrow) {
            echo json_encode($userrow);
        } else {
            echo json_encode(["error" => "Product not found"]);
        }
    } else {//echo "return all Data"; die;
      $destination= $_SERVER['DOCUMENT_ROOT']."/grostore"."/";
      $allproduct= mysqli_query($db_conn, "SELECT * FROM tbl_product");
      if(mysqli_num_rows($allproduct) > 0)
      {
         while($row= mysqli_fetch_array($allproduct))
         {
          $json_array["productdata"][]= array("id"=>$row['p_id'], 
          "ptitle"=>$row["ptitle"],
          "pprice"=>$row["pprice"],
          "pstock"=>$row["pstock"],
          "pstockinitiale"=>$row["pstockinitiale"],
          "pimage"=>$row["pfile"],
          "status"=>$row["pstatus"]
         );
         }
         echo json_encode($json_array["productdata"]);
         return;
      } else {
       echo json_encode(["result"=>"please check the Data"]);
       return;
      }
    }
  break;


    case "PUT":
        $userUpdate= json_decode(file_get_contents("php://input"));

        $userid= $userUpdate->id;
         $ptitle= $userUpdate->ptitle;
         $pprice= $userUpdate->pprice;
         $pstock= $userUpdate->pstock;
         $pstockinitiale= $userUpdate->pstockinitiale;

         $updateData= mysqli_query($db_conn, "UPDATE tbl_product SET ptitle='$ptitle', pprice='$pprice', pstockinitiale='$pstockinitiale', pstock='$pstock' WHERE p_id='$userid'  ");
           if($updateData)
         {
           echo json_encode(["success"=>"User Record Update Successfully"]);
           return;
         } else {
             echo json_encode(["success"=>"Please Check the User Data!"]);
             return; 
         }
       // print_r($userUpdate); die;
  break;
  case "DELETE":
    $path = explode('/', $_SERVER['REQUEST_URI']);
    $product_id = $path[4] ?? null;

    if ($product_id && is_numeric($product_id)) {
        $result = mysqli_query($db_conn, "DELETE FROM tbl_product WHERE p_id='$product_id'");
        if ($result) {
            echo json_encode(["success" => "Product Deleted Successfully"]);
        } else {
            echo json_encode(["error" => "Failed to delete product"]);
        }
    } else {
        echo json_encode(["error" => "Invalid product ID"]);
    }
    break;


}


?>