<?php 
session_start();

include("Header.php"); 

?>

<div id="ShwUserName">
	<p><?php echo $_SESSION['OFFI_FULLNAME'].' ('.$_SESSION['OFFI_CODE'].')'; ?></p>
</div>

<div id="MenuBar">
	<ul id="mainMenuMainbUl">
<!--===========================================================================================-->
	   <li class="mainMenuItem">xxxxxx
	   		<ul class="mainMenuSubUl">
				<li id="cusReg">xxxxxx</li>
				<li id="vwCus">xxxxxx</li>
			</ul>
	   </li>
<!--===========================================================================================-->
	   <li class="mainMenuItem">xxxxx
			<ul class="mainMenuSubUl">
				<li id="regItm">xxxxxx</li>
				<li id="vwItm">xxxxxx</li>
			</ul>
	   </li>
<!--===========================================================================================-->
	   <li class="mainMenuItem">xxxxxx
			<ul class="mainMenuSubUl">
				<li id="MchnItms">xxxxxx</li>
				<li id="Contr">xxxxxx</li>
			</ul>
	   </li>
	   
<!--===========================================================================================-->
	   <li class="mainMenuItem" id="rptLi">xxxxxx
	   		<ul class="mainMenuSubUl">
				<li id="BstCustRpt">xxxxxx</li>
				<li id="ContrArrRpt">xxxxxx</li>
				<li id="StokListRpt">xxxxxx</li>
			</ul>
	   </li>
<!--===========================================================================================-->
	</ul>
	<a href="#" id="LogButton" onClick="SysUnload()">Log Out</a>
</div>



<div id="container">

	
	
</div>
</body>
</html>