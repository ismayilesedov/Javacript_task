//#region Task-1
function printFullName(name,surname){
    if(typeof name!="string"||typeof surname!="string"){
        return "Not text.";
    }
    else{
        return(`Fullname is: ${surname} ${name}`);   
    }
}
//#endregion

//#region Task-2
let printFullNameWithParam = (firstName, lastName)=>{return `${firstName} ${lastName}`}
//#endregion

//#region Task-3

function perimeterOfRectangle(width,length){
    if(typeof width!="number"||typeof length!="number"){
        return "Enter a number.";
    }
    else{
        return (2*(length+width));
    }
}

//#endregion

//#region Task-4

function calculateBMI(weight,height){
    if(typeof weight!="number"||typeof height!="number"){
        return "Enter a number."
    }
    else{
        let bmi=weight/((height/100)*(height/100));
        switch(true){
            case (18.5>bmi):
                return "underweight";
                break;
            case (18.5<=bmi&&bmi<=24.9):
                return "normal weight";
                break;
            case (25<=bmi && bmi<=29.9):
                return "overweight";
                break;
            case(bmi>=30):
            return "obese";
            break;
        }
    }
}

//#endregion


//#region Task-5

function findMax(value1,value2,value3){
    if(typeof value1!="number"|| typeof value2!="number"|| typeof value3!="number"){
        return "Enter a number.";
    }
    else{
        let array=[value1,value2,value3];
        let max=array[0];
        for(let i=0;i<array.length;i++){
            if(array[i]>max){
                max=array[i];
            }
        }
        return max;
    }
}

//#endregion

//#region Task-6

function pow(value,power){
    if(typeof value!="number"||typeof power!="number"){
        return "Enter a number."
    }
    else if(power>=0){
        let result=1;
        for(let i=0;i<power;i++){
            result=result*value;
        }
        return result;
    }
    else if(power<0){
        let result=1;
        for(let i=0; i<-power;i++){
            result=result*value;
        }
        return 1/result;
    }
}
//#endregion