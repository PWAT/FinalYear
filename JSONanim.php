<?php
include ('/layout.php');

include ('includes/memberAreaHeader.php');

//server timeout time
set_time_limit(5000);
?> 
<script type="text/javascript" src="js/three.min.js"></script>
<div class="sidebar">
<h3>Log In</h3>
<div id="boxes">

<?php
	
	include ('/boxes/member_box.php');	
						 
	include ('/boxes/box_admin_links.php');
						 
	//include ('/boxes/box_main_links.php');
?>
</div>
</div>	
<div id="content">
	<div class="navbar">
			<div class="navbar-inner">
				<div class="container">
					<span class="btn-navheader">Timeline Demo - Horse</span>
					<a href="#" class="btn reset btn-navbar" style="display: block;" tabindex="1" >Reset</a>
					<a href="#" class="btn pause btn-navbar" style="display: block;" tabindex="2" >Pause</a>
					<a href="#" class="btn start btn-navbar" style="display: block;" tabindex="3" >Start</a>
				</div>
			</div>
		</div>
	<script type="text/javascript" src="js/horseTween.js"></script>
	
</div>

