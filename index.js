/****************************** DON'T ALTER ******************************/
function fadeOut(el) {
  el.classList.add("fade-up-out")
  setTimeout(() => {
    el.style.opacity = 0
    el.classList.remove("fade-up-out")
    el.style.pointerEvents = "none"
  }, FADEDURATION)
}

function fadeIn(el) {
  el.classList.add("fade-down-in")
  setTimeout(() => {
    el.style.opacity = 1
    el.classList.remove("fade-down-in")
    el.style.pointerEvents = "auto"
  }, FADEDURATION)
}

function transitionPage(el, groupOut, groupIn) {
  fadeAllOut(el, groupOut)
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}
/*************************************************************************/

function delayedFadeOut(div, range) {
  // Your solution here
  setTimeout(() => {
    fadeOut(div)
  }, range)
}

function delayedFadeIn(div, range) {
  // Your solution here
  setTimeout(() => {
    fadeIn(div)
  }, range)
}

function fadeAllOut(el, group) {
  // Your solution here
  group.forEach(div => {
    if(div === el){
      delayedFadeOut(div, LONGRANGE)
    } else {
      switch(div) {
        case group[0]:
          delayedFadeOut(div, 0);
        case group[1]:
          delayedFadeOut(div, MINDELAY);
        case group[2]:
          delayedFadeOut(div, MINDELAY+100);
        case group[3]:
          delayedFadeOut(div, MINDELAY+200);
      }
      setTimeout(() => {
        fadeOut(div)
      }, SHORTRANGE)
    }
  })
}

function fadeAllIn(group) {
  // Your solution here
  group.forEach(div => {
    switch(div) {
      case group[0]:
        delayedFadeIn(div, 0);
      case group[1]:
        delayedFadeIn(div, MINDELAY);
      case group[2]:
        delayedFadeIn(div, MINDELAY+100);
      case group[3]:
        delayedFadeIn(div, MINDELAY+200);
    }
  })
}
