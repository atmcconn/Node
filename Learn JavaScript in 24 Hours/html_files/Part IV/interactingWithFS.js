function allowDrop (ev) {
	ev.preventDefault();
}

function drop (ev) {
	var files = ev.dataTransfer.files;
	for (var i = 0; i < files.length; i++) {
		var f = files[i]
		var pnode = document.createElement("p")
		var tnode = document.createTextNode(f.name + " (" + f.type + ") " + f.size + " bytes");
		pnode.appendChild(pnode);
	}
	ev.preventDefault();
}