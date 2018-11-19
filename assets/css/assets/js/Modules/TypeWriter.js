class TypeWriter {
  constructor() {
    this.textProfession = ["\"Web Developer\"","\"Javascript Developer\"", "\"WordPress Developer\""];
    this.profession = document.getElementById('profession');
    this.txt = '';
    this.wait = 3000;
    this.isDeleting = false;
    this.wordIndex = 0;
    this.type();
  }

  
  type() {
    const current = this.wordIndex % this.textProfession.length;
    const fullTxt =  this.textProfession[current];

    if(this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.profession.innerHTML =`<span class="txt">${this.txt}</span>`;

    let typeSpeed = 300;
    
    if(this.isDeleting) {
      typeSpeed/= 2;
    }

    if(!this.isDeleting && this.txt == fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting =  true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

export default TypeWriter;