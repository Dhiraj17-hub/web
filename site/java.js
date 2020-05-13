const sectionAraay = document.querySelectorAll('section');
const sectionPos = {};

sectionAraay.forEach((section) {
	sectionPos[section.id] = section.offsetTop;
});

window.onscroll = {
	var scrollPostion = 
	document.documentElement.scrollTop || document.body.scrollTop;
	for(id in sectionPos){
		if (sectionPos[id]<= scrollPostion) {
			document.querySelector('.active').classlist.remove('active');
			document.querySelector(`a[herf*=${id}]`).classlist.add('active');
		}
	}
}


	var video = document.getElementById("myVideo");





