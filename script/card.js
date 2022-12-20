class Card{
constructor(dataMyCats, selectorTemplate){
    this._data = dataMyCats;
    this._selectorTemplate = selectorTemplate
}
_getTemplate(){
return document
.querySelector(this._selectorTemplate)
.content.querySelector('.card');
 };

 getElement(){
this.element = this._getTemplate().cloneNode(true);
const titleCat =this.element.querySelector(".card__name");
const imgCat = this.element.querySelector(".card__image");
const cardLike = this.element.querySelector('.card__like');
titleCat.textContent = this._data.name;
imgCat.src = this._data.image;
if(!this._data.favorite) {
    cardLike.classList.toggle('like-no-active')

 };
 return this.element
}
}
