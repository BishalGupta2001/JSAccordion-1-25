const data = [
  {
    id: "1",
    Question: "What is Accordion components?",
    Answer:
      "The accordion component is used to generate vertically stacked content in a page. It is intended to save vertical space by hiding content, reducing scrolling.",
  },
  {
    id: "2",
    Question: "why is Accordion components needed?",
    Answer:
      "The accordion component is used to generate vertically stacked content in a page. It is intended to save vertical space by hiding content, reducing scrolling.",
  },
  {
    id: "3",
    Question: "while  Accordion components renders what happens?",
    Answer:
      "In UI components Ionic Framework comes stock with a number of high-level UI components, including cards, lists, and tabs In material design Containment components hold information and actions, including other components like buttons, menus, or chips.",
  },
  {
    id: "4",
    Question: "What is Accordion only?",
    Answer:
      "The accordion component is used to generate vertically stacked content in a page. It is intended to save vertical space by hiding content, reducing scrolling.The accordion component is used to generate vertically stacked content in a page. It is intended to save vertical space by hiding content, reducing scrolling.",
  },
  {
    id: "5",
    Question: "What is Accordion components in the name of law?",
    Answer:
      "The accordion component is used to generate vertically stacked content in a page. It is intended to save vertical space by hiding content, reducing scrolling.",
  },
];

const accordionWrapper = document.querySelector(".accordion"); // it will take inside it if close i guess

function generateAccordianData() {
  accordionWrapper.innerHTML = data
    .map(
      (particularDataItem) => `
    <div class="accordianBox">
    <div class="accordianQuestion">
    <h3>${particularDataItem.Question}</h3>
    <i class="fa-solid fa-arrow-up"></i>
    </div>
    <div class="accordianAnswer">
    <p>${particularDataItem.Answer}</p>
    </div>
    </div>
      `
    )
    // why we are getting comma? because  we are creating this innerHTML with map so that's why
    .join(" "); // this for prevent from comma(,) that we are getting
}

generateAccordianData();

const getAccordionquestion = document.querySelectorAll(".accordianQuestion");
console.log(getAccordionquestion);

getAccordionquestion.forEach((currentQuestion) => {
  currentQuestion.addEventListener("click", (event) => {
    if (currentQuestion.classList.contains("active")) {
      currentQuestion.classList.remove("active");
    } else {
      let alreadyHavingActiveClass = document.querySelectorAll(".active");

      alreadyHavingActiveClass.forEach((currentActiveClass) => {
        currentActiveClass.classList.remove("active");
      });
      currentQuestion.classList.add("active");
    }
  });
});

// pahele  dekenge kis kis k pas active class hai  fir unme se remove kar denge
