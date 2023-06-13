export class Footer {
  constructor() {
    this.element = document.createElement('footer')
    this.element.className = 'footer'
    const content = document.createElement('div')
    content.className = 'content'
    content.appendChild(this.addLogo())
    content.appendChild(this.addTime())
    content.appendChild(this.addLogoCards())
    this.element.appendChild(content)
  }

  addLogo() {
    const logo = document.createElement('div')
    logo.className = 'logo'
    const logoImg = document.createElement('img')
    logoImg.src = 'img/logo_top.png'
    const terminalVersion = document.createElement('div')
    const terminal = document.createElement('p')
    const version = document.createElement('p')
    terminal.textContent = 'Terminal: 4001'
    version.textContent = 'Versão: 23.2.02'
    terminalVersion.appendChild(terminal)
    terminalVersion.appendChild(version)
    logo.appendChild(logoImg)
    logo.appendChild(terminalVersion)
    return logo
  }

  addTime() {
    const time = document.createElement('div')
    time.className = 'time'
    const clock = document.createElement('span')
    setInterval(() => clock.textContent = this.addClock(), 1000)
    time.appendChild(clock)
    return time
  }
  
  addClock() {
    const time = new Date()
    const day = addZeroLeft(time.getDate().toString())
    const month = addZeroLeft((time.getMonth() + 1).toString())
    const year = time.getFullYear()
    const hour = addZeroLeft(time.getHours().toString())
    const minutes = addZeroLeft(time.getMinutes().toString())

    function addZeroLeft(value) {
      return value.padStart(2, '0')
    }

    return `${day}/${month}/${year} ${hour}:${minutes}`
  }

  addLogoCards() {
    const logoFlags = document.createElement('div')
    logoFlags.className = 'logo_flags'
    const visa = document.createElement('img')
    visa.src = 'img/visa.png'
    visa.alt = 'Visa'
    const mastercard = document.createElement('img')
    mastercard.src = 'img/mastercard.png'
    mastercard.alt = 'Mastercard'
    const elo = document.createElement('img')
    elo.src = 'img/elo.png'
    elo.alt = 'Elo'
    logoFlags.appendChild(visa)
    logoFlags.appendChild(mastercard)
    logoFlags.appendChild(elo)
    return logoFlags
  }
}