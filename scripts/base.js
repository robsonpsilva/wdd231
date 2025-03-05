const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.comp_nav');
const listaItens = document.querySelectorAll('.comp_nav_a');
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


document.addEventListener('DOMContentLoaded', () => {
    listaItens.forEach(item => {
        item.addEventListener('click', () => {
            tWayFinder(item)
        });
    });
});

function tWayFinder(item){
	listaItens.forEach(elem => {
		if (elem.textContent.trim() !== item.textContent.trim()) {
			elem.classList.remove('active');
		}
		else{
			elem.classList.add('active');
		}
	})
}