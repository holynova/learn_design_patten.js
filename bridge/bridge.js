class UserInfo {
  constructor(name, grade, msgCount) {
    this.name = name
    this.grade = grade
    this.msgCount = msgCount
    this.init()
  }
  static new(name, grade, msgCount) {
    return new this(name, grade, msgCount)
  }
  changeColor(dom, color, bgc) {
    dom.style.color = color
    dom.style.backgroundColor = bgc
  }

  init() {
    const container = document.getElementById('container')
    let div = document.createElement('div')
    let nameSpan = document.createElement('span')
    let gradeSpan = document.createElement('span')
    let msgSpan = document.createElement('span')
    nameSpan.innerHTML = this.name
    gradeSpan.innerHTML = '等级' + this.grade
    msgSpan.innerHTML = '消息' + this.msgCount
    nameSpan.style.color = 'green'
    gradeSpan.style.color = 'red'
    // nameSpan.style.color = 'green'

    div.appendChild(nameSpan)
    div.appendChild(gradeSpan)
    div.appendChild(msgSpan)
    container.appendChild(div)

    // const spans = container.getElementsByTagName('span')
    const self = this
    nameSpan.onmouseover = function () {
      self.changeColor(this, '#fff', '#f60')
    }
    nameSpan.onmouseleave = function () {
      self.changeColor(this, '#f60', '#fff')
    }


  }
}

let u = UserInfo.new('春和景明', 9, 5)
