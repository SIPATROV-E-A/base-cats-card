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
formLogin.addEventListener("submit",handForFormLogin)
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

function createCat(dataCats) {
    const cardInstance = new Card(dataCats, '#card-template');
    const newCardElement = cardInstance.getElement();
    containerForCats.append(newCardElement);
  } 

function handForFormAddCat(e){
e.preventDefault();
const elementForFormCat = [...formAddCat.elements];

const dataFromForm = serialiseForm(elementForFormCat);

api.postAddCats(dataFromForm).then(()=>{
    createCat(dataFromForm) 
})

addCatsForm.close();


}

function handForFormLogin(e){
    e.preventDefault();
    const elementForFormCat = [...formLogin.elements];
const dataFromForm = serialiseForm(elementForFormCat);
Cookies.set("email", `email=${dataFromForm.email}`);
popupLogin.close();
butInput.classList.add("visually-hidden");

}
const isAuth = Cookies.get("email");
if(!isAuth){
    popupLogin.open();
    butInput.classList.remove("visually-hidden");
}



function checkLocalStorage(){
    const localData =JSON.parse(localStorage.getItem(catsHeroesMult));
    const getTimeExpires = localStorage.getItem("catRefresh");
    const timeActual = new Date()< new Date(getTimeExpires);

    if(localData && localData.length && timeActual){
         localData.forEach(function(dataCats){
         createCat(dataCats)});
        
    } else {
        api.getAddCats().then((data)=>{
         data.forEach((dataCats)=>{
         createCat(dataCats)
          });
         localStorage.setItem('cats', JSON.stringify(data));
         setDataRefresh(85, "catRefresh");
        });

    }
}
function setDataRefresh(min){
    const time = new Date(new Date().getTime+min*600);
    localStorage.setItem('key', 'time');
    return time
 }
checkLocalStorage()