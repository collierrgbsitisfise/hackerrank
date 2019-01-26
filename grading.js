function gradingStudents(grades) {
    return grades.map(gr => {
        if (gr >= 38) {

            if (((gr + 1) % 5 === 0)) {
               return gr + 1; 
            }

            if (((gr + 2) % 5 === 0)) {
                return gr + 2;
            }
            
            return gr
        }

        return gr;
    })
}

console.log(gradingStudents([73,67,38,33]));