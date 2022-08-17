// Students data
const students = [
  {
    name: "Oluwadamilare Peter Jegede",
    age: 31,
    about: 'Info Not Provided',
    track: "Frontend",
    location: "Oyo, Nigeria",
    gender: "Male",
    image: "students-images/Oluwadamilare-Jegede.jpg",
  },
  {
    name: "Ikenna Magnus Isaac",
    age: 30,
    about: "I am the best",
    track: "Frontend",
    location: "Lagos, Nigeria",
    gender: "Male",
    image: "students-images/isaac-ikenna.jpg",
  },
  {
    name: "Isaac Okanigbe",
    age: 23,
    about: "I love challenging myself to code. Everyday and it's a form of discipline I have      instilled in myself to get better in my programming journey. I also love connecting with other developers who can also help me grow, as the saying goes you always need a form of accountability partner",
    track: "Frontend",
    location: "Lagos, Nigeria",
    gender: "Male",
    image: "students-images/Isaac-Okanigbe.jpg",
  },
  {
    name: "Michael Adebanjo",
    age: 28,
    about: "I am spirited, a creative thinker and a doer",
    track: "Frontend",
    location: "Lagos, Nigeria",
    gender: "Male",
    image: "students-images/Michael-Adebanjo.jpg",
  },
  {
    name: "Jimoh Ameerah",
    age: 17,
    about: "I'm cool",
    track: "Frontend",
    location: "Lagos, Nigeria",
    gender: "Female",
    image: "students-images/Ameerah-Jimoh.jpg",
  },
  {
    name: "Adeyemo Ridwan",
    age: 28,
    about: 'Info Not Provided',
    track: "Frontend",
    location: "Oyo, Nigeria",
    gender: "Male",
    image: "students-images/Adeyemo-Ridwan.jpg",
  },
  {
    name: "Adeola Daramola",
    age: 'Info Not Provided',
    about: "I'm open to learning",
    track: "Cloud",
    location: "Ondo, Nigeria",
    gender: "Male",
    image: "students-images/daramola-adeola.jpg",
  },
  {
    name: "Timothy Achonu",
    age: 21,
    about: "I'm an honest Person",
    track: "Frontend",
    location: "Rivers, Nigeria",
    gender: "Male",
    image: "students-images/Timothy-Achonu.jpg",
  },
  {
    name: "Emmanuel Popoola",
    age: 22,
    about: "An aspiring frontend and cloud Engineer",
    track: "Cloud",
    location: "Ogun, Nigeria",
    gender: "Male",
    image: "students-images/Emmanuel-Popoola.jpg",
  },
  {
    name: "Omini Usang",
    age: 28,
    about: "I’m currently running a diploma course in software engineering with Altschool of Africa",
    track: "Frontend",
    location: "Port Harcourt, Nigeria",
    gender: "Male",
    image: "students-images/Omini-Williams.jpg",
  },
  {
    name: "Jamilah Abdulraheem",
    age: 33,
    about: "I am good",
    track: "Cloud",
    location: "Kaduna, Nigeria",
    gender: "Female",
    image: "students-images/Jamilah-Abdulraheem.jpg",
  },
  {
    name: "Mayowa Ojo",
    age: 22,
    about: "My circle is coming for your circle",
    track: "Cloud",
    location: "Oyo, Nigeria",
    gender: "Female",
    image: "students-images/Mayowa-Ojo.jpg",
  },
  {
    name: "Jaiyeoba Olufunmilayo ",
    age: 23,
    about: "An easy going girl who is passionate about learning",
    track: "Frontend",
    location: "Osun, Nigeria",
    gender: "Female",
    image: "students-images/Obiageli-Jaiyeoba.jpg",
  },
  {
    name: "Temitope Agbaje",
    age: 'Info Not Provided',
    about: "I am a good girl",
    track: "Backend",
    location: "Lagos, Nigeria",
    gender: "Female",
    image: "students-images/Temitope-Agbaje.jpg",
  },
  {
    name: "Olayinka Taiwo",
    age: 33,
    about: "Love coding",
    track: "Frontend",
    location: "Ogun, Nigeria",
    gender: "Male",
    image: "students-images/Olayinka-Taiwo.jpg",
  },
  {
    name: "Olumide Daniel Fakorede",
    age: 'Info Not Provided',
    about: "Creative mind with a passion for excellence",
    track: "Cloud",
    location: "Lagos, Nigeria",
    gender: "Male",
    image: "students-images/Olumide-D-Fakorede.jpg",
  },
  {
    name: "Daniel Kors",
    age: 'Info Not Provided',
    about: "Greatness found me",
    track: "Cloud",
    location: "Lagos, Nigeria",
    gender: "Male",
    image: "students-images/default-avatar.jpg",
  },
  {
    name: "Israel Zorzor",
    age: 'Info Not Provided',
    about: 'Info Not Provided',
    track: "Frontend",
    location: "Ogun, Nigeria",
    gender: "Male",
    image: "students-images/israel-zorzor.jpg",
  },
  {
    name: "Ifeanyi Ashi",
    age: 23,
    about: "'Info Not Provided'",
    track: "Backend",
    location: "Lagos, Nigeria",
    gender: "Other Orientation",
    image: "students-images/Ifeanyi-Nwadugbo.jpg",
  },
  {
    name: "Muritala Sodeeq Ishola",
    age: 30,
    about: "I'm a frontEnd engineer",
    track: "Frontend",
    location: "Abuja, Nigeria",
    gender: "Male",
    image: "students-images/Sideeq-Ishola.jpg",
  },
  {
    name: "Shittu Abdullateef Olamilekan",
    age: 22,
    about: "A civil Engineering student of Obafemi Awolowo University Ile-Ife.I’m currently taking front end engineering course with Altschool Africa.",
    track: "Frontend",
    location: "Osun, Nigeria",
    gender: "Male",
    image: "students-images/Papiilekzy-Adekola.jpg",
  },
  {
    name: "Oladeinde Ayodeji",
    age: 'Info Not Provided',
    about: "I like learning new concepts",
    track: "Cloud",
    location: "Lagos, Nigeria",
    gender: "Male",
    image: "students-images/Ayodeji-Oladeinde.jpg",
  },
  {
    name: "Olive Christopher",
    age: 23,
    about: " I am a frontend developer transitioning to backend development.",
    track: "Backend",
    location: "Lagos, Nigeria",
    gender: "Female",
    image: "students-images/Olive-Christopher.jpg",
  },
  {
    name: "Muhammad Ishaq",
    age: 18,
    about: "Starting a career in tech more of a rookie",
    track: "Frontend",
    location: "Nigeria",
    gender: "Male",
    image: "students-images/Muhammad-Adra.jpg",
  },
  {
    name: "Chukwurah Victor",
    age: 'Info Not Provided',
    about: "I love tech",
    track: "Backend",
    location: "Lagos, Nigeria",
    gender: "Male",
    image: "students-images/chukwurah-victor.jpg",
  },
  {
    name: "Dunbarin Fashoyin",
    age: 26,
    about: "I'm an individual who is ready to put in the work and effort to achieve a common goal with the tema. Efficiency and reliability are my core values.",
    track: "Frontend",
    location: "Lagos, Nigeria",
    gender: "Male",
    image: "students-images/Femi-Fashoyin.jpg",
  },
  {
    name: "Toyyib Bayo",
    age: 25,
    about: "I am young lad that is very much enthusiastic and anticipate for web development and all it entails.",
    track: "Frontend",
    location: "Oyo, Nigeria",
    gender: "Male",
    image: "students-images/Toyyib-bayo.jpg",
  },
  {
    name: "Okorie Daniel Ezichi",
    age: 23,
    about: "I'm a backend aspirant",
    track: "Backend",
    location: "Imo, Nigeria",
    gender: "Male",
    image: "students-images/Daniel-Ezichi.jpg",
  },
  {
    name: "Vicky Etim",
    age: 24,
    about: "I'm an aspiring frontend developer.",
    track: "Frontend",
    location: "Shenyang China",
    gender: "Female",
    image: "students-images/Victoria-Etim.jpg",
  },
  {
    name: "Asushei",
    age: 25,
    about: "I'm an easy going individual",
    track: "Cloud",
    location: "Lagos, Nigeria",
    gender: "Female",
    image: "students-images/default-avatar.jpg",
  },
  {
    name: "Lawal Ridwan",
    age: 20,
    about: 'Info Not Provided',
    track: "Frontend",
    location: "Lagos, Nigeria",
    gender: "Male",
    image: "students-images/Ridwan-Lawal.jpg",
  },
];



