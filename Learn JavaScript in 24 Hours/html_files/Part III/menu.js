function makeMenu(){
	// Get the collection of <h2> elements
	var h2s = document.getElementsByTagName("h2");
	
	// Create the <div container to hold the menu; inside the <div>, there'll be a <ul> list element to contain the menu items
	var menu = document.createElement("div");
	var menuUl = document.createElement("ul");
	menu.appendChild(menuUl);
	
	// Cycle through the collection of <h2> headings and perform the following tasks:
	for (var i = 0; i < h2s.length; i++) {
		
		// Collect the content of the heading's child text node
		var itemText = h2s[i].childNodes[0].nodeValue;
		
		// Create a new list item element for the menu
		var menuLi = document.createElement("li");
		
		// add that to the menu
		menuUl.appendChild(menuLi);
		
		// Each list item must contain a link to an anchor located next to the heading to which the menu item points to
		var menuLiA = document.createElement("a");
		menuLiA = menuLi.appendChild(menuLiA);
		
		// Set an appropriate href attribute of the link
		// These links have the form <a href="#itemX">[Title Text]</a> where X is the index number of the menu item
		menuLiA.setAttribute("href", "#item" + i);
		
		var menuText = document.createTextNode(itemText);
		menuLiA.appendChild(menuText);
		
		// Create a matching anchor element just before each <h2> heading
		var anc = document.createElement("a");
		anc.setAttribute("name", "item" + i);
		document.body.insertBefore(anc, h2s[i])
	}
	// When all that has been completed for each <h2> heading, add the new menu to the page
	document.body.insertBefore(menu, document.body.firstChild);
}