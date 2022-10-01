const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBod = document.querySelector(".accordian_body");
const faqs = [];

faqData.forEach((faqData) => {
  function showFaq(p, button) {
    if (p.classList.contains("hidden")) {
      p.classList.remove("hidden");
      buttonvalue = true;
    } else {
      p.classList.add("hidden");
      buttonvalue = false;
    }
    btnStatusUpdate(buttonvalue, button);
  }

  function createFaq() {
    const faq = document.createElement("div");
    faq.classList.add("faq");

    const faqHeader = document.createElement("div");
    faqHeader.classList.add("faq_header");

    const h3 = document.createElement("h3");
    const questionNode = document.createTextNode(faqData.question);
    h3.appendChild(questionNode);
    faqHeader.appendChild(h3);

    const button = document.createElement("button");
    button.classList.add("show_btn");
    button.innerHTML = "+";
    faqHeader.appendChild(button);

    faq.appendChild(faqHeader);

    const p = document.createElement("p");
    p.classList.add("hidden");

    const ansNode = document.createTextNode(faqData.answer);
    p.appendChild(ansNode);
    faq.appendChild(p);

    button.addEventListener("click", () => {
      showFaq(p, button);
    });
    accordianBod.appendChild(faq);
  }

  function btnStatusUpdate(buttonvalue, button) {
    if (buttonvalue) {
      button.innerHTML = "-";
    } else {
      button.innerHTML = "+";
    }
  }
  createFaq();
});
