const workSection = document.getElementById("work");

const websites = [
  {
    url: "https://chillchili.netlify.app",
    img: "img/websites/chillchili.jpg"
  },
  {
    url: "http://evader.pstoebenau.ml/",
    img: "img/websites/evader.png"
  },
  {
    url: "https://bicbacboe.pstoebenau.ml/",
    img: "img/websites/bicbacboe.jpg"
  },
  {
    url: "https://leech.pstoebenau.ml/",
    img: "img/websites/leech.png"
  },
  {
    url: "https://crownheritagelaw.com",
    img: "img/websites/crownheritagelaw.jpg"
  },
  {
    url: "https://techknights.pstoebenau.ml/",
    img: "img/websites/technightswebsite.jpg"
  },
  {
    url: "https://polynn.pstoebenau.ml",
    img: "img/websites/polyregnn.jpg"
  },
  {
    url: "https://4dprojection.pstoebenau.ml/",
    img: "img/websites/4dproj.jpg"
  },
  {
    url: "https://nnmnist.pstoebenau.ml",
    img: "img/websites/nnmnist.jpg"
  },
  {
    url: "http://trader.ml/",
    img: "img/websites/trader.jpg"
  },
  {
    url: "http://writing.pstoebenau.ml/",
    img: "img/websites/writing.jpg"
  },
  {
    url: "http://resume.pstoebenau.ml/",
    img: "img/websites/resume.jpg"
  },
  {
    url: "http://epic.pstoebenau.ml/",
    img: "img/websites/old.jpg"
  },
];

document.getElementById("contact-form").addEventListener("submit", (e) => sendForm(e))

function main() {
  replaceNavbars();
  createWebsitePreviews();
}

function replaceNavbars() {
  const template = document.getElementById("navbar-template");

  for (let navbar of document.querySelectorAll(".navbar")) {
    const copy = template.content.cloneNode(true);
    navbar.appendChild(copy);
  }
}

function createWebsitePreviews() {
  const template = document.getElementById("website-preview-template");
  
  for (let i in websites) {
    const copy = template.content.cloneNode(true);
    template.parentNode.appendChild(copy);
  }

  const websitePreviews = document.querySelectorAll(".website-preview");
  for(let i in websites) {
    websiteLink = websitePreviews[i].getElementsByTagName("a")[0];
    websiteLink.href = websites[i].url;
    websiteLink.setAttribute('target', '_blank');
    websiteImage = websiteLink.getElementsByTagName("img")[0];
    websiteImage.src = websites[i].img;
  }
}

async function sendForm(e) {
  e.preventDefault();
  let formData = new FormData(e.target);
  let response = await fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSfI21IUv8qtKSYvxYLNLIW8nvPxpMPbzqtw_K0OhUn0hvtC2w/formResponse", {
    method: "POST",
    mode: "no-cors",
    body: formData,
  });

  alert("Form sent");
  e.target.reset();
}

main();
