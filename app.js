let health = 100;


let buttons = {
  slapBtn: "slap",
  punchBtn: "punch",
  kickBtn: "kick",
}

// At the beginning of page load, drawButtons()
// drawButtons()



// ANCHOR Define the slap, kick, and punch functions
function slap(){
  health--;
 console.log(health);
 
 //  drawHealth()
}

function kick(){
  health-5;
 console.log(health);
 
 //  drawHealth()
}

function punch(){
  health-10;
 console.log(health);
 
 //  drawHealth()
}




function drawHealth(){
  // after a button press, send "health" number to the header where the health output box is
  
}

// ANCHOR Dynamically add the buttons to the page. This allows buttons to be added later.
function drawButtons(){
  let template = ""
  for (let key in buttons) {
      let item = buttons[key]
      template += /*html*/`
      html here
      `
  }

  document.getElementById("insert-btns").innerHTML = template

}