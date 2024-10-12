let comment 
let randNum
document.getElementById('submit-button').onclick = function() {
    comment = document.getElementById('comment').value; 
    //document.getElementById('output-p').textContent = `User: ${comment}`; 
    fortuneResult()
    document.getElementById('comment').value = '';
}




const fortuneResult = () => {

if (comment == "cu" || comment == "colorado" || comment == "the buffs") {
    document.getElementById('sentence').textContent = "With coach PRIME at the helm, they will never lose again!!";
} else if (comment == "alabama"||comment == "bama"|| comment == "ala" || comment =="ALA" || comment == "Alabama") {
    document.getElementById('sentence').textContent = "Probably not.  Remeber when you lost to Vanderbilt? hahaha"; 
} else if (comment == "oklahoma"||comment=="Oklahoma"||comment=="OU"||comment=="sooners"||comment=="ou") {
    document.getElementById('sentence').textContent = "Maybe.  Unless they are playing texas"; 
} else if (comment=="Michigan"||comment=="MICH"||comment=="wolverines"||comment=="Wolverines") {
    document.getElementById('sentence').textContent = "They should win as long as they are doing a good job stealing signs";
} else {
    randomFortune()
}
}

const randomFortune = () => {
    randNum = Math.floor(Math.random() * 5); 

    if (randNum == 0) {
        document.getElementById('sentence').textContent = "They will lose badly";
    } else if (randNum == 1) {
        document.getElementById('sentence').textContent = "Its going to be a close one!";
    } else if (randNum ==2) {
        document.getElementById('sentence').textContent = "lets just say, I hope you dont have any money on them this week";
    } else if (randNum == 3) {
        document.getElementById('sentence').textContent = "It looks to me like they will sneak by with a win!";
    } else if (randNum == 4) {
        document.getElementById('sentence').textContent = "How the heck would i know who's going to win";
    }
}