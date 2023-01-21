const catId = document.querySelector(".popup__edit");
console.log(catId);

const forminfo = new Popup('popup-info-detail');
forminfo.setEventListener();

catId.addEventListener("click", ()=>{
    forminfo.open();   
});