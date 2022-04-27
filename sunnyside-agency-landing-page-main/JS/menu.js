export default function showMenu(hamburgerBtn,menu,links){

const d=document;

d.addEventListener("click",e=>{

    if(e.target.matches(hamburgerBtn)|| e.target.matches(`${hamburgerBtn} * `)){
        d.querySelector(menu).classList.toggle("show-menu");
        d.querySelector(hamburgerBtn).classList.toggle("is-active");
    }

    if(e.target.matches(links)){
        d.querySelector(menu).classList.remove("show-menu");
       d.querySelector(hamburgerBtn).classList.remove("is-active");
       
    }
})


}