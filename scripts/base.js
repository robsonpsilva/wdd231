import { courses } from './data.js';
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.comp_nav');
const listaItens = document.querySelectorAll('.comp_nav_a');
const container = document.getElementById("courses-container");
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

function filter(){
	courses.forEach(course => {
		const link = document.createElement("a");
		link.href = `https://www.example.com/${course.subject}${course.number}`;
		link.textContent = `${course.subject} ${course.number}`;
		link.className = "link-button";
		link.target = "_blank"; // Abre o link em nova aba
		container.appendChild(link);
	});
}

