const workSection = document.getElementById("work");

const websites = [
  {
    url: "https://crownheritagelaw.com",
    img: "img/websites/crownheritagelaw.jpg"
  },
  {
    url: "https://technights-website.netlify.app/",
    img: "img/websites/technightswebsite.jpg"
  },
  {
    url: "https://bicbacboe.pstoebenau.ml/",
    img: "img/websites/bicbacboe.jpg"
  },
  {
    url: "https://polynomial-regression-nn.netlify.app/",
    img: "img/websites/polyregnn.jpg"
  },
  {
    url: "https://4d-projection.netlify.app/",
    img: "img/websites/4dproj.jpg"
  },
  {
    url: "https://nnmnist.pstoebenau.ml",
    img: "img/websites/nnmnist.jpg"
  },
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
    websiteLink = websitePreviews[i].getElementsByTagName("a")[0];
    websiteLink.href = websites[i].url;
    websiteImage = websiteLink.getElementsByTagName("img")[0];
    websiteImage.src = websites[i].img;
  }
}

main();
