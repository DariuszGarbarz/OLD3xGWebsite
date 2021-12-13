function flash() {
	document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="860" height="680" id="index" align="middle">\n');
	document.write('<param name="movie" value="index.swf" />\n');
	document.write('<param name="quality" value="high" />\n');
	document.write('<embed src="index.swf" quality="high" bgcolor="#000000" width="860" height="680" name="index" align="middle" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />\n');
	document.write('</object>\n');
}