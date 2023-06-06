function checkCookies(){
	let cookieDate = localStorage.getItem('cookieDate');
	let cookieNotification = document.getElementById('cookie_notification');
	let cookieBtn = cookieNotification.querySelector('.cookie_accept');
		knopka2 = document.getElementById('knopka2');
	

	knopka2.addEventListener("click", function(){
		cookieNotification.classList.add("show");
	});

	cookieBtn.addEventListener("click", function(){
		cookieNotification.classList.remove("show");
	})
}
checkCookies();




const boxes = Array.from(document.querySelectorAll(".box")); // считываем все элементы аккордеона в массив

boxes.forEach((box) => {
  box.addEventListener("click", boxHandler); // при нажатии на бокс вызываем ф-ию boxHanlder
});

function boxHandler(e) {
  	e.preventDefault(); // сбрасываем стандартное поведение
	let currentBox = e.target.closest(".box"); // определяем текущий бокс
	let currentContent = e.target.nextElementSibling; // находим скрытый контент
	currentBox.classList.toggle("active"); // присваиваем ему активный класс
	if (currentBox.classList.contains("active")) {
		// если класс активный ..
		currentContent.style.maxHeight = currentContent.scrollHeight + "px"; // открываем контент
	} else {
		// в противном случае
		currentContent.style.maxHeight = 0; // скрываем контент
	}
}


filterSelection("all")
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("filterDiv");
	if (c == "all") c = "";
	// Добавить класс "show" (display:block) к отфильтрованным элементам и удалите класс "show" из элементов, которые не выбраны
	for (i = 0; i < x.length; i++) {
		w3RemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
	}
}

// Показать отфильтрованные элементы
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Скрыть элементы, которые не выбраны
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Добавить активный класс к текущей кнопке управления (выделите ее)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item");

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
		slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";
}

class ItcTabs {
	constructor(target, config) {
	  const defaultConfig = {};
	  this._config = Object.assign(defaultConfig, config);
	  this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
	  this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
	  this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
	  this._eventShow = new Event('tab.itc.change');
	  this._init();
	  this._events();
	}
	_init() {
	  this._elTabs.setAttribute('role', 'tablist');
	  this._elButtons.forEach((el, index) => {
		el.dataset.index = index;
		el.setAttribute('role', 'tab');
		this._elPanes[index].setAttribute('role', 'tabpanel');
	  });
	}
	show(elLinkTarget) {
	  const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
	  const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
	  const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
	  if (elLinkTarget === elLinkActive) {
		return;
	  }
	  elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
	  elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
	  elLinkTarget.classList.add('tabs__btn_active');
	  elPaneTarget.classList.add('tabs__pane_show');
	  this._elTabs.dispatchEvent(this._eventShow);
	  elLinkTarget.focus();
	}
	showByIndex(index) {
	  const elLinkTarget = this._elButtons[index];
	  elLinkTarget ? this.show(elLinkTarget) : null;
	};
	_events() {
	  this._elTabs.addEventListener('click', (e) => {
		const target = e.target.closest('.tabs__btn');
		if (target) {
		  e.preventDefault();
		  this.show(target);
		}
	  });
	}
  }
  new ItcTabs('.tabs');


  const hamb = document.querySelector("#hamb");
  const popup = document.querySelector("#popup");
  const body = document.body;
  
  // Клонируем меню, чтобы задать свои стили для мобильной версии
//   const menu = document.querySelector("#menu").cloneNode(1);
  
  // При клике на иконку hamb вызываем ф-ию hambHandler
  hamb.addEventListener("click", hambHandler);
  
  // Выполняем действия при клике ..
  function hambHandler(e) {
	e.preventDefault();
	// Переключаем стили элементов при клике
	popup.classList.toggle("open");
	hamb.classList.toggle("active");
	body.classList.toggle("noscroll");
	renderPopup();
  }
  
  // Здесь мы рендерим элементы в наш попап
  function renderPopup() {
	popup.appendChild(menu);
  }
  
  // Код для закрытия меню при нажатии на ссылку
  const links = Array.from(menu.children);
  
  // Для каждого элемента меню при клике вызываем ф-ию
  links.forEach((link) => {
	link.addEventListener("click", closeOnClick);
  });
  
  // Закрытие попапа при клике на меню
  function closeOnClick() {
	popup.classList.remove("open");
	hamb.classList.remove("active");
	body.classList.remove("noscroll");
  }


