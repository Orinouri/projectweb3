    console.log("hi")
    let BtStrart = document.querySelector(".menue-pop-show")
    let menu= document.querySelector(".popup-root")
    let BtEnd = document.querySelector(".menu-popup-end")

    function showmenu(){
    menu.classList.add("show")
}
function endmenu(){
    menu.classList.remove("show")
}
BtStrart.addEventListener("click",showmenu
)
BtEnd.addEventListener("click",endmenu
)

