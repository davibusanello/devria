<?php session_start(); 

require_once "conexao.php";
//Get como POST
$arrDados 						= $_REQUEST; 
$arrRetorno						= array(); 
$arrRetorno["success"]			= false;
$arrRetorno["erro"]["motivo"] 	= "Erro no usuario ou senha";
$_SESSION["idUsuario"]			= ""; 
$_SESSION["NmUsuario"]			= ""; 

if($arrDados["acao"]=="login")
{
	$strSQL = "SELECT idUsuario, nomUsuario FROM usuario WHERE 
			   DsEmail = '" . mysql_real_escape_string($arrDados["email"]) . "' 
			   AND 
			   Dssenha = '" . mysql_real_escape_string($arrDados["senha"]) . "' 	
			   ";    	
	$objRow = mysql_fetch_array(mysql_query($strSQL));

	if($objRow["idUsuario"]<>"")	
	{
		$arrRetorno["success"] = true; 
		$_SESSION["idUsuario"]			= $objRow["idUsuario"]; 
		$_SESSION["NmUsuario"]			= $objRow["nomUsuario"]; 
		unset($arrRetorno["erro"]);
	}
}

echo json_encode($arrRetorno); 
mysql_close(); 