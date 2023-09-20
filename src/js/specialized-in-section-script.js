new Swiper(".specialized-in-swiper", {
  spaceBetween: 100,
	pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
  
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1224: {
			slidesPerView: 3,
		},
	},
});
let data = [];
let start = 0;
let contianarr =  document.querySelector(".swiper-wrapper")
function appenData(data,start){
	// let titlee = document.createElement("h1")
  //   titlee.classList.add("fq-title")
  //   titlee.innerText = title
   
  //   let descriptionn = document.createElement("p")
  //     descriptionn.classList.add("fq-descrip")
  //     descriptionn.innerText = description
   
  //   let fqswiper = document.createElement("div")
  //   fqswiper.classList.add("fq-card")
  //   fqswiper.appendChild(titlee)
  //   fqswiper.appendChild(descriptionn)
  
  //   let continar = document.createElement("div")
  //   continar.classList.add("swiper-slide")
  
    // continar.appendChild(fqswiper)
    // contianarr.appendChild(continar)



    if (data.length === 0) {
      alarm("no experience")
    }
    for (let i = start; i < data.length; i++) {
      contianarr.innerHTML += `
              <div class="swiper-slide">
                <div class="fq-card">
                  <h1 class="fq-title">${data[i].title}</h1>
                  <p class="fq-descrip">
                  ${data[i].body}
                  </p>
                </div>
              </div>
    
    `
    }
}
async function fetchcards() {
    await fetch("http://127.0.0.1:8000/api/specializations")
    .then((result) => result.json())
    .then((result) => {
      data = result.specializations
      appenData(data,start);
    });
  }

  fetchcards();