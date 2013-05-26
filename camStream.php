<?php
include ('/layout.php');

include ('includes/memberAreaHeader.php');

//server timeout time
set_time_limit(5000);
?> 
<div class="sidebar">
	<!-- insert your sidebar items here -->
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
        <div id="videoContainer"></div>
		<div id="title">WebCamMesh</div>
		<div id="prompt" ></div>
		<div id="info">
			<span class="openBtn"></span>
			<span class="closeBtn"></span>
			<h1>WebCamMesh</h1>
			<p>Use the mouse to tilt and scroll wheel to zoom. Change parameters with the control panel.</p>
			<p>This demo projects webcam video onto a 3D Mesh. It creates a 3D depth map by mapping pixel brightness to Z-depth. Perlin noise is used for the ripple effect and CSS3 filters are used for color effects.</p>
			<p><a href="http://www.airtightinteractive.com/2012/08/webcammesh-demo/">More Info.</a></p>			
			<p>Built by <a href="http://airtight.cc">Felix Turner</a>. Follow: <a href="http://twitter.com/felixturner">@felixturner</a>.</p>
			<p class="fps"></p>
		</div>
		<script src="js/three.min.js"></script>
		<script src="js/dat.gui.min.js"></script>
		<script src="js/ImprovedNoise.js"></script>
		<script src="js/Stats.js"></script>
		<script src="js/main.js"></script>
	  </div>
<?php
include ('includes/membersFooter.php');
?>
