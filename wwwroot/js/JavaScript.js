//variable to get data from from
var submit = document.getElementById("submitButton");

//form function to calculate grade
submit.addEventListener("click", function () {
    //getting value from form
    assignments = document.getElementById("assignments").value
    group_project = document.getElementById("group_project").value
    exams = document.getElementById("exams").value
    quizzes = document.getElementById("quizzes").value
    intex = document.getElementById("intex").value

    //getting weighted scored
    assignments = assignments * .50
    group_project = group_project * .10
    quizzes = quizzes * .10
    exams = exams * .20
    intex = intex * .10

    total = assignments + group_project + quizzes + exams + intex
    letterGrade = ''

    //conditional statement to figure out letter grade
    if (total >= .94) {
        letterGrade = 'A'
    }
    else if (total < .94 && total >= .90) {
        letterGrade = 'A-'
    }
    else if (total < .90 && total >= .87) {
        letterGrade = 'B+'
    }
    else if (total < .87 && total >= .84) {
        letterGrade = 'B'
    }
    else if (total < .84 && total >= .80) {
        letterGrade = 'B-'
    }
    else if (total < .80 && total >= .77) {
        letterGrade = 'C+'
    }
    else if (total < .77 && total >= .74) {
        letterGrade = 'C'
    }
    else if (total < .74 && total >= .70) {
        letterGrade = 'C-'
    }
    else if (total < .70 && total >= .67) {
        letterGrade = 'D+'
    }
    else if (total < .67 && total >= .64) {
        letterGrade = 'D'
    }
    else if (total < .64 && total >= .60) {
        letterGrade = 'D-'
    }
    else {
        letterGrade = 'E'
    }
    //alert user the grade they received
    alert("You're score for the class is " + (Number(Math.round(total + 'e2') + 'e-2')) + "% and you got a " + letterGrade + " in the class.");
});

