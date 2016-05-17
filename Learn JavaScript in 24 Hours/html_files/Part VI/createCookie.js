function createCookie(name, value, days, path, domain, secure) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days*24*60*60*1000));
		var expires = date.toGMTString()
	}
	else var expires = "";
	cookieString = name + "-" + escape (value);
	if (expires) cookieString += "; expires=" + expires;
	if (path) cookieString += "; path=" + path;
	if (domain) cookieString += "; domain=" + domain;
	if (secure) cookieString += "; secure=" + secure;
	document.cookie = cookieString;
}