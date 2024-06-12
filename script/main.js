document.addEventListener('DOMContentLoaded', () => {
    const mainForm = document.getElementById('main_form');
    const birthDate = document.getElementById('birth_date');
    const currentDate = document.getElementById('current_date');
    let btn = document.getElementById('btn');
    let err = document.getElementById('err');
    let realAgeDisplay = document.getElementById('real_age_display');
    console.log('Age calculator:');

    const AgeCalculate = (birthDateString, currentDateString) => {
        let birthDate = new Date(birthDateString);
        let currentDate = new Date(currentDateString);

        if (isNaN(birthDate) || isNaN(currentDate)) {
            return "Fatal ERROR!!!";
        }

        let realAge = currentDate.getFullYear() - birthDate.getFullYear();
        let birthMonth = birthDate.getMonth();
        let birthDay = birthDate.getDate();
        let currentMonth = currentDate.getMonth();
        let currentDay = currentDate.getDate();

        if (currentMonth < birthMonth) {
            // Якщо поточний місяць менший за місяць народження
            realAge--;
        } else if (currentMonth === birthMonth) {
            if (currentDay < birthDay) {
                realAge--;
            }
        }
        return realAge;
    };

    btn.addEventListener('click', () => {
        let birthDateValue = birthDate.value;
        let currentDateValue = currentDate.value;

        if (!birthDateValue || !currentDateValue) {
            err.textContent = "Both dates are required!";
            realAgeDisplay.textContent = "";
            return;
        }

        let realAge = AgeCalculate(birthDateValue, currentDateValue);
        
        if (realAge === "Fatal ERROR!!!") {
            err.textContent = realAge;
            realAgeDisplay.textContent = "";
        } else if 
        (realAge > 125) {
            err.textContent="Peoples doesnt live so more years!!!"
            realAgeDisplay.textContent="";
        } 
       
        else if (realAge < 0) {
            err.textContent = "Not exist Ages";
            realAgeDisplay.textContent = "";
        
        } 
        else {
            err.textContent = "";
            realAgeDisplay.textContent = `You are ${realAge} years old`;
            console.log(`Real age:  ${realAge} years old`);
        }
    });
});