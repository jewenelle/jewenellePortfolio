//selector
const btn = document.querySelector('.btn');
const but = document.getElementById('btn');
const cont = document.querySelector('.content');
const bod =document.querySelector('.body');
const showe = document.querySelector('.show');
const contactPop = document.querySelector('.contactMe');
const contactClick = document.querySelector('.contact');
const sl =document.querySelector('.serviceLink');
const blog = document.querySelector('.blog-link');

//contact header
let contactHead = document.getElementById('contacthead');
contactHead.addEventListener('click',conth);
function conth(event){
	event.preventDefault();
	document.querySelector('.window1').style.display='none'
	document.querySelector('.window2').style.display='none'
	contactPop.style.display = 'flex'



	
}
//contact hedaer end
//blog link

blog.addEventListener('click',blog_list);
function blog_list(event){
	event.preventDefault();
	alert('no blogpost yet');
}
//service link
sl.addEventListener('click',serLink);
function serLink(event){
	event.preventDefault();
	document.querySelector('.window1').style.display='none'
	document.querySelector('.window2').style.display='flex'
	contactPop.style.display = 'none'

}
//service link end
//contact popup
//read more button
const readMore = document.querySelector('.readMore1');
const readMore2 = document.querySelector('.readMore2');
readMore2.style.margin='0 0 0 40px'
readMore.addEventListener('click',read);
readMore2.addEventListener('click',read2);
let reading = true
function read(){
	if (reading) {

		document.querySelector('.window1').style.display='none'
		document.querySelector('.window2').style.display='flex'
		readMore2.innerText = 'Contact Me'	
	}

	
}

function read2(){
	if (reading) {
		document.querySelector('.window1').style.display='none'
		document.querySelector('.window2').style.display='none'
		contactPop.style.display = 'flex'
		reading=true
		document.querySelector('.submitContact').innerText = 'Send'	
	}

	
}
//add event listener
btn.addEventListener('click', button);
//but.addEventListener('click', buten);
//functions
	let buten = 1;
function button(){
	if (buten===1) {
		document.querySelector('.header').style.margin = '-370px 0 0 0'
		document.querySelector('.btn').style.border = '2px solid #fff'
		buten = 0;	
	}else if(buten===0){
		document.querySelector('.header').style.margin = '0 0 0 0'
		document.querySelector('.btn').style.margin = '0 0 0 0'
		document.querySelector('.btn').style.background = '#000'
		document.querySelector('.btn').style.border = 'none'
		btn.style.trasition = 'all ease-in-out .6s'
		buten = 1;	
	}
}
	 
