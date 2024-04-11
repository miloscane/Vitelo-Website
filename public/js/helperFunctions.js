var animatedElements = document.getElementsByClassName("animatedSection");

function pageScroll(){
	var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
	for(var i=0;i<animatedElements.length;i++){
		if(animatedElements[i].getBoundingClientRect().top<vh-100){
			animatedElements[i].classList.remove("animated");
		}
	}
}