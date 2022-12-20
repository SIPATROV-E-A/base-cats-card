const CONFIG_API = {
    url : "https://cats.petiteweb.dev/api/single/mufasacatjs",
    headers : { 
"Content-type": "application/json"
    } 
}

class Api {
constructor(config){
    this._url = config.url,
    this._headers = config.headers
}

_onResponce(res){
    return res.ok ? res.json() : Promise.reject({...res, message: "Ошибка на стороне сервера"});
}
postAddCats(data) {

   return fetch(`${this._url}/add`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: this._headers
    }).then(this._onResponce)

    
};

getAddCats(){

  return  fetch(`${this._url}/show`, {
        method: "GET"
       
    }).then(this._onResponce)
    

};

updateCat(body, idCat) {

    fetch(`${this._url}/update/ ${idCat}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: this._headers
    }).then(this._onResponce)

};

deleteCat(idCat) {

    fetch(`${this._url}/delete/${idCat}`, {
        method: "DELETE"
   
    }).then(this._onResponce)

};

getOneCats(idCat){

    fetch(`${this._url}/show/${idCat}`, {
        method: "GET"
       
    }).then(this._onResponce)

};
getAllMiCats(){

    fetch(`${this._url}/ids`, {
        method: "GET"
       
    }).then(this._onResponce)

};

}



const api = new Api(CONFIG_API);
api.getAddCats()