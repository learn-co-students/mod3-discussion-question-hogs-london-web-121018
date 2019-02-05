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
  delayedFadeOut(el, LONGRANGE)
  // let spreadGroup = [...group]
  // let index = spreadGroup.indexOf(spreadGroup.find(each => each === el))
  // let updatedArray = spreadGroup.splice(index, 1)
    group.forEach(div => {
    delayedFadeOut(div, SHORTRANGE)
  })
}

function fadeAllIn(group) {
  // Your solution here

  group.forEach(div => {
    delayedFadeIn(div, SHORTRANGE)
  })
}


document.addEventListener('click', (event) => {
  let allDivs = Array.from(document.querySelectorAll('div'));
  fadeAllOut(event.target, allDivs)
  fadeAllIn(allDivs)
})
