const fetchtrailer =async()=>{
    try {
        let data = await fetch("https://orinouri.github.io/dbjson/db.json")
        console.log(data);
       
        let res = await data.json();
        let uptrailer=res.upnexttrialer.map((elem)=>{
            return`
            <div class="swiper-slide trailer">
                <a href=""
                  ><img
                    src="${elem.trailerImageUrl}"
                    alt=""
                    class="trailer-img"
                /></a>
                <div class="movies-cover">
                  <a href=""
                    ><img
                      src="${elem.description}"
                      alt=""
                      class="movies-cover-img"
                  /></a>
                  <div class="movies-titel">
                    <div class="play">
                      <svg
                        width="50"
                        height="50"
                        xmlns="http://www.w3.org/2000/svg"
                        class="ipc-icon ipc-icon--play-circle-outline-large-inline ipc-icon--inline sc-ed60be29-15 nSwIG editorial-play-icon reactions"
                        viewBox="0 0 24 24"
                        fill="white"
                        role="presentation"
                      >
                        <path
                          d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"
                        ></path>
                        <path
                          d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"
                        ></path>
                      </svg>
                      <span>2:47</span>
                    </div>
                    <div class="Watch-the-Trailer">
                      <h3>${elem.title}</h3>
                      <p>Watch the Trailer</p>
                      <a href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="16"
                          class="ipc-icon ipc-icon--thumb-up ipc-reaction-summary__likes-icon"
                          viewBox="0 0 24 24"
                          fill="#ffffffb3"
                          role="presentation"
                        >
                          <path
                            d="M13.12 2.06c.58-.59 1.52-.59 2.11-.01.36.36.51.87.41 1.37L14.69 8h5.65c2.15 0 3.6 2.2 2.76 4.18l-3.26 7.61C19.52 20.52 18.8 21 18 21H9c-1.1 0-2-.9-2-2V9.01c0-.53.21-1.04.58-1.41l5.54-5.54zM9.293 8.707A1 1 0 0 0 9 9.414V18a1 1 0 0 0 1 1h7.332a1 1 0 0 0 .924-.617c1.663-4.014 2.527-6.142 2.594-6.383.07-.253.12-.587.15-1v-.002A1 1 0 0 0 20 10h-8l1.34-5.34-4.047 4.047zM3 21c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2s-2 .9-2 2v8c0 1.1.9 2 2 2z"
                          ></path>
                        </svg>
                        <span> 878 </span>
                      </a>
                    </div>
                    <!-- tablet and desktop -->
                    <span class="play-span">2:47</span>
                    <!-- tablet and desktop -->
                  </div>
                </div>
              </div>`
        });
        document.querySelector(".swiper-wrapper").insertAdjacentHTML("beforeend",uptrailer)
       
    } catch (error) {
        console.log(error.message);
       
    }
}
fetchtrailer()
export default fetchtrailer
