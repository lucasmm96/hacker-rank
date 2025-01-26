'use strict';

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    const roundedGrades = [];
    grades.forEach(grade => {
        if (grade >= 38) {
            let newGrade = grade;
            while (newGrade % 5 != 0) newGrade++;
            if (newGrade - grade < 3) roundedGrades.push(newGrade);
            else roundedGrades.push(grade);
        } else {
            roundedGrades.push(grade);
        }
    });
    return roundedGrades;
}

let input = [ 73, 67, 38, 33 ];

let output = gradingStudents(input);

console.log(output);