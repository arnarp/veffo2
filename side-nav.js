'use strict';

function setUpSideNavigation() {
  let menuButton = document.querySelector('#menu-button');
  let menuButtonIcons = menuButton.querySelectorAll('img');
  let sections = document.querySelectorAll('section, footer');
  let sideNav = document.querySelector('aside#side-nav');
  let sectionsVisible = true;
  let isInTransition = false;
  menuButton.addEventListener('click', function() {
    if (isInTransition) return;
    isInTransition = !isInTransition;
    toggleMenu();
    setTimeout(function() {
      isInTransition = !isInTransition;
    }, 1100);
  });

  function toggleMenu() {
    if (sectionsVisible) {
      setTimeout(toggleHiddenClass, 600, sections);
      setTimeout(toggleHiddenClass, 600, menuButtonIcons);
    } else {
      toggleHiddenClass(sections);
      toggleHiddenClass(menuButtonIcons);
    }
    setTimeout(function () {
      for (let i = 0; i < sections.length; i++) {
        sections.item(i).classList.toggle('transform-off-screen-left');
      }
    }, 30);
    sideNav.classList.toggle('visible');
    sectionsVisible = !sectionsVisible;
  }
  function toggleHiddenClass(elements) {
    for (let i = 0; i < elements.length; i++) {
      elements.item(i).classList.toggle('hide');
    }
  }
}

setUpSideNavigation();
