function gradingStudents(grades) {
    const result = [];
    grades.forEach(grade => {
        if (grade < 38) {
            result.push(grade);
        }
        else {
            const reminder = grade % 5;
            if (reminder > 2) {
                result.push(grade + 5 - reminder);
            }
            else {
                result.push(grade);
            }
        }
    })

    return result;
}

const result = gradingStudents([73, 67, 38, 33]);
console.log(result);