//Portfolio images of fitness coach

const images = [
  "https://www.armourycoachingstudio.co.uk/uploads/1/2/9/5/129586512/2_orig.jpg",
  "https://www.armourycoachingstudio.co.uk/uploads/1/2/9/5/129586512/1_1.jpg",
  "https://www.armourycoachingstudio.co.uk/uploads/1/2/9/5/129586512/smartmockups-k4dkpuo6-orig-orig_orig.jpg",
  "https://www.armourycoachingstudio.co.uk/uploads/1/2/9/5/129586512/background-images/98110803.jpg",
  "https://www.armourycoachingstudio.co.uk/uploads/1/2/9/5/129586512/3_orig.jpg",
  "https://www.armourycoachingstudio.co.uk/uploads/1/2/9/5/129586512/background-images/443440755.jpg",
  "https://www.armourycoachingstudio.co.uk/uploads/1/2/9/5/129586512/background-images/612624863.jpg",
  "https://www.armourycoachingstudio.co.uk/uploads/1/2/9/5/129586512/background-images/826207528.jpg",
];

//getting parent element of images

const portfolioImg = document.querySelector(".random-pictures");

let portfoliohtml = "";

async function generatePortfolio() {
  images.map((data, id) => {
    portfoliohtml += `
        <img src=${data} alt=${id} />
        `;
  });

  portfolioImg.innerHTML += portfoliohtml;
}

generatePortfolio();
