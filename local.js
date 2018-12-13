$( document ).ready(function() {
	var lName = "link-";
	
	var link1 = document.getElementById('link-0');
	var link2 = document.getElementById('link-1');
	var link3 = document.getElementById('link-2');
	
	link1.style.transition = "font-size 0.25s";
	link2.style.transition = "font-size 0.25s";
	link3.style.transition = "font-size 0.25s";
	
	$('#mainslide').carousel({
		interval: false,
		arrows: false
	});
	
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
	}
	
	$('#link-0').click(function() {
		checkSelect();
		link1.classList.add('select');
		
		$('#mainslide').carousel(0);
	});
	
	$('#link-1').click(function() {
		checkSelect();
		link2.classList.add('select');
		
		$('#mainslide').carousel(1);
	});
	
	$('#link-2').click(function() {
		checkSelect();
		link3.classList.add('select');
		
		$('#mainslide').carousel(2);
	});
	
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
	});
});