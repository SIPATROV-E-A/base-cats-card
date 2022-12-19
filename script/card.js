class Card{
constructor(dataMyCats, selectorTemplate){
    this._data = dataMyCats;
    this._selectorTemplate = selectorTemplate
}
 getTemplate(){
return document
.querySelector(this._selectorTemplate)
.content.querySelector('.card');
 };

 getElement(){
this.element = this.getTemplate().cloneNode(true);
const titleCat =this.element.querySelector(".card__name");
const imgCat = this.element.querySelector(".card__image");
titleCat.textContent = this._data.name;
imgCat.src = this._data.img_link;
return this.element
 };
 
}

const card = new Card(catsHeroes[0]);



