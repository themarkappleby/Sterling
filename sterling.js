// format dropdown menus
function dropdown(){
	var menus = getElementsByClass('sterling');
	for (var a=0; a<menus.length; a++){

		// find all menus
		var menu = menus[a];

		// style all children anchors
		// remove anchor formatting for fixed width dropdowns
		var anchors = menu.getElementsByTagName('a');
		for(var i = 0; i < anchors.length; i++){
			var anchor = anchors[i];
			anchor.style.width = 'auto';
			anchor.style.whiteSpace = 'nowrap';
		}

		// style all children uls
		// position uls to accommodate variable widths
		var uls = menu.getElementsByTagName('ul');
		for(var i = 0; i < uls.length; i++){
			var ul = uls[i];
			
			// find parent ul of current ul
			var par = ul.parentNode.parentNode;

			// position first level dropdown
			if(par.className.indexOf('sterling') != -1){
				ul.style.top = par.offsetHeight+'px';
			}

			// position deeper dropdowns
			else{
				ul.style.marginLeft = par.offsetWidth+'px';
			}
		}

		// handle hover events for IE6 
		// sudo hover only supported on anchor tags in IE6
		if (/\bMSIE 6/.test(navigator.userAgent) && !window.opera) {
			var lis = menu.getElementsByTagName('li');
			for(var i = 0; i < lis.length; i++){
				var li = lis[i];
				li.onmouseover = function(){
					this.className += ' ie6-hover';
					var chi = this.getElementsByTagName('ul');
					chi = chi[0];
					if(chi!=undefined){
						chi.style.left = 'auto';
					}
				}
				li.onmouseout = function(){
					this.className = this.className.replace(/(?:^|\s)ie6-hover(?!\S)/g , '');
					var chi = this.getElementsByTagName('ul');
					chi = chi[0];
					if(chi!=undefined){
						chi.style.left = '-9999%';
					}

				}
			}
		}
	}
}

// helper function to get elements by class
function getElementsByClass(i){
	var finds = new Array();
	var elems = document.getElementsByTagName('*');
	for(var elm = 0; elm < elems.length; elm++){
		var classes = elems[elm].className;
		if(classes.indexOf(i) != -1){
			finds.push(elems[elm]);
		}
	}	
	return finds;
}

// run dropdown formatter when page loads
window.onload = dropdown;
