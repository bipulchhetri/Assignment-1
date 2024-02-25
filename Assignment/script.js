var images = [
  { "title": "Dr. BIPUL ", "image": "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?t=st=1708849304~exp=1708852904~hmac=db2b14db8cccacd561e373c176e2ff43630bae479109a913b74e18f02c68caae&w=740" },
  { "title": "Dr. Najwa", "image": "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?t=st=1708849331~exp=1708852931~hmac=95320f5d7368edb5df63e33c9b6c1ff072139892b19cc325ae93feeedd18a730&w=740" },
  { "title": "RANDOM", "image": "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?t=st=1708849348~exp=1708852948~hmac=e13b7064ef512f92ead3eb29c73f8fb299987fc5096dc7a124d432e5ba1d9e22&w=740" },
  { "title": "Dr. BIPUL ", "image": "https://img.freepik.com/premium-photo/indian-young-female-doctor-isolated-green_856987-1115.jpg?w=740" },
  { "title": "Dr. Random", "image": "https://img.freepik.com/free-photo/smiling-touching-arms-crossed-room-hospital_1134-799.jpg?t=st=1708849390~exp=1708852990~hmac=81a4e19c105117d88e03a39592516db8caa7d7ef5b9374688e739968c4264f35&w=740" },
  { "title": "RANDOM", "image": "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?t=st=1708849304~exp=1708852904~hmac=db2b14db8cccacd561e373c176e2ff43630bae479109a913b74e18f02c68caae&w=740" },
  { "title": "Dr. BIPUL ", "image": "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?t=st=1708849304~exp=1708852904~hmac=db2b14db8cccacd561e373c176e2ff43630bae479109a913b74e18f02c68caae&w=740" },
  { "title": "Dr. Najwa", "image": "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?t=st=1708849331~exp=1708852931~hmac=95320f5d7368edb5df63e33c9b6c1ff072139892b19cc325ae93feeedd18a730&w=740" },
  { "title": "RANDOM", "image": "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?t=st=1708849348~exp=1708852948~hmac=e13b7064ef512f92ead3eb29c73f8fb299987fc5096dc7a124d432e5ba1d9e22&w=740" },
  { "title": "Dr. BIPUL ", "image": "https://img.freepik.com/premium-photo/indian-young-female-doctor-isolated-green_856987-1115.jpg?w=740" },
  { "title": "Dr. Random", "image": "https://img.freepik.com/free-photo/smiling-touching-arms-crossed-room-hospital_1134-799.jpg?t=st=1708849390~exp=1708852990~hmac=81a4e19c105117d88e03a39592516db8caa7d7ef5b9374688e739968c4264f35&w=740" },
  { "title": "RANDOM", "image": "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?t=st=1708849304~exp=1708852904~hmac=db2b14db8cccacd561e373c176e2ff43630bae479109a913b74e18f02c68caae&w=740" },
  { "title": "Dr. BIPUL ", "image": "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?t=st=1708849304~exp=1708852904~hmac=db2b14db8cccacd561e373c176e2ff43630bae479109a913b74e18f02c68caae&w=740" },
  { "title": "Dr. Najwa", "image": "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?t=st=1708849331~exp=1708852931~hmac=95320f5d7368edb5df63e33c9b6c1ff072139892b19cc325ae93feeedd18a730&w=740" },
  { "title": "RANDOM", "image": "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?t=st=1708849348~exp=1708852948~hmac=e13b7064ef512f92ead3eb29c73f8fb299987fc5096dc7a124d432e5ba1d9e22&w=740" },
  { "title": "Dr. BIPUL ", "image": "https://img.freepik.com/premium-photo/indian-young-female-doctor-isolated-green_856987-1115.jpg?w=740" },
  { "title": "Dr. Random", "image": "https://img.freepik.com/free-photo/smiling-touching-arms-crossed-room-hospital_1134-799.jpg?t=st=1708849390~exp=1708852990~hmac=81a4e19c105117d88e03a39592516db8caa7d7ef5b9374688e739968c4264f35&w=740" },
  { "title": "RANDOM", "image": "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?t=st=1708849304~exp=1708852904~hmac=db2b14db8cccacd561e373c176e2ff43630bae479109a913b74e18f02c68caae&w=740" },
  { "title": "Dr. BIPUL ", "image": "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?t=st=1708849304~exp=1708852904~hmac=db2b14db8cccacd561e373c176e2ff43630bae479109a913b74e18f02c68caae&w=740" },
  { "title": "Dr. Najwa", "image": "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?t=st=1708849331~exp=1708852931~hmac=95320f5d7368edb5df63e33c9b6c1ff072139892b19cc325ae93feeedd18a730&w=740" },
  { "title": "RANDOM", "image": "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?t=st=1708849348~exp=1708852948~hmac=e13b7064ef512f92ead3eb29c73f8fb299987fc5096dc7a124d432e5ba1d9e22&w=740" },
  { "title": "Dr. BIPUL ", "image": "https://img.freepik.com/premium-photo/indian-young-female-doctor-isolated-green_856987-1115.jpg?w=740" },
  { "title": "Dr. Random", "image": "https://img.freepik.com/free-photo/smiling-touching-arms-crossed-room-hospital_1134-799.jpg?t=st=1708849390~exp=1708852990~hmac=81a4e19c105117d88e03a39592516db8caa7d7ef5b9374688e739968c4264f35&w=740" },
  { "title": "RANDOM", "image": "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?t=st=1708849304~exp=1708852904~hmac=db2b14db8cccacd561e373c176e2ff43630bae479109a913b74e18f02c68caae&w=740" },
  // Add more image objects here...
];

// Function to load images from JSON array
function loadImages() {
  var container = document.getElementById("card-container");

  images.forEach(function (item) {
      var card = document.createElement("div");
      card.classList.add("card");

      var img = document.createElement("img");
      img.src = item.image;

      var title = document.createElement("h3");
      title.textContent = item.title;

      card.appendChild(img);
      card.appendChild(title);
      container.appendChild(card);
  });
}

// Call the function to load images when the page is loaded
window.onload = loadImages;