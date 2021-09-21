//Aplication 1

const classA = [
    {
        name: 'Elisa',
        grade: 9.8
    },
    {
        name: 'Giovanna',
        grade: 10
    },
    {
        name: 'Maria',
        grade: 2
    },
    {
        name: 'Nikolly',
        grade: 10
    }
]

const classB = [
    {
        name: 'Dani',
        grade: 10
    },
    {
        name: 'João',
        grade: 10
    },
    {
        name: 'José',
        grade: 0
    },
    {
        name: 'Marcos',
        grade: 5
    }
]

function calculateAverage(students){

    let sum = 0

    for(let i = 0; i < students.length; i++){

        sum = sum + students[i].grade
    }

    const average = sum / students.length

    return average
}

function sendMessage(average, clas){

    if (average > 5){
        console.log(`${clas} average: ${average}. Congrats!`)

    } else{
        console.log(`${clas} average: ${average}. Is not good.`)
    }
}

function markAsFlunked(student){

    student.flunked = false

    if(student.grade < 5){
        student.flunked = true
    }
}

function sendFlunkedMessage(student){

    if(student.flunked){
        console.log(`${student.name} flunked!`)
    }
}

function studentFluked(students){

    for(let student of students){

        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

studentFluked(classA)
studentFluked(classB)