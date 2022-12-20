class Popup {
    constructor(className) {
      this._className = className;
      this.popup = document.querySelector(`.${className}`);
    }
    open() {
      this.popup.classList.add('popup_active');
    }
    close() {
      this.popup.classList.remove('popup_active');
    }
    setEventListener() {
      console.log(this.popup);
      this.popup.addEventListener('click', (event) => {
        console.log(event.target.closest('.popup__close'));
        if (
          event.target.classList.contains(this._className) ||
          !!event.target.closest('.popup__close')
        ) {
          this.close();
        }
      });
    }
  }
  
  const popupsCat = new Popup('popup-add-cats');

