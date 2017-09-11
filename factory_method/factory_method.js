class Java {
  constructor(content = 'i am java') {
    this.content = content
    let container = document.getElementById('container')
    let div = document.createElement('div')
    div.innerHTML = this.content
    div.style.color = 'green'
    container.appendChild(div)
  }

}

class JS {
  constructor(content) {
    let container = document.getElementById('container')
    let div = document.createElement('div')
    div.innerHTML = content
    div.style.color = 'red'
    container.appendChild(div)

  }
}
function jobFactory(type, content) {
  const dict = {
    java: Java,
    js: JS,
  }
  if (dict[type]) {
    return new dict[type](content)
  }
}

// let j = new Java()
// let js = new JS('javascript')

jobFactory('js', 'newJavaScript')
jobFactory('java', 'hello java')
jobFactory('js', 'newJavaScript2')
jobFactory('java', 'hello java2')