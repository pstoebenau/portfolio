const workSection = document.getElementById("work");

const urls = [
  "https://crownheritagelaw.com",
  "https://bicbacboe.herokuapp.com/",
  "https://polynomial-regression-nn.netlify.app/",
  "https://4d-projection.netlify.app/"
];

getImgFromUrl(urls[0]);

async function getImgFromUrl(url) {
  // Parameters for POST
  const params = new URLSearchParams();
  params.append("url", url);
  params.append("device", "desktop");
  params.append("cachelimit", "0");

  const response = await fetch("https://www.screenshotmachine.com/capture.php", {
    method: "POST",
    body: params
  })

  console.log(response);
  return response.link;
}
