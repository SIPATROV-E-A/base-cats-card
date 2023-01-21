class Card{
 constructor(data, selectorTemplate){
    this._data = data;
    this._selectorTemplate = selectorTemplate;
 };
 
 _getTemplate(){
 return document
 .querySelector(this._selectorTemplate)
 .content.querySelector('.card')
 };

 getElement(){
 this.element = this._getTemplate().cloneNode(true);
 const titleCat =this.element.querySelector(".card__name");
 const imgCat = this.element.querySelector(".card__image");
 const cardLike = this.element.querySelector('.card__like');
 if(!this._data.favorite) {
    cardLike.classList.add('card__like-no-active')
  };
 titleCat.textContent = this._data.name;
 imgCat.src = this._data.image;
 return this.element
 };
};
