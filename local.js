$( document ).ready(function() {
	var main = document.getElementById('maincontain');
	
	var bg1 = document.getElementById('bg1');
	var bg2 = document.getElementById('bg2');
	var bg3 = document.getElementById('bg3');
	var bg4 = document.getElementById('bg4');
	
	var link1 = document.getElementById('link-0');
	var link2 = document.getElementById('link-1');
	var link3 = document.getElementById('link-2');
	//var link4 = document.getElementById('link-3');
	
	link1.style.transition = "all 0.25s";
	link2.style.transition = "all 0.25s";
	link3.style.transition = "all 0.25s";
	//link4.style.transition = "all 0.25s";
	
	$('#mainslide').carousel({
		interval: false,
		arrows: false
	});
	
	$('#pop').click(function() {
		move('#header h1').set('padding-top', '70px').ease('out').end();
		move('#maincontain').set('top', '50px').ease('out').end();
	});
	
	function checkBG(){
		if(bg1.classList.contains('seeThrough') == false){
			bg1.classList.add('seeThrough');
		}
		
		if(bg2.classList.contains('seeThrough') == false){
			bg2.classList.add('seeThrough');
		}
		
		if(bg3.classList.contains('seeThrough') == false){
			bg3.classList.add('seeThrough');
		}
		
		if(bg4.classList.contains('seeThrough') == false){
			bg4.classList.add('seeThrough');
		}
	}
	
	function checkSelect(){
		if(link1.classList.contains("select")){
			link1.classList.remove('select');
		}
		
		if(link2.classList.contains("select")){
			link2.classList.remove('select');
		}
		
		if(link3.classList.contains("select")){
			link3.classList.remove('select');
		}
		
		//if(link4.classList.contains("select")){
			//link4.classList.remove('select');
		//}
	}
	
	$('#link-0').click(function() {
		checkBG();
		checkSelect();
		bg1.classList.remove('seeThrough');
		link1.classList.add('select');
		
		$('#mainslide').carousel(0);
	});
	
	$('#link-1').click(function() {
		checkBG();
		checkSelect();
		bg2.classList.remove('seeThrough');
		link2.classList.add('select');
		
		$('#mainslide').carousel(1);
	});
	
	$('#link-2').click(function() {
		checkBG();
		checkSelect();
		bg3.classList.remove('seeThrough');
		link3.classList.add('select');
		
		$('#mainslide').carousel(2);
	});
	
	/*$('#link-3').click(function() {
		checkBG();
		checkSelect();
		bg4.classList.remove('seeThrough');
		link4.classList.add('select');
		
		$('#mainslide').carousel(3);
	});*/
	
	function switchTxt(link){
		if(link.classList.contains('select')){
			link.style.color = 'white';
			link.style.fontSize = '20px';
		}
		else{
			link.style.color = 'inherit';
			link.style.fontSize = 'inherit';
		}
	}
	
	$('#mainslide').on('slide.bs.carousel', function () {
		switchTxt(link1);
		switchTxt(link2);
		switchTxt(link3);
		//switchTxt(link4);
	});
});