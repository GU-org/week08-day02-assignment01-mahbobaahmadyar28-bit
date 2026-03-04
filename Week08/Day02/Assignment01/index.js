function bmiCalc(w,h){
    bmi=w/(h*h);
    return bmi;
}

function bmiCalculator(weight, height) {
    var bmi = weight/ (height*height);

    if (bmi <18.5) {
        return "Your BMI is " + bmi + ", so you are under weight.";

    } else if (bmi >=18.5 && bmi <=24.9) {
             return "Your BMI is " + bmi + ", so you have a normal weight.";

        } else {
            return "Your BMI is " + bmi + ", so you are overweight." ; }
}