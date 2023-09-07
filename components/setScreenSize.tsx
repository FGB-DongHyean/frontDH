import React, { useEffect } from 'react';

export default function SetScreenSize() {
  useEffect(function setSize() {
    function setScreenSize() {
      let vw = window.innerWidth * 0.01;
      let vh = window.innerHeight * 0.01;

      document.documentElement.style.setProperty('--vw', `${vw}px`);
      document.documentElement.style.setProperty('--vh', `${vh}px`); //"--vh"라는 속성으로 정의해준다.
    }

    window.addEventListener('resize', () => setScreenSize());
  });

  return null;
}

/*
function setScreenSize() {
    let vw = window.innerWidth * 0.01;
    let vh = window.innerHeight * 0.01;
    
    document.documentElement.style.setProperty('--vw', `${vw}px`);
    document.documentElement.style.setProperty('--vh', `${vh}px`); //"--vh"라는 속성으로 정의해준다.
}
*/
