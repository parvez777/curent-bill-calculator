
// Biddut Bill Er Hishab
// 0 theke 75 unit rate 3.80 taka
// 76 theke 200 unit rate 5.14 taka
// 201 theke 300 unit rate 5.36 taka
// 301 theke 400 unit rate 5.63 taka
// 401 theke 600 unit rate 8.70 taka
// 600 to above unit rate 9.98 taka

// function biddutBill(usedUnit){
//     let unit = 3.80;
//     let motBill = usedUnit * unit;

//     if(usedUnit > 75){
//         const newBill = usedUnit - 75;
//         motBill = newBill * 5.14 + 285;
//     }
//     if(usedUnit > 200){
//         const newBill = usedUnit - 200;
//         motBill = newBill * 5.36 + 927.5;
//     }
//     if(usedUnit > 300){
//         const newBill = usedUnit - 300;
//         motBill = newBill * 5.63 + 1463.5;
//     }
//     if(usedUnit > 400){
//         const newBill = usedUnit - 400;
//         motBill = newBill * 8.70 + 2026.5;
//     }
//     if(usedUnit > 600){
//         const newBill = usedUnit - 600;
//         motBill = newBill * 9.98 + 3766.5;
//     }

//     return motBill;
// }
// console.log(biddutBill(601));





function curentBill() {
    let unit = document.getElementById('input').value;
    let usedUnit = parseInt(unit);

    let unitRate = 3.80;
    let motBill = unitRate * usedUnit;

    if(usedUnit > 75){
        const newBill = usedUnit - 75;
        motBill = newBill * 5.14 + 285;
    }
    if(usedUnit > 200){
        const newBill = usedUnit - 200;
        motBill = newBill * 5.36 + 927.5;
    }
    if(usedUnit > 300){
        const newBill = usedUnit - 300;
        motBill = newBill * 5.63 + 1463.5;
    }
    if(usedUnit > 400){
        const newBill = usedUnit - 400;
        motBill = newBill * 8.70 + 2026.5;
    }
    if(usedUnit > 600){
        const newBill = usedUnit - 600;
        motBill = newBill * 9.98 + 3766.5;
    }

    // let finalResult = parseInt(motBill)

    document.getElementById('result').value = motBill;

}

function reset(){
    document.getElementById('input').value= '';
    document.getElementById('result').value= '';
}