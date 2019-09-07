(function(){
	const productTitles = document.querySelectorAll('.type-container > .item');
	const productCategories = document.querySelectorAll('.list-categories > .item');
	let prevTargetId = 'indoor-camera';
	productTitles.forEach((title) => {
		title.onclick = function(e){
			const prevElement = document.getElementById(prevTargetId);
			if(prevElement) prevElement.setAttribute('class', 'item hide');
			const targetId = prevTargetId = e.currentTarget.getAttribute('data-target');
			const element = document.getElementById(targetId);
			element.setAttribute('class', 'item d-flex bounce-inUp-1-6');
		}
	});		
	productCategories.forEach(category => {
		category.onclick = (e) => {
			const prevElement = document.getElementById(prevTargetId);
			if(prevElement) prevElement.setAttribute('class', 'item hide');
			const targetId = prevTargetId = e.currentTarget.getAttribute('data-target');
			const element = document.getElementById(targetId);
			element.setAttribute('class', 'item d-flex bounce-inUp-1-6');
		}
	});
}());