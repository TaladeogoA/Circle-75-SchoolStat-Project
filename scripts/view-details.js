// Teachers data
const instructors = [
  {
    name: "Tabitha Kavyu",
    age: 23,
    gender: "Female",
    state: "Nairobi",
    country: "Kenya",
    courseTaught: "Frontend",
    experience: "It was an amazing experience, Overall.",
    image: "Instructors/Tabitha-img.jpg",
  },

  {
    name: "Oluwasetemi Ojo",
    age: 29,
    gender: "Male",
    state: "Kingston",
    country: "Jamaica",
    courseTaught: "Frontend",
    experience: "A fullstack JavaScript/TypeScript(Node and React) engineer with good technical background, with 4 years+ worth of experience working at small to mid sized startups. I am driven by my love for building software products and have good leadership experience leading engineering teams. Have worked with cutting edge web technologies like React and GraphQL to build software products that are tested using JEST or Mocha by a Test Driven Development approach using Agile methodologies. Have worked with TypeScript, Nodejs, React, Gatsbyjs and Nextjs in production environment consistently. I write Python conveniently",
    image: "Instructors/Setemi-img.jpg",
  },

  {
    name: "John Ajeigbe",
    age: 'Info Not Provided',
    gender: "Male",
    state: "Oyo",
    country: "Nigeria",
    courseTaught: "HTML & CSS",
    experience: "A Software Engineer with more than 3 years of experience building groundbreaking digital products across a variety of industries.",
    image: "Instructors/John-img.jpg",
  },

  {
    name: "Daniel Adesoji",
    age: 25,
    gender: "Male",
    state: "Lagos",
    country: "Nigeria",
    courseTaught: "Javascript",
    experience: "Awesome Students",
    image: "Instructors/Daniel-img.jpg",
  },

  {
    name: "Jerry Uke",
    age: 'Info Not Provided',
    gender: "Male",
    state: "Lagos",
    country: "Nigeria",
    courseTaught: "None",
    experience: "I'm the Program Manager in charge of the School of Engineering and I've had a wonderful experience so far. It's been stressful definitely, but really worth it",
    image: "Instructors/Jerry-img.jpg",
  },
];


// For Teacher Page
const viewDetailsButtons = document.querySelectorAll('.view-details');
const modalBg = document.querySelector('.modal-bg');
const detailsContainer = document.querySelector('.container');
const closeButton = document.querySelector(' #close-modal');



for (let i = 0; i < viewDetailsButtons.length; i++) {
  viewDetailsButtons[i].onclick = (e) => {
    e.preventDefault();

    detailsContainer.style.display = 'flex';
    modalBg.style.display = 'flex';
    closeButton.style.display = 'block';

    detailsContainer.innerHTML = `
      <div class="name-img-div">
        <img src="${instructors[i].image}"></img>
        <h2>${instructors[i].name}</h2>
        <h4>${instructors[i].state}, ${instructors[i].country}</h4>
      </div>

      <div class="experience-div">
        <h4>Experience</h3>
          <p>${instructors[i].experience}</p>
      </div>

      <div class="age-gender-div">
        <div>
          <h4>Age</h4>
          <p>${instructors[i].age}</p>
        </div>

        <div>
          <h4>Gender</h4>
          <p>${instructors[i].gender}</p>
        </div>

        <div>
          <h4>Course Taught</h3>
            <p>${instructors[i].courseTaught}</p>
        </div>
      </div>
    `
  }
}

function closeModal() {
  detailsContainer.style.display = 'none';
  modalBg.style.display = 'none';
  closeButton.style.display = 'none';

};

closeButton.addEventListener("click", closeModal);

window.onclick = (e) => {
  if (e.target == modalBg) {
    closeModal();
  }
};
