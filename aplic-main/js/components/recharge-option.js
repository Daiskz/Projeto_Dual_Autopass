export class RechargeOption {
  constructor() {
    this.element = document.createElement('div')
    this.element.className = 'recharge-option'
  }

  addChildren(typeRecharge, balance, description, buttonText) {
    const span1 = document.createElement('span')
    span1.textContent = typeRecharge
    const span2 = document.createElement('span')
    span2.innerHTML = `<p>Saldo</p>${Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(balance))}`
    const span3 = document.createElement('span')
    span3.textContent = description
    const button = document.createElement('button')
    button.textContent = buttonText
    this.element.appendChild(span1)
    this.element.appendChild(span2)
    this.element.appendChild(span3)
    this.element.appendChild(button)
  }
}