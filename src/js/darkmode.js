const toggleDarkmode = function() {
    const body = document.body;
    body.classList.toggle("o-darkmode");
   }
   const listenToggle = function() {
    const toggle = document.querySelector(".js-toggle");
    toggle.addEventListener('change', toggleDarkmode);
   }

   document.addEventListener("DOMContentLoaded", listenToggle);