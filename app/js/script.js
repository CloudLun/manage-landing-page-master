const overlay = document.querySelector(".overlay");
const mobileNavToggle = document.querySelector(".mobile-toggle");
const mobileNavigation = document.querySelector(".mobile-navigation");
const mobileAvatar = document.querySelector("#mobile-avatar");
const mobileName = document.querySelector("#mobile-name");
const mobileFeedback = document.querySelector("#mobile-feedback");
const feedbackOrder = document.querySelectorAll(".order");
const mobileFeedbackPanel = document.querySelector('.feedback__mobile-panel')
const desktopFeedbackPanel = document.querySelector(".feedback__desktop-panel");
const emailInput = document.querySelector("#subscriptions");
const goBtn = document.querySelector(".go");
const reminder = document.querySelector(".reminder");

const data = [
  {
    id: 0,
    avatar: "./images/avatar-anisha.png",
    name: "Anisha Li",
    feedback:
      "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
  },
  {
    id: 1,
    avatar: "./images/avatar-ali.png",
    name: "Ali Bravo",
    feedback:
      "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
  },
  {
    id: 2,
    avatar: "./images/avatar-richard.png",
    name: "Richard Watts",
    feedback:
      "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
  },
  {
    id: 3,
    avatar: "./images/avatar-shanai.png",
    name: "Shanai Gough",
    feedback:
      "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
  },
];

// HEADER
// Navigation Toggle
mobileNavToggle.addEventListener("click", () => {
  const visibility = mobileNavigation.getAttribute("data-visible");
  if (visibility === "false") {
    mobileNavigation.setAttribute("data-visible", true);
    overlay.setAttribute("data-visible", true);
    mobileNavToggle.setAttribute("aria-expanded", true);
  } else {
    mobileNavigation.setAttribute("data-visible", false);
    overlay.setAttribute("data-visible", false);
    mobileNavToggle.setAttribute("aria-expanded", false);
  }
});

// FEEDBACK
// Mobile Customer Feedback Gallery
let id = 0;
let feedbackOrderList = [];
feedbackOrder.forEach((order) => feedbackOrderList.push(order));
function mobileGallery() {
  mobileAvatar.src = data[id]["avatar"];
  mobileName.innerHTML = data[id]["name"];
  mobileFeedback.innerHTML = data[id]["feedback"];
  for (let i = 0; i < feedbackOrderList.length; i++) {
    i === id
      ? feedbackOrder.item(i).setAttribute("data-selected", true)
      : feedbackOrder.item(i).setAttribute("data-selected", false);
  }
  id >= 3 ? (id = 0) : (id += 1);
}
setInterval(mobileGallery, 3000);

// Desktop Customer Feedback Items
function renderCustomerFeedbackItemsHandler() {
  let rawHTML = "";
  for (let i = 0; i < data.length - 1; i++) {
    rawHTML += `<div class="customer" id="${data['id']}">
    <img src=${data[i]["avatar"]} alt="" class="avatar">
    <div class="name">${data[i]["name"]}</div>
    <p class="content">
      ${data[i]["feedback"]}
    </p>
  </div>`;
  }
  desktopFeedbackPanel.innerHTML = rawHTML;
}
renderCustomerFeedbackItemsHandler();

window.addEventListener('resize', () => {
  if (window.matchMedia("(min-width: 1024px)").matches){
    mobileFeedbackPanel.setAttribute('data-visible', false)
    desktopFeedbackPanel.setAttribute('data-visible', true)
  } 
  if (window.matchMedia("(max-width: 1023px)").matches){
    mobileFeedbackPanel.setAttribute('data-visible', true)
    desktopFeedbackPanel.setAttribute('data-visible', false)
  }
})


// FOOTER
// Email Validation
goBtn.addEventListener("click", () => {
  let email = emailInput.value;
  let formatValidation = emailValidationHandler(email);
  // let aaa = false
  // console.log(formatValidation)
  // if(!formatValidation) {
  //     console.log('1')
  // }
  // if(!aaa) {
  //     console.log('2')
  // }????
  formatValidation === "false"
    ? reminder.setAttribute("data-visible", true)
    : reminder.setAttribute("data-visible", false);
});

function emailValidationHandler(email) {
  let rule =
    /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  if (email.search(rule) !== -1) {
    return "true";
  } else {
    return "false";
  }
}



