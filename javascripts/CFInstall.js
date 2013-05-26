    window.onload = function() {
      // You may want to place these lines inside an onload handler
      CFInstall.check({
        mode: "inline", // the default
        node: "prompt"
      });

      thingiurlbase = "javascripts";
      thingiview = new Thingiview("viewer");
      thingiview.setObjectColor('#C0D8F0');
      thingiview.initScene();
    }
    
    function getUrlVars() {
    	var vars = {};
    	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    		vars[key] = value;
    	});
    	return vars;
    }  