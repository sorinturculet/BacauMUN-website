 let moon=document.getElementById('moon');
  let doom=document.getElementById('doom');
   let background=document.getElementById('background');
window.addEventListener('scroll',function(){
 let value=window.scrollY;
	 doom.style.top= 50+value* 0.05+'%';
	 moon.style.top= 25+value* 0.07+'%';
	 moon.style.left= 30-value* 0.01+'%';
	 
})
window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});
}
