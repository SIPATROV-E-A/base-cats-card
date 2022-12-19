const containerForCats = document.querySelector(".cards");
const butAddCat = document.querySelector("#add");
const formAddCat = document.querySelector("#popup-form-cat")
const addCatsForm = new Popup('popup-add-cats');
addCatsForm.setEventListener();
butAddCat.addEventListener("click", ()=>{
    addCatsForm.open();   
});
catsHeroes.forEach((dataCats)=>{
const catCard = new Card(dataCats,"#card-template");
const oneCatCard = catCard.getElement();
containerForCats.append(oneCatCard);
});