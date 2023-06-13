export class FooterButtons {
  constructor(className) {
    this.element = document.createElement('div')
    this.element.className = className
  }

  addChildren(children) {
    this.element.appendChild(children)
  }
}