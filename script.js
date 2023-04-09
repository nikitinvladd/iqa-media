"use strict"
		// Array of words
		var words = ["Your", "Company", "Is", "The Best", "by IQA Media"];

		// Counter variable to keep track of current word
		var counter = 0;

		function changeWord() {
			// Get the HTML element with the class "changing-word"
			var element = document.querySelector(".logo");

			// Fade out the element by changing its opacity to 0
			element.style.opacity = 0;

			// Wait for the transition to complete before changing the text content
			setTimeout(function() {
				// Set the text of the HTML element to the current word
				element.innerHTML = words[counter];

				// Fade in the element by changing its opacity to 1
				element.style.opacity = 1;

				// Increment the counter variable and reset it to 0 if it reaches the end of the array
				counter++;
				if (counter >= words.length) {
					counter = 0;
				}
			}, 500); // Wait for 0.5 seconds before changing the text content
		}

		// Call the changeWord function every 2 seconds using setInterval
		setInterval(changeWord, 2000);
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.page2');
for (let elm of elements) {
  observer.observe(elm);
}
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let optionss = { threshold: [0.5] };
let observerr = new IntersectionObserver(onEntry, options);
let elementss = document.querySelectorAll('.img_partners');
for (let elm of elementss) {
  observerr.observe(elm);
}
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let optionsss = { threshold: [0.5] };
let observerrr = new IntersectionObserver(onEntry, options);
let elementsss = document.querySelectorAll('.medium');
for (let elm of elementsss) {
  observerrr.observe(elm);
}


const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let optionsy = { threshold: [0.5] };
let observery = new IntersectionObserver(onEntry, optionsy);
let elementsy = document.querySelectorAll('.page5');
for (let elm of elementsy) {
  observery.observe(elm);
}

$(document).ready(function() {
  $(window).scroll(function() {
    $('.counter').each(function() {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var count = $(this).attr('data-count');
      if (elementPos < topOfWindow + $(window).height() - 30) {
        $(this).animate({
          countNum: count
        }, {
          duration: 3000,
          easing: 'linear',
          step: function() {
            $(this).text(Math.floor(this.countNum));
          },
          complete: function() {
            $(this).text(this.countNum);
          }
        });
      }
    });
  });
});
// const arr = ["Vlad", "Nikitin", "5492567"];

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} Данные регистрации ${arr}`);
// });
// function first() {
//     setTimeout(function() {
//         console.log(1);
//     },500);
// }
// function second() {
//     console.log(2);
// }
// first();
// second();

// function learnJS(lang, callback){
//     console.log(`Я учу: ${lang}`);
//     callback();
// }
// function done() {
//     console.log(`I skip this`)
// }
// learnJS(`JAVA Script`, done);


// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log(`Test`);
//     }
// };
// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);
// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options); 

// for (let key in options) {
//     console.log(`свойство ${key} имеет значение ${options[key]}`);
// }

// const arr = [1, 2, 3, 4, 5];
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });
// arr.pop();
// arr.push(10);
// console.log(arr); 

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// for (let value of arr) {
//     console.log(value);
// } 
// const str = prompt("", "")
// const product = str.split(", ");
// console.log(product);

// let a = 5,
//     b = a;

//     const obj = {
//         a:5,
//         b:1
//     };

// function copy(mainObj) {
//     let objCopy = {};
    
//     let key;
//     for (key in mainObj){
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a:2,
//     b:4,
//     c:{
//         x:7,
//         y:4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     k: 40,
//     j: 50
// };
// console.log(Object.assign(numbers, add));

// const numm = [`1, 5, 6`];
// console.log(numm)

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };

// function showExperience(plan) {
//  for(plan in personalPlanPeter) {
//     console.log(`данные: ${plan}`)
//  };
// }
// showExperience();




// function learnJS(lang, callback) {
//     console.log(`Я учу ${lang}`);
//     callback();
// }

// learnJS(`Java Script`, function(){
//     console.log(`Я прошел этот урок!`);
// });

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };

//     function showProgrammingLangs(plan) {
//     const {age} = plan;
//     const {languages} = plan.skills;
//     let str = `Мне ${age}лет и я владею языками: `;
//     languages.forEach(function(lang) {
//         str += `${lang.toUpperCase()} `;
//     });
//     return str;
// }
// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };

// function showExperience(plan) {
//     plan = personalPlanPeter;
//     const {exp} = plan.skills;
//     return exp;
// }

// console.log(exp);


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';

//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//     arr.forEach(member => {
//         str += `${member} `
//     });

//     return str;
// }

// showFamily(family);

// let str = "some";
// let strObj = new String(str);
// console.log(typeof(str));
// console.log(typeof(strObj));

// const auto = {
//     health: 400,
//     armor: 100
// };
// bmw.__proto__ = auto;
// Object.setPrototypeOf(bmw, auto);
// console.log(bmw)
// const bmw = Object.create(auto);




// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt('сколько фильмов вы уже посмотрели?', '')
    
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('сколько фильомв вы уже посмотрели?', '');
//         }
    
//     }, 
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', ''),
//                   b = prompt('На сколько вы оцениваете его?', '');

//                   if(a != null && b != null && a != '' && b != '' && a.length <50) {
//                     personalMovieDB.movies[a] = b;
//                     console.log('done');
//                 } else {
//                     console.log('error');
//                     i--;
//                 }
//         }
//     },
//     detectPersonalLevel: function() {
//         if(personalMovieDB.count < 10) {
//             console.log("Просмотренно довольно мало фильмов");
//         } else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
//             console.log('вы классный зритель');
//         } else if (personalMovieDB.count >=30) {
//             console.log("вы киноман");
//         }else {
//             console.log("Error Message");
//         }
//     },
//     showMyDB: function(hidden) {
//         if(!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//     if (personalMovieDB.privat){
//         personalMovieDB.privat = false;
//     }else{
//         personalMovieDB.privat = true;
//     }

//     },
//     writeYourGenres: function() {
//         for (let i =1; i<=3; i++) {
//             let genres = prompt(`вашь любимый жанр под номером ${i}`);

//             if (genres == '' || genres == null) {
//                 console.log('вы ввели некорректные данные или не ввели их вообще'),
//                 i--;
//             } else {
//                 personalMovieDB.genres[i - 1] = genres;
//             }

//         }
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
// };
