const log = console.log.bind(console)
const hr = () => { log('------------------------------------') }
const hasKey = (obj, key) => {
  return obj && Object.prototype.hasOwnProperty.call(obj, key)
}

// subscriber

// Observer

class Publiser {
  constructor() {

  }

}

class Subject {
  constructor() {
    this.dict = {
      // click: [],
      // change: []
    }
    // this.observerList = []
  }

  add(event, observer) {
    let list = this.dict[event]
    if (list) {
      this.dict[event].push(observer)
    } else {
      this.dict[event] = [observer]
    }
  }

  remove(event, observer) {
    if (hasKey(this.dict, event)) {

    }
  }

  removeByEvent(event) {
    if (hasKey(this.dict, event)) {
      this.dict[event] = []
    }
  }

  removeAll() {
    this.dict = {}
  }

  trigger(event) {
    if (hasKey(this.dict, event)) {
      let list = this.dict[event]
      for (let i = 0; i < list.length; i++) {
        let item = list[i]
        item.go()
      }
    }
  }

  triggerAll() {

  }
}

class Observer {
  constructor(name) {
    this.name = name
  }
  set(name) {
    this.name = name
  }
  go() {
    log(`${this.name} running`)
  }
}

let ob1 = new Observer('sang')
let ob2 = new Observer('yi')
let ob3 = new Observer('min')

let s = new Subject()
s.add('click', ob3)
s.add('click', ob1)
s.add('click', ob2)

s.add('change', ob2)

s.add('blur', ob3)

s.trigger('click')
s.removeByEvent('click')
hr()
s.trigger('click')
hr()
s.trigger('blur')
ob3.set('new min')
s.trigger('blur')

