const containerForCats = document.querySelector(".cards");
const butAddCat = document.querySelector("#add");
const butInput = document.querySelector("#login");
const formAddCat = document.querySelector("#popup-form-cat");
const formLogin = document.querySelector('#popup-form-login');


const addCatsForm = new Popup('popup-add-cats');
addCatsForm.setEventListener();

const popupLogin = new Popup("popup-login");
popupLogin.setEventListener();

butAddCat.addEventListener("click", ()=>{
    addCatsForm.open();   
});

formAddCat.addEventListener("submit",handForFormAddCat);
butInput.addEventListener("click", ()=>{popupLogin.open();}
  
);

function serialiseForm(elements){
    const dataForms={};
    elements.forEach((input)=>{
        if(input.type==="submit") return;
        if(input.type !== "checkbox"){
            dataForms[input.name]=input.value
        }
        if(input.type==="checkbox"){
            dataForms[input.name]=input.checked;
        }
        
    })
    return dataForms;
}

function createCat(dataCat) {
    const cardInstance = new Card(dataCat, '#card-template');
    const newCardElement = cardInstance.getElement();
    containerForCats.append(newCardElement);
  } 

function handForFormAddCat(e){
e.preventDefault();
const elementForFormCat = [...formAddCat.elements];

const dataFromForm = serialiseForm(elementForFormCat);
// const catCard = new Card(dataFromForm,"#card-template");
// const oneCatCard = catCard.getElement();
// containerForCats.append(oneCatCard);
api.postAddCats(dataFromForm).then(()=>{
    createCat(dataFromForm) 
})

addCatsForm.close();


}

api.getAddCats().then((data)=>{
    data.forEach((dataCats)=>{
        createCat(dataCats)
        });

})