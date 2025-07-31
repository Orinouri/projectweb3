const fetchpopulareIntrest =async()=>{
    try {
        let data = await fetch("http://localhost:3000/populare-intrests")
        console.log(data);
        let res = await data.json();
        let populareapi =res.map((elem)=>{
            return`
             <div class="swiper-slide Popular-interests-slider">
          <div class="Popular-interests-slider-cover">
            <img src="${elem.img}" alt="">
          </div>
          <div class="Popular-interests-slider-titel">
            <h2>
              ${elem.title}
            </h2>
          </div>
        </div>
            `
        });
        document.querySelector(".populare-intrest-api").insertAdjacentHTML("beforeend",populareapi )
       
    } catch (error) {
        console.log(error.message);
       
    }
}
fetchpopulareIntrest()
export default fetchpopulareIntrest
