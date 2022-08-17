

function startApp() {
  
};

// Mobile Nav Function
function mobileMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const hamburger = document.querySelector('.hamburger')
  const mobileMenu = document.querySelector('.navGroup');


  hamburger.addEventListener('click', () => {
    menuBtn.classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
    // mobileMenu.style.display = 'block';

    if (mobileMenu.className === "navGroup") {
      mobileMenu.classList.toggle('visible');
    } else {
      mobileMenu.className = "navGroup";
    }

  })

}


export { mobileMenu };

// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //
