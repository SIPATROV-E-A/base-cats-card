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
formLogin.addEventListener("submit",handForFormLogin);
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
        
    });
    return dataForms;
};

function createCat(dataCats) {
    const cardInstance = new Card(dataCats, '#card-template');
    const newCardElement = cardInstance.getElement();
    containerForCats.append(newCardElement);
};

function handForFormAddCat(e){
e.preventDefault();
const elementForFormCat = [...formAddCat.elements];

const dataFromForm = serialiseForm(elementForFormCat);

api.postAddCats(dataFromForm).then(()=>{
    createCat(dataFromForm);
    updateLocalStorage(dataFromForm, {type : "ADD_CAT"});
});

addCatsForm.close();


};

function handForFormLogin(e){
    e.preventDefault();
    const elementForFormCat = [...formLogin.elements];
const dataFromForm = serialiseForm(elementForFormCat);
Cookies.set("email", `email=${dataFromForm.email}`);
butInput.classList.add("visually-hidden");
popupLogin.close();
};
const isAuth = Cookies.get("email");
if(!isAuth){
    popupLogin.open();
    butInput.classList.remove("visually-hidden");
};

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
          updateLocalStorage(data, { type: 'ALL_CATS' });
        });

    }
};
function setDataRefresh(min){
    const time = new Date(new Date().getTime+min*600);
    localStorage.setItem('key', 'time');
    return time
};
checkLocalStorage();

function updateLocalStorage(data, action) {
    const oldStorage = JSON.parse(localStorage.getItem('cats'));
  
    switch (action.type) {
      case 'ADD_CAT':
        localStorage.setItem('cats', JSON.stringify([...oldStorage, data]));
        return;
      case 'ALL_CATS':
        localStorage.setItem('cats', JSON.stringify(data));
        setDataRefresh(600, 'catsRefresh');
        return;
      case 'DELETE_CAT':
        const newStorage = oldStorage.filter((cat) => cat.id !== data.id);
        localStorage.setItem('cats', JSON.stringify(newStorage));
        return;
      case 'EDIT_CAT':
        const updatedLocalStorage = oldStorage.map((cat) =>
          cat.id === data.id ? data : cat
        );
        localStorage.setItem('cats', JSON.stringify(updatedLocalStorage));
        return;
      default:
        break;
    }
};