const fetchfeature =async()=>{
    try {
        let data = await fetch("https://orinouri.github.io/dbjson/db.json")
        console.log(data);
        let res = await data.json();
        let trailer=res.futuretoday.map((elem)=>{
            return`
             <div class="swiper-slide Featured-today-slider">
            <div class="Featured-today-cover-titel">
              <div class="Featured-today-cover">
                <a href="">
                  <img src="${elem.trailerImageUrl}" />
                </a>
                <div class="Featured-today-titel">
                  <h3>${elem.description}</h3>
                  <a href="">
                    <span> Browse the guide </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
            `
        });
        document.querySelector(".Featured-today-swiper-wrapper").insertAdjacentHTML("beforeend",trailer)
       
    } catch (error) {
        console.log(error.message);
       
    }
}
fetchfeature()
export default fetchfeature
