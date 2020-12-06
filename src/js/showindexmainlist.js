mainlist=loadc("/src/lists/indexmain.html");

putblock("main", "mainsites");
putblock("contact", "contactways");
putblock("friends", "friends");
window.onload=function(){

	blog=loadc("https://blog.junbo.wang/wp-json/wp/v2/posts?per_page=3&page=1");
	getblogart();
		
}
function getblogart(){
	
	latestblogs.innerHTML="<center>看到此文字意味着似乎出现了一些问题。您可以尝试重新加载页面。</center>";
	result = JSON.parse(blog);
	latestblogs.innerHTML="";
	for (i=0; i<result.length; i++){
		
		nowonart=result[i];
		posttitle=nowonart.title.rendered;
		posttime=nowonart.modified.substring(0,10);
		postlink=nowonart.link.replace("http://junbosblog.ahy1.top/", "https://blog.junbo.wang/");
		postinner=nowonart.excerpt.rendered.toString().replace(/<p class="link-more"(.*)p>/, "");
		postfeaturedmediaid=nowonart.featured_media;
		
		
		if (postfeaturedmediaid != 0){
			
			postfeaturedmediajson=loadc("https://blog.junbo.wang/wp-json/wp/v2/media/"+postfeaturedmediaid);
			postfeaturedmediaresult = JSON.parse(postfeaturedmediajson);
			postfeaturedmedia=postfeaturedmediaresult.guid.rendered.replace("http://junbosblog.ahy1.top/", "https://blog.junbo.wang/");
			postfeaturedmediatag='<img class="blogimg" src="'+postfeaturedmedia+'">';
			
		}
		else postfeaturedmediatag="";
		posttitletag="<p class='blogtitle'>"+posttitle+"</p>";
		posttimetag='<svg t="1607239010531" class="web-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3477" width="16" height="16"><path d="M512 1024C229.229714 1024 0 794.770286 0 512S229.229714 0 512 0s512 229.229714 512 512-229.229714 512-512 512z m0-73.142857c242.358857 0 438.857143-196.498286 438.857143-438.857143S754.358857 73.142857 512 73.142857 73.142857 269.641143 73.142857 512s196.498286 438.857143 438.857143 438.857143z m36.571429-694.857143v256.365714l255.963428-0.365714 0.073143 73.142857-329.179429 0.475429V256h73.142858z" p-id="3478"></path></svg><p class="burl">'+posttime+'</p>';
		postinnertag='<div class="bintro blogintro">'+postinner+'</div>';
		
		latestblogs.innerHTML+='<div class="block-button button blog-button" onclick="window.open(\''+postlink+'\';"><div class="blog-button-main">'+posttitletag+posttimetag+postfeaturedmediatag+postinnertag+'</div><a class="link-more" href="'+postlink+'" target="blank">在 Junbo\'s Blog 继续阅读</a></div>';
	
		
		
	}
	
	
	
}
function putblock(type, output){
	
	var a=new RegExp("{"+type+":(\\S*)}","");
	inner=mainlist.match(a);
	things=inner[1].split(";;");
	document.getElementById(output).innerHTML="";
	for(t=0; ;t++){
		
		if (things[t]=="") break;
		
		single=things[t].split(",");
		if (type=="main"){
			document.getElementById(output).innerHTML+="<div class='block-button button'onclick='window.open(\""+single[3]+"\");'><img class='bimg' src='/src/img/website-icons/"+single[2]+".png'/><p class='btitle'>"+single[0]+"</p><svg t='1600844322044' class='web-icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='709' width='16' height='16'><path d='M512 64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z m-32 254.28c-42.98-3.6-83.97-14.09-121.75-30.77 30.6-80.53 75.81-135.21 121.75-153.02v183.79z m0 64.01V480H320.89c2.05-47.45 8.52-91.44 18.39-131.18 43.79 18.45 91.1 29.93 140.72 33.47zM480 544v97.71c-49.62 3.54-96.93 15.02-140.72 33.47-9.88-39.74-16.34-83.73-18.39-131.18H480z m0 161.72v183.79c-45.94-17.81-91.15-72.5-121.75-153.02 37.78-16.69 78.77-27.18 121.75-30.77z m64 0c42.98 3.6 83.97 14.09 121.75 30.77-30.6 80.53-75.81 135.22-121.75 153.02V705.72z m0-64.01V544h159.11c-2.05 47.45-8.51 91.44-18.39 131.18-43.79-18.46-91.1-29.93-140.72-33.47zM544 480v-97.71c49.62-3.54 96.93-15.02 140.72-33.47 9.88 39.74 16.34 83.73 18.39 131.18H544z m0-161.72V134.49c45.94 17.8 91.15 72.5 121.75 153.02-37.78 16.69-78.77 27.18-121.75 30.77z m128.96-154.45a384.634 384.634 0 0 1 92.13 60.11c-13.46 11.87-27.99 22.48-43.01 32.4-13.84-34.73-30.36-65.9-49.12-92.51z m-371.03 92.52c-15.02-9.93-29.55-20.53-43.01-32.4a384.332 384.332 0 0 1 92.13-60.11c-18.77 26.6-35.29 57.77-49.12 92.51z m-20.74 62.85c-13.48 49.33-21.94 103.51-24.26 160.8h-127.3c6.58-79.23 37.12-151.72 84.62-210.04 20.64 18.46 43.14 34.81 66.94 49.24zM256.92 544c2.32 57.29 10.78 111.47 24.26 160.8-23.8 14.43-46.29 30.78-66.95 49.24-47.5-58.32-78.04-130.81-84.62-210.04h127.31z m45.01 223.65c13.83 34.74 30.35 65.92 49.12 92.52a384.634 384.634 0 0 1-92.13-60.11c13.46-11.88 27.99-22.49 43.01-32.41z m420.14 0c15.02 9.93 29.55 20.53 43.01 32.4a384.332 384.332 0 0 1-92.13 60.11c18.77-26.6 35.29-57.77 49.12-92.51z m20.74-62.85c13.48-49.33 21.94-103.51 24.26-160.8h127.3c-6.58 79.23-37.12 151.72-84.62 210.04-20.64-18.46-43.14-34.81-66.94-49.24zM767.08 480c-2.32-57.29-10.78-111.47-24.26-160.8 23.8-14.43 46.29-30.78 66.95-49.24 47.5 58.32 78.04 130.81 84.62 210.04H767.08z' p-id='710'></path></svg><p class='burl'>"+single[1]+"</p><p class='bintro'>"+single[4]+"</p></div>";
		}
	
		else if((type=="contact") || (type=="friends")){
			document.getElementById(output).innerHTML+="<div class='button contact-button' title='"+single[1]+"'onclick='"+single[3]+"'><img class='contact-img' src='/src/img/contact-icons/"+single[0]+".PNG'>"+single[2]+"</img></div>";
		}
	}
}

