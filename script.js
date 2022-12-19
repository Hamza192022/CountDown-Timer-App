const daysEle = document.getElementById("days")
const hoursEle = document.getElementById("hours")
const minsEle = document.getElementById("mins")
const secondEle = document.getElementById("seconds")

const newYears = "1 jan 2023";

function coundown(){
    const newyearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSecond =  (newyearDate - currentDate) /1000;
    const days =  Math.floor(totalSecond / 3600 / 24)
    const hours =  Math.floor(totalSecond / 3600 % 24)
    const mins =  Math.floor(totalSecond / 60 % 60);
    const seconds =  Math.floor((totalSecond) % 60);

    daysEle.innerHTML = timeFarmat(days);
    hoursEle.innerHTML =  timeFarmat(hours)
    minsEle.innerHTML = timeFarmat(mins)
    secondEle.innerHTML= timeFarmat(seconds)



    // console.log("mins:",mins ,"days:", days,"hours:",hours ,"seconds:",seconds);

}

function timeFarmat(time){
    return time<10 ? `0${time}` : time
}

coundown()
setInterval(coundown, 1000);