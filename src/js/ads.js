ad_types=[/* 正方形 */"7888411968", /* 横向 */"8287867219", ];
function showad(follow, divid, type){
	
	document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
	// document.write(document.cookie);
	if (getCookie("noad")==""){
	divid.innerHTML=("<script async src=\'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\'></script><ins class=\'adsbygoogle\'style=\'display:block\'data-ad-client=\'ca-pub-5639925822995109\'data-ad-slot=\'\'+ad_types[type]+\'\'data-ad-format=\'auto\'data-full-width-responsive=\'true\'></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>");
		return 0;
		
	}
	else{
		
		document.write("无广告");
		
	}
	
	
}

function closead(){
		
	document.cookie="noad=open; max-age=2626560";

	
}

function openad(){
		
	document.cookie="noad=close; max-age=0";

	
}

function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}
