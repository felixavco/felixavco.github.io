class Nav {
  constructor(){
    this.menu = document.querySelector('nav');
    this.btnMenu = document.querySelector('.btn-menu');
    this.menuElements = document.querySelectorAll('.menu-list > li');
    this.events();
  }

  events() {
    this.btnMenu.addEventListener('click', this.AnimateMenu.bind(this));
    this.menuElements.forEach(element => {
      element.addEventListener('click', this.AnimateMenu.bind(this));
    });
  }

  AnimateMenu () {
    this.btnMenu.classList.toggle('change');
    this.menu.classList.toggle('menu-active');
  }
}

export default Nav;