function QuestionSex(){
        let QuestionA = prompt("Ваш пол мужской(м), женский(ж)",);
        switch (QuestionA) {
         case "м":
            case "m":
             return 'мужской';
             break;
         case "ж":
            case "f":
             return 'женский';
             break;
         default:
             QuestionSex();
       }
     }


let firstName; let middleName; let lastName; let oldAge; let age; let sex; let All_Information;
const MIN_AGE = 0; const MAX_AGE = 150;

do{firstName = prompt('Введите ваше имя',)
}while(!firstName)

do{middleName = prompt('Введите ваше отчество', );
}while(!middleName)

do{lastName = prompt('Введите вашу фамилию', );
}while(!lastName)

do{
let userInput;
    do{userInput=prompt('age',);
    }while(!userInput);
        let userInputNormalize = '';
        for(const char of userInput){
            if(char === ','){
                userInputNormalize += '.';
            }else{userInputNormalize += char;
            }
        }
        age = userInputNormalize;
}while(!isFinite(age) || age > MAX_AGE || age < MIN_AGE);

if(age > 65){
    oldAge = 'да';
}else{oldAge = 'нет';}

sex = QuestionSex();

All_Information = `ФИО: ${lastName} ${firstName} ${middleName} \nВозраст: ${age} \nПол: ${sex} \nНа пенсии: ${oldAge}`

alert(All_Information);


// Возраст: ${age}
// Пол: ${sex}
// На пенсии: ${oldAge}`;


// ФИО: Иванов Иван Иванович
// Возраст: 43
// Пол: М
// На пенсии: Нет
