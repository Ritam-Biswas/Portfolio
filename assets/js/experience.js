AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Directorate Of Student Affairs",
    cardImage: "assets/images/experience-page/dsa.jpg",
    place: "Technical Member",
    time: "(October, 2022 - present)",
    desp: "<li>Full Stack web development</li><li>Responsible for designing the UI as well as UX part of the official website of SRM Directorate of Student Affairs</li><li>Working to develop the front-end of the website using react</li>Managing the server side along with the database in the back-end</li>",
  },
  {
    title: "SRM Team Robocon",
    cardImage: "assets/images/experience-page/Robocon.jpg",
    place: "Web Developer",
    time: "(November, 2022 - present)",
    desp: "<li>Full Stack web development</li><li>Responsible for designing the UI as well as UX part of the official website of SRM Team Robocon</li><li>Working to develop the front-end of the website using react</li>Managing the server side along with the database in the back-end</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
