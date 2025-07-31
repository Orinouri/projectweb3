const fetchpopulare =async()=>{
    try {
        let data = await fetch("https://orinouri.github.io/dbjson/db.json")
        console.log(data);
        let res = await data.json();
        let trailer=res.mostpopulare.map((elem)=>{
            return`
        <div class="swiper-slide most-populer-slider">
            <div class="most-populer-cover">
              <img src="${elem.trailerImageUrl}" />
              <div class="most-populer-titel">
                <span>
                  ${elem.rank}
                  <p>
                    (
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                      class="ipc-icon ipc-icon--arrow-drop-down ipc-btn__icon ipc-btn__icon--post searchCatSelector-button-post-icon"
                      viewBox="0 0 24 24" fill="${elem.color}" role="presentation">
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path
                        d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z">
                      </path>
                    </svg>
                    ${elem.rating})
                  </p>
                </span>
                <h2>${elem.name}</h2>
              </div>
            </div>
          </div>
            `
        });
        document.querySelector(".most-populare-celebs-wrapper").insertAdjacentHTML("beforeend",trailer)
       
    } catch (error) {
        console.log(error.message);
       
    }
}
fetchpopulare()
export default fetchpopulare