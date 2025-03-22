const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.comp_nav');
const listaItens = document.querySelectorAll('.comp_nav_a');

const cardsContainer = document.getElementById('display1');
const tableContainer = document.getElementById('display2');
const showCardsButton = document.getElementById('showCards');
const showTableButton = document.getElementById('showTable');
const companyTable = document.getElementById('companyTable');

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

// Função para exibir apenas os cards
showCardsButton.addEventListener('click', () => {
	cardsContainer.style.display = 'flex';
	tableContainer.style.display = 'none';
});

// Função para exibir apenas a tabela
showTableButton.addEventListener('click', () => {
	tableContainer.style.display = 'flex';
	cardsContainer.style.display = 'none';
});

function join_redirect() {
	window.location.href = "./directory.html"; // Substitua pelo URL da página desejada
}



