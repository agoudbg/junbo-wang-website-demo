// 相信我 这个页面绝对会重写
settings=[["showandroidbutton","showandroid"], ["live2dbutton", "live2d"], ["closeadbutton", "noad"], ];

function loadsettings(){
	
	for (i=0; i<settings.length; i++){
		
		sta=getCookie(settings[i][1]);
		if (sta==""){
			
			document.getElementById(settings[i][0]).checked=false;
			
		}
		else document.getElementById(settings[i][0]).checked=true;
		
	}
	
	
}

function changesetting(name){
		
	for (i=0; i<settings.length; i++){
		
		if (name==settings[i][0]) break;
		
	}
	
	changeto=document.getElementById(settings[i][0]).checked;
	
	
	switch(settings[i][0]){
		
		case "showandroidbutton":
		
			
			
			break;	
		
		case "showandroidbutton":
		
			
			
			break;
		
		case "closeadbutton":
			
			if (changeto==false){
				openad();
			return 0;}
			else{
				closead();
			return 80;}
			break;
		
		default:
		
			break;
			
	}
	
}