// For Students Page
const showInfoButtons = document.querySelectorAll('.view-info');
const aboutContainer = document.querySelector('.container');
const aboutBg = document.querySelector('.about-students');
const closeButton = document.querySelector(' #close-modal');


for (let i = 0; i < showInfoButtons.length; i++) {
  showInfoButtons[i].onclick = (e) => {
    e.preventDefault();

    aboutContainer.style.display = 'flex';
    aboutBg.style.display = 'flex';
    closeButton.style.display = 'block';

    aboutContainer.innerHTML = `
      <div class="name-img-div">
          <img src="${students[i].image}"></img>
          <h2>${students[i].name}</h2>
          <h4>${students[i].location}</h4>
        </div>

        <div class="about-div">
          <h4>About</h3>
            <p>${students[i].about}</p>
        </div>

        <div class="age-gender-div">
          <div>
            <h4>Age</h4>
            <p>${students[i].age}</p>
          </div>

          <div>
            <h4>Gender</h4>
            <p>${students[i].gender}</p>
          </div>

          <div>
            <h4>Track</h3>
              <p>${students[i].track}</p>
          </div>

        </div>
    `
  }
}

function closeModal() {
  aboutContainer.style.display = 'none';
  aboutBg.style.display = 'none';
  closeButton.style.display = 'none';
};

closeButton.addEventListener("click", closeModal);

window.onclick = (e) => {
  if (e.target == aboutBg) {
    closeModal();
  }
};

