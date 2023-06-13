import { Button } from "../components/button.js"
import { FooterButtons } from "../components/footer-buttons.js"
import { Main } from "./main.js"

export class MenuBilhete {
  constructor() {
    this.element = document.createElement('div')
    this.element.className = 'main'
    const h1 = document.createElement('h1')
    h1.textContent = 'Selecione o tipo de recarga'
    const div = document.createElement('div')
    div.className = 'menu-bilhete'
    this.footerButtons = new FooterButtons('footer-buttons')
    this.footerButtons.addChildren(this.createButtonBack())
    this.element.appendChild(h1)
    this.element.appendChild(div)
    this.element.appendChild(this.footerButtons.element)
  }

  createButtonBack() {
    const buttonBack = new Button('Voltar', 'button-back')
    buttonBack.addListener(() => this.element.replaceWith(new Main().element))
    return buttonBack.element
  }
}