const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const resultImg = document.getElementById("resultImg");
const Download = document.getElementById("Download");

const submitBtn = document.getElementById("submitBtn");

const changeColor = () => {
  const bgColor = document.getElementById("bgColor").value;
  const color_demo = document.getElementById("color_demo");

  color_demo.style.background = "#" + bgColor;
};

bgColor.addEventListener("input", changeColor);
bgColor.addEventListener("propertychange", changeColor);

const generateMockup = () => {
  const websiteAdress = document.getElementById("websiteAdress").value;
  const bgColor = document.getElementById("bgColor").value;
  const mockup =
    "https://2s9e3bif52.execute-api.eu-central-1.amazonaws.com/production/screenshot?url=" +
    websiteAdress +
    "&color=" +
    bgColor;
  console.log(mockup);
  resultImg.src = mockup;

  section1.style.display = "none";
  section2.style.display = "block";

  Download.addEventListener("click", function () {
    window.open(mockup);
  });
};
const changeView = () => {
  setTimeout(() => {
    section2.style.display = "none";
    section3.style.display = "block";
  }, 6500);
};
