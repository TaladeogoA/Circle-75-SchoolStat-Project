function setupTabs() {
  document.querySelectorAll('.tablinks').forEach(button => button.addEventListener('click', () => {
    const buttonsParent = document.querySelector('.tabs');
    const infoSection = document.querySelector('.info-section');
    const tabNumber = button.dataset.forTab;
    const tabToActivate = infoSection.querySelector(`.info-table[data-tab="${tabNumber}"]`);


    buttonsParent.querySelectorAll('.tablinks').forEach(button => {
      button.classList.remove("button--active");
    }); // remove active class from all tab buttons

    infoSection.querySelectorAll(".info-table").forEach(tab => {
      tab.classList.remove("tab-content--active");
    }); // remove active class from all tabs

    button.classList.add('button--active'); // add the active class to last clicked button

    tabToActivate.classList.add('tab-content--active'); // add active class to last clicked tab

  }))




}

document.addEventListener("DOMContentLoaded", () => setupTabs());