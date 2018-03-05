
class bQuery {
  setFullSize (elem) {
    elem.style.height = '100vh';
    elem.style.width = '100vw';
  }

  setBlackColor (elem) {
    elem.style.background = 'rgba(0,0,0,0)';
  }

  setAsFlexCentered (elem) {
    elem.style.display = 'flex';
    elem.style.justifyContent = 'center';
    elem.style.alignItems = 'center';
    elem.style.flexDirection = 'column';
  }

  setNoOverflow (elem) {
    elem.style.overflow = 'hidden';
  }

  resetBody () {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
    document.body.style.margin = '0px';
    document.body.style.padding = '0px';
  }

  setId (elem, id) {
    elem.setAttribute('id', id);
  }

  appendToBody (elem) {
    document.body.appendChild(elem);
  }

  createDefaultInput (parent) {
    // TODO:- refactor
    const width = '30vw';
    const height = '20vh';
    const elem = document.createElement('input');
    elem.setAttribute('id', 'password');
    elem.setAttribute('placeholder', 'Encrypt / Decrypt');
    elem.style.height = height;
    elem.style.width = width;
    elem.style.borderRadius = '15px';
    elem.style.color = 'white';
    elem.style.textAlign = 'center';
    elem.style.background = 'rgba(0,0,0,0.1)';
    elem.style.fontSize = '2vw';
    elem.style.fontFamily = 'verdana';
    elem.style.outline = 'none';
    parent.appendChild(elem);
    elem.focus();
    return elem;
  }

  createDefaultBackground () {
    const elem = document.createElement('div');
    this.resetBody();
    this.setId(elem, 'bg-black');
    this.setFullSize(elem);
    this.setBlackColor(elem);
    this.setAsFlexCentered(elem);
    this.setNoOverflow(elem);
    this.appendToBody(elem);
    animation.alphaZeroToOne(elem);
    return elem;
  }

  createDefaultText (elem) {
    const element = document.createElement('h2');
    element.style.fontSize = '1.5vw';
    element.style.fontFamily = 'verdana';
    element.style.color = 'white';
    elem.appendChild(element);
    return element;
  }

  setTextTo (elem, text) {
    elem.innerText = text;
  }
}

const b = new bQuery();
