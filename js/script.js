const questions = document.querySelectorAll(".q-wrapper--main");
const arrow = document.querySelectorAll(".q-wrapper--main img");

questions.forEach((question) =>
  question.addEventListener("click", () => {
    if (question.parentNode.classList.contains("active")) {
      question.parentNode.classList.toggle("active");
    } else {
      questions.forEach((question) =>
        question.parentNode.classList.remove("active")
      );
      question.parentNode.classList.add("active");
    }
  })
);

const parent = arrow.parentNode;
console.log(parent);

// console.log(question);
// questions.forEach((q) => {
//   q.addEventListener("click", () => {
//     console.log(q.parentNode);
//   });
// });

// console.log(questions.parentNode);
