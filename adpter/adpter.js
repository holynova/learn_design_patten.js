const log = console.log
function show(obj) {
  let defaultParam = {
    name: 'foo',
    age: 22,
    college: {
      name: 'swjtu',
      city: '成都'
    }
  }
  // const formatedData = { ...defaultParam, name, age, college }
  const formatedData = Object.assign(defaultParam, obj)

  // log(formatedData)
  log(JSON.stringify(formatedData, null, 2))
  // log(`my name is ${name},${age} years old, college is ${college.name} which locates in ${college.city}`)
}

show({ name: 'sang', age: 30 })
show({ name: 'yi' })
show()
show({
  college: {
    name: 'stanford',
    // city: 'new'
  }
})