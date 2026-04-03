//destructuring objects

const course ={
    coursename:"js",
    price:"999",
    courseinstructor:"hiteshc"
}

console.log(course.courseinstructor)//one way
const{courseinstructor}=course//another way

console.log(courseinstructor)

const navbar=() => {

}
navbar(company="sneha")