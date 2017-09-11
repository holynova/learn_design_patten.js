class LoginAlert {
  constructor(content) {
    this.content = content
  }
  show() {
    alert(this.content)
  }
}

class LoginConfirm {
  constructor(content) {
    this.content = content
  }
  show() {
    confirm(this.content)
  }
}

class LoginPrompt {
  constructor(content) {
    this.content = content
  }
  show() {
    prompt(this.content)
  }
}

class PopFactory {
  constructor(content) {
    this.content = content
  }
  gen(type, content) {
    switch (type) {
      case 'alert':
        return new LoginAlert(content)
        break
      case 'confirm':
        return new LoginConfirm(content)
        break
      case 'prompt':
        return new LoginPrompt(content)
        break
      default:
        break
    }
  }
}

let f = new PopFactory()
// f.gen('alert', 'hello alert').show()
// f.gen('confirm', 'hello confirm').show()
f.gen('prompt', 'hello prompt').show()