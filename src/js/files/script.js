// Подключение функционала "Чертогов Фрилансера"
import {isMobile} from "./functions.js";
// Подключение списка активных модулей
import {flsModules} from "./modules.js";

// region Custom load file
let divLoad = document.querySelector('#loadFileDiv')
let inputLoad = document.querySelector('#loadFileInput')
if (divLoad && inputLoad) {
  divLoad.addEventListener("click", function (e) {
    inputLoad.click()
  });
  inputLoad.addEventListener('change', (e) => {
    if (inputLoad.files.length) {
      divLoad.innerHTML = inputLoad.files[0].name
    }
  })
}

// endregion

// region Choose Diktor
let filterBtns1 = document.querySelectorAll('.top-filter-chooseDiktor__btn')
if (filterBtns1.length) {
  filterBtns1.forEach(item => {
    item.addEventListener("click", function (e) {
      item.classList.toggle('_active')
    });
  })
}

let filterBtns2 = document.querySelectorAll('[data-filtercenter]')
if (filterBtns2.length) {
  filterBtns2.forEach(item => {
    item.addEventListener("click", function (e) {
      item.classList.toggle('_active')
    });
  })
}

let navigationBtns = document.querySelectorAll('.navigation-chooseDiktor__block')
if (navigationBtns.length) {
  navigationBtns.forEach(item => {
    item.addEventListener("click", function (e) {
      navigationBtns.forEach(btn => {
        btn.classList.remove('_active')
      })
      item.classList.add('_active')
    });
  })
}

let playBtns = document.querySelectorAll('.play-block-list-chooseDiktor__playBtn')
if (playBtns) {
  playBtns.forEach(playbtn => {
    let downloadbtn = playbtn.parentNode.querySelector('.play-block-list-chooseDiktor__downloadBtn')
    let audio = playbtn.parentNode.parentNode.querySelector('audio')

    playbtn.addEventListener("click", function (e) {
      if (audio.onplay) {
        audio.pause()
      } else {
        audio.play()
      }
    });

    if (downloadbtn) {
      console.log('download')
      downloadbtn.addEventListener("click", function (e) {
        const downloadFileA = document.createElement('a')
        downloadFileA.href = audio.src
        downloadFileA.download = audio.src
        // Гиперссылка target = "_ Blank" Чтобы увеличить Rel = "Noperner noreferrer" для блокировки уязвимости безопасности рыболовства. Если вы используете атрибут TARCE = «_ Blank» на ссылке, и не добавляйте свойство Rell = «NOPENER», то вы позволите пользователю разоблачить на очень простую рыболовную атаку. (Резюме)
        downloadFileA.rel = 'noopener noreferrer'
        downloadFileA.click()
      });
    }
  })
}
// endregion

// region moreBtn
let moreBtns = document.querySelectorAll('[data-moreBtn]')

if (moreBtns.length) {
  moreBtns.forEach(btn => {
    let moreBodies = btn.parentNode.parentNode.parentNode.querySelectorAll('[data-moreBody]')
    let bodyDisplay = null
    let count = 0

    moreBodies.forEach(a => {
      bodyDisplay = getComputedStyle(a).display
      a.style.cssText = "display:none;"
    })

    if (count >= moreBodies.length) {
      btn.style.cssText = "display:none;"
    } else {
      btn.addEventListener("click", function (e) {
        moreBodies[count].style.cssText = `display:${bodyDisplay};`
        count++
        if (count >= moreBodies.length) {
          btn.style.cssText = "display:none;"
        }
      });
    }
  })
}
// endregion

// region 4 Steps
let stepTitles = document.querySelectorAll('.block-steps-script__top')
let stepBodies = document.querySelectorAll('.block-steps-script__body')

if (stepTitles.length && stepBodies.length) {
  stepTitles.forEach((title, index) => {
    title.classList.remove('_black')

    title.addEventListener("click", function (e) {
      stepTitles.forEach((title, index) => {
        title.classList.remove('_black')
      })
      title.classList.add('_black')

      stepBodies.forEach(body => {
        let texts = body.querySelectorAll('p')
        if (texts.length) {
          texts.forEach(text => {
            text.hidden = true
          })
          texts[index].hidden = false
        }
      })
    });
  })

  stepTitles[0].classList.add('_black')
}

// endregion
