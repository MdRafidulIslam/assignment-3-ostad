function printObjectProperties(person) {
    if (Object.keys(teacher).length === 0) {
        console.log("Object is empty")
    }

    for (let props in person) {
        console.log(props + ':' + person[props])
    }
}


var teacher = {
    name: 'Saiful Alam',
    age: 32,
    occupation: 'teacher'
}

printObjectProperties(teacher)


