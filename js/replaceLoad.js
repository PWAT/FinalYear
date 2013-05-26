/*Taken fron javascriptkits.com and adapted for use*/
	
function loadjscssfile(filename, filetype){
	
	 if (filetype=="js"){ //if filename is a external JavaScript file
	  var fileref=document.createElement('script')
	  fileref.setAttribute("type","text/javascript")
	  fileref.setAttribute("src", filename)
	   }	 
	 if (typeof fileref!="undefined")
	  document.getElementsByTagName("head")[0].appendChild(fileref)
}	


function replacejscssfile(oldfilename, newfilename, filetype){
	 window.location.reload();
	 var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist using
	 var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
	 var allsuspects=document.getElementsByTagName(targetelement)
	 for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
	  if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(oldfilename)!=-1){
	   var newelement=createjscssfile(newfilename, filetype)
	   allsuspects[i].parentNode.replaceChild(newelement, allsuspects[i])
	  }
	 }
	 var buttons = document.getElementById("start");
	 buttons.style.backgroundColor = "whiteSmoke";
	 var buttonp = document.getElementById("pause");
	 buttonp.style.backgroundColor = "whiteSmoke";
	}

		