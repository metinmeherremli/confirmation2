var btn = document.getElementById("btn")
var text = document.getElementById("text")

var Userdata = []

var username = prompt("Please enter your name")
var userpasword = prompt("PLease enter your Pasword")
var confirmation = prompt("please confirm your your pasword")
var userage =  +prompt("please enter your age")

function register(){
    if (userage > 18 && userpasword == confirmation ) {
        text.innerText = username + " " + "you registered"
        Userdata.push(username , userpasword)
        console.log(Userdata);
     }else if (userpasword !== confirmation && userage < 18) {
        alert( username  + " " + "your pasvord and age  was incorrect")
    }
    else if(userpasword !== confirmation ){
        alert( username  + " " + "your pasvord was incorrect")
    } 
    else if(userage < 18){
        alert( username  + " " + "your age is under 18")
    }
  
}

