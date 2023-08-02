const next = document.querySelector(".next");
let id = 0;
const rev = [
  {
    profile: "./img/YOGA.jpeg",
    name: "YOGA",
    title: "Instructor: John Doe ",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti enim vero repellat atque hic mollitia sed quibusdam."
  },
  {
    profile: "./img/ZUMBA.jpeg",
    name: "ZUMBA",
    title: "Instructor: John Doe ",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti enim vero repellat atque hic mollitia sed quibusdam."
      
  },
  {
    profile: "img/HIIT.jpeg",
    name: "HIIT",
    title: "Instructor: John Doe ",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti enim vero repellat atque hic mollitia sed quibusdam."
    
  },
  {
    profile: "./img/YOGA.jpeg",
    name: "YOGA",
    title: "Instructor: John Doe ",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
  }
];
const profile = document.getElementById("profile");
const name = document.getElementById("name");
const title = document.getElementById("title1");
const review = document.getElementById("review");
next.addEventListener("click", (e) => {
  id = (id + 1) % rev.length;
  profile.src = rev[id].profile;
  name.innerHTML = rev[id].name;
  title.innerHTML = rev[id].title;
  review.innerHTML = rev[id].review;
});

const prev = document.querySelector(".prev");

prev.addEventListener("click", (e) => {
  if (id === 0) id = rev.length - 1;
  else id = id - 1;
  profile.src = rev[id].profile;
  name.innerHTML = rev[id].name;
  title.innerHTML = rev[id].title;
  review.innerHTML = rev[id].review;
});

const surprise = document.querySelector(".card-btn");

surprise.addEventListener("click", (e) => {
  id = Math.floor(Math.random() * rev.length);
  profile.src = rev[id].profile;
  name.innerHTML = rev[id].name;
  title.innerHTML = rev[id].title;
  review.innerHTML = rev[id].review;
});
