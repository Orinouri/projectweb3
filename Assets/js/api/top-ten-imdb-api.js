const fetchtopTen =async()=>{
    try {
        let data = await fetch("https://orinouri.github.io/dbjson/db.json")
        console.log(data);
        let res = await data.json();
        let trailer=res.toptenimdb.map((elem)=>{
            return`
                 <div class="swiper-slide top-ten-to-watch-slider">
          <div class="top-ten-slider">
            <div class="top-ten-cover">
              <img
                src="${elem.trailerImageUrl}"
                alt="Slide 1" />
            </div>
            <div class="top-ten-title">
              <div class="top-ten-rating">
                <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--star-inline"
                  viewBox="0 0 24 24" fill="#f5c518" role="presentation">
                  <path
                    d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z">
                  </path>
                </svg>
                <span>${elem.rating}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12"
                  class="ipc-icon ipc-icon--star-border-inline" viewBox="0 0 24 24" fill="#5799ef" role="presentation">
                  <path
                    d="M22.724 8.217l-6.786-.587-2.65-6.22c-.477-1.133-2.103-1.133-2.58 0l-2.65 6.234-6.772.573c-1.234.098-1.739 1.636-.8 2.446l5.146 4.446-1.542 6.598c-.28 1.202 1.023 2.153 2.09 1.51l5.818-3.495 5.819 3.509c1.065.643 2.37-.308 2.089-1.51l-1.542-6.612 5.145-4.446c.94-.81.45-2.348-.785-2.446zm-10.726 8.89l-5.272 3.174 1.402-5.983-4.655-4.026 6.141-.531 2.384-5.634 2.398 5.648 6.14.531-4.654 4.026 1.402 5.983-5.286-3.187z">
                  </path>
                </svg>
              </div>
              <h2>${elem.title}</h2>
              <div class="top-ten-whatchlist-trailer">
                <h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    class="ipc-icon ipc-icon--add ipc-icon--inline" viewBox="0 0 24 24" fill="#5799ef"
                    role="presentation">
                    <path
                      d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z">
                    </path>
                  </svg>watch now
                </h3>
                <h4>trailer</h4>
              </div>
            </div>
          </div>
          <!--  -->
        </div>

            `
        });
        document.querySelector(".slider-top-ten-api").insertAdjacentHTML("beforeend",trailer)
       
    } catch (error) {
        console.log(error.message);
       
    }
}
fetchtopTen()
export default fetchtopTen