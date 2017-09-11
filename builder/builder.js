const log = console.log
class Human {
  constructor(skill, hobby) {
    this.skill = skill || '技能保密'
    this.hobby = hobby || "爱好保密"
  }
  getSkill() {
    return this.skill
  }
  getHobby() {
    return this.hobby
  }
}

class Name {
  constructor(name) {
    let arr = name.split(/\s/)
    this.firstName = arr[0]
    this.lastName = arr[1]
  }
}

class Work {
  constructor(type) {
    const dict = {
      'code': { work: '程序员', info: '写代码' },
      'design': { work: '设计师', info: '画图' },
      'teacher': { work: '教师', info: '教书育人' },
      // 'code':{work:'程序员',info:'写代码'},
    }
    if (dict[type]) {
      this.work = dict[type].work
      this.info = dict[type].info
    } else {
      this.work = '不知道'
      this.info = "依然不知道"
    }
  }
}

class Person {
  constructor(name, work) {
    let person = new Human()
    person.name = new Name(name)
    person.work = new Work(work)
    return person
  }
}


let p = new Person('Jim Green', 'teacher')
log(p)
log(p.name.firstName)
log(p.work.info)
log(p.work.work)