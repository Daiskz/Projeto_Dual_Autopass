import { Button } from "../components/button.js"
import { RechargeOption } from "../components/recharge-option.js"
import { FooterButtons } from "../components/footer-buttons.js"
import { Main } from "./main.js"

export class MenuCard {
  constructor() {
    this.init()
  }

  init() {
    this.element = document.createElement('div')
    this.element.className = 'main'
    this.h1 = document.createElement('h1')
    this.h1.textContent = 'Insira seu cartão de transporte'
    this.numberCard = document.createElement('p')
    this.numberCard.className = 'number-card'
    this.numberCard.textContent = ''
    this.menu = document.createElement('div')
    this.menu.className = 'menu-card'
    this.footerButtons = new FooterButtons('footer-buttons')
    this.buttonBack = new Button('Voltar', 'button-back')
    this.footerButtons.addChildren(this.buttonBack.element)
    this.insertCard = document.createElement('div')
    this.insertCard.className = 'insert-card'
    this.span = document.createElement('span')
    this.insertCard.appendChild(this.span)
    this.menu.appendChild(this.insertCard)
    this.insertCard.addEventListener('click', () => this.addRechargeType())
    this.buttonBack.addListener(this.listenerMainBack)
    this.element.appendChild(this.h1)
    this.element.appendChild(this.numberCard)
    this.element.appendChild(this.menu)
    this.element.appendChild(this.footerButtons.element)
    this.divVT = new RechargeOption()
    this.divComum = new RechargeOption()
    this.divEscolar = new RechargeOption()
  }

  listenerMainBack() {
    const main = document.querySelector('.main')
    main.replaceWith(new Main().element)
  }

  addInsertCard() {
    this.menu.innerHTML = ''
    this.divVT.element.innerHTML = ''
    this.divComum.element.innerHTML = ''
    this.divEscolar.element.innerHTML = ''
    this.h1.textContent = 'Insira seu cartão de transporte'
    this.numberCard.textContent = ''
    this.menu.appendChild(this.insertCard)
    this.buttonBack.addListener(this.listenerMainBack)
  }
  
  addRechargeType() {
    this.menu.innerHTML = ''
    this.menu.appendChild(this.divVT.element)
    this.menu.appendChild(this.divComum.element)
    this.menu.appendChild(this.divEscolar.element)
    this.divVT.addChildren('V.T.', 20, 'PERÍODO NÃO DEFINIDO', 'COMPRAR')
    this.divComum.addChildren('COMUM', 66.90, 'Valor Máximo para compra R$ 2485,00', 'COMPRAR')
    this.divEscolar.addChildren('ESCOLAR', 262.51, 'DATA DA APLICAÇÃO EXPIRADA', 'COMPRAR')

    this.h1.textContent = 'Selecione o tipo de recarga'
    this.numberCard.textContent = 'Cartão 14.07.00000692-1'
    this.buttonBack.removeListener(this.listenerMainBack)
    this.buttonBack.addListener(() => this.addInsertCard())
  }
}