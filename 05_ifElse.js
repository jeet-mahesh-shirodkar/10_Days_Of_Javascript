/** 
 * Task
 Complete the getGrade(score) function in the editor.
 It has one parameter: an integer, score, denoting the number of points Julia earned on an exam.
 It must return the letter corresponding to her grade according to the following rules 
 
 Rules:
 if 25 < score <= 30 then grade=A;
 if 20 < score <= 25 then grade=B;
 if 15 < score <= 20 then grade=C;
 if 10 < score <= 15 then grade=D;
 if 05 < score <= 10 then grade=E;
 if 00 < score <= 05 then grade=F;
 
 */
function getGrade(score) {
    let grade;
    // Write your code here
    if(score>25 && score <= 30){
        grade="A";
        }
        else if(score >20 && score <= 25){
            grade="B";
        }
        else if(score>15 && score <= 20){
                grade="C";
        }
        else if(score>10 && score <=15){
                 grade ="D";
        }
        else if(score>5 && score <=10){
              grade="E"
        }
    else{
        grade="F";
        }
        return grade;
    }

    