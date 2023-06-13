export class Button {
  constructor(text, className) {
    this.element = document.createElement('button')
    this.element.textContent = text
    this.element.className = className
  }

  addListener(fn) {
    this.element.addEventListener('click', fn)
  }

  removeListener(fn) {
    this.element.removeEventListener('click', fn)
  }
}