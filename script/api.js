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

postAddCats(body) {

    fetch(`${this._url}/add`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: this._headers
    })

    
};

getAddCats(){

    fetch(`${this._url}/show`, {
        method: "GET"
       
    })

};

updateCat(body, idCat) {

    fetch(`${this._url}/update/ ${idCat}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: this._headers
    })

};

deleteCat(idCat) {

    fetch(`${this._url}/delete/${idCat}`, {
        method: "DELETE"
   
    })

};

getOneCats(idCat){

    fetch(`${this._url}/show/${idCat}`, {
        method: "GET"
       
    })

};
getAllMiCats(){

    fetch(`${this._url}/ids`, {
        method: "GET"
       
    })

};

}



const catsHeroesMult = new Api(CONFIG_API);