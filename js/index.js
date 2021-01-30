const workSection = document.getElementById("work");

const websites = [
  {
    url: "https://crownheritagelaw.com",
    img: "img/websites/crownheritagelaw.jpg"
  },
  {
    url: "https://bicbacboe.herokuapp.com/",
    img: "img/websites/bicbacboe.jpg"
  },
  {
    url: "https://polynomial-regression-nn.netlify.app/",
    img: "img/websites/polyregnn.jpg"
  },
  {
    url: "https://4d-projection.netlify.app/",
    img: "img/websites/4dproj.jpg"
  }
];

function main() {
  createWebsitePreviews();
}

function createWebsitePreviews() {
  const template = document.getElementById("website-preview-template");
  
  for (let i in websites) {
    const copy = template.content.cloneNode(true);
    template.parentNode.appendChild(copy);
  }

  const websitePreviews = document.querySelectorAll(".website-preview");
  for(let i in websites) {
    websiteImage = websitePreviews[i].getElementsByTagName("img")[0];
    websiteImage.src = websites[i].img;
    websiteImage.addEventListener('click', () => {
      window.open(websites[i].url);
    });
  }
}

main();
