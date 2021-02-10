 (function(modules) { 
 	var installedModules = {};
 	function __webpack_require__(moduleId) {
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
 		module.l = true;
 		return module.exports;
 	}
 	__webpack_require__.m = modules;
 	__webpack_require__.c = installedModules;
 	__webpack_require__.d = function(exports, name, getter) {
 		if(!__webpack_require__.o(exports, name)) {
 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
 		}
 	};
 	__webpack_require__.r = function(exports) {
 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 		}
 		Object.defineProperty(exports, '__esModule', { value: true });
 	};
 	__webpack_require__.t = function(value, mode) {
 		if(mode & 1) value = __webpack_require__(value);
 		if(mode & 8) return value;
 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
 		var ns = Object.create(null);
 		__webpack_require__.r(ns);
 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
 		return ns;
 	};
 	__webpack_require__.n = function(module) {
 		var getter = module && module.__esModule ?
 			function getDefault() { return module['default']; } :
 			function getModuleExports() { return module; };
 		__webpack_require__.d(getter, 'a', getter);
 		return getter;
 	};
 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
 	__webpack_require__.p = "";
 	return __webpack_require__(__webpack_require__.s = "./#src/js/script.js");
 })
 ({

 "./#src/js/script.js":
 (function(module, exports, __webpack_require__) {

"use strict";
eval("// Header - Burger menu (+)\n// About - Read more    (-)\n// Projects - See all   (-)\n// Reviews - Slider     (-)\n // import React, {Component} from 'react';\n// import ReactDOM from 'react-dom';\n// import Readmore from './readmore'\n\nfunction testWebP(callback) {\n  var webP = new Image();\n\n  webP.onload = webP.onerror = function () {\n    callback(webP.height == 2);\n  };\n\n  webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\n}\n\ntestWebP(function (support) {\n  if (support == true) {\n    document.querySelector('body').classList.add('webp');\n  } else {\n    document.querySelector('body').classList.add('no-webp');\n  }\n}); // Burger\n\nvar burgerTab = document.querySelector('.header__burger'),\n    menuList = document.querySelector('.header__menu'),\n    menuItem = document.querySelectorAll('.header__list-item');\n\nfunction rootMenu() {\n  menuList.classList.contains('active') ? menuList.classList.remove('active') : menuList.classList.add('active');\n}\n\nburgerTab.addEventListener('click', function (e) {\n  rootMenu();\n});\nmenuItem.forEach(function (i) {\n  i.addEventListener('click', function (e) {\n    rootMenu();\n  });\n}); // Read More\n\nvar aboutText = document.querySelector('.about__description>p'),\n    aboutBtn = document.querySelector('.about__description>button'),\n    aboutMaxWords = 48,\n    aboutFullText = aboutText.innerText,\n    aboutMainText = aboutFullText.split(\" \").slice(0, aboutMaxWords);\naboutShowMainText();\n\nfunction aboutShowMainText() {\n  aboutText.innerHTML = '';\n  aboutMainText.forEach(function (i) {\n    aboutText.insertAdjacentText('beforeend', \"\".concat(i, \" \"));\n  });\n}\n\nfunction aboutShowFullText() {\n  aboutText.innerHTML = '';\n  aboutText.insertAdjacentText('afterbegin', aboutFullText);\n}\n\naboutBtn.addEventListener('click', function (e) {\n  if (aboutBtn.classList.contains('active')) {\n    aboutShowMainText();\n    aboutBtn.classList.remove('active');\n  } else {\n    aboutShowFullText();\n    aboutBtn.classList.add('active');\n  }\n}); // Projects\n\nvar projectsItem = document.querySelectorAll('.projects__works')[1].querySelectorAll('.projects__element'),\n    projectsBtn = document.querySelector('.projects__all-works');\n\nfunction mainProjects() {\n  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;\n\n  for (var i = 0; i < value; i++) {\n    projectsItem[i].classList.add('active');\n  }\n}\n\nfunction allProjects() {\n  projectsItem.forEach(function (i) {\n    i.classList.add('active');\n  });\n}\n\nfunction hideProjects() {\n  projectsItem.forEach(function (i) {\n    i.classList.remove('active');\n  });\n}\n\nprojectsBtn.addEventListener('click', function (e) {\n  if (projectsBtn.classList.contains('active')) {\n    hideProjects();\n    mainProjects();\n    projectsBtn.innerHTML = 'See All';\n    projectsBtn.classList.remove('active');\n  } else {\n    hideProjects();\n    allProjects();\n    projectsBtn.innerHTML = 'Collapse';\n    projectsBtn.classList.add('active');\n  }\n}); // Reviews\n\nvar reviewsItem = document.querySelectorAll('.reviews__item'),\n    reviewsDot = document.querySelectorAll('.reviews__dot'),\n    reviewsSlider = document.querySelector('.reviews__slider'),\n    reviewsIndex = 0;\n\nfunction showReview(value) {\n  reviewsItem[value].classList.add('active');\n  reviewsDot[value].classList.add('active');\n}\n\nfunction hideReviews() {\n  reviewsItem.forEach(function (i) {\n    i.classList.remove('active');\n  });\n  reviewsDot.forEach(function (i) {\n    i.classList.remove('active');\n  });\n}\n\nsetInterval(function () {\n  reviewsIndex++;\n\n  if (reviewsIndex == reviewsItem.length) {\n    reviewsIndex = 0;\n  }\n\n  hideReviews();\n  showReview(reviewsIndex);\n}, 5000);\nreviewsSlider.addEventListener('click', function (e) {\n  for (var i = 0; i < reviewsDot.length; i++) {\n    if (e.target == reviewsDot[i]) {\n      reviewsIndex = i;\n      hideReviews();\n      showReview(reviewsIndex);\n    }\n  }\n}); // ReactDOM.render(\n//     <Readmore/>,\n//     document.getElementById('about__description')\n// );\n\n//# sourceURL=webpack:///./#src/js/script.js?");

 })

 });