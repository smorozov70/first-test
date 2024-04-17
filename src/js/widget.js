export default class Widget {
    constructor(parentEl) {
        this.parentEl = parentEl;
    }

    bindToDOM() {
        this.show();
    }

    show(){
        this.parentEl.textContent = 'Привет Мир!';

    }


}