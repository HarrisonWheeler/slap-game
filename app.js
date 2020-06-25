let health = 100;


let damageBtns = {
  slap: {
    title: "Slap",
    damage: 1
  },
  punch: {
    title: "Punch",
    damage: 5
  },
  kick: {
    title: "Kick",
    damage: 10
  }
}

// At the beginning of page load, drawButtons()
// drawButtons()



// ANCHOR Define the slap, kick, and punch functions

function damage(damageType) {
  // if damageType = slap, then 
  // if damageType = punch, then -= 5
  // if damageType = kick, then -= 10
  console.log(damageBtns[damageType].damage)

}


function slap() {
  health--;
  console.log(health);

  //  drawHealth()
}

function kick() {
  health -= 5;
  console.log(health);

  //  drawHealth()
}

function punch() {
  health -= 10;
  console.log(health);

  //  drawHealth()
}




function drawHealth() {
  // after a button press, send "health" number to the header where the health output box is

}

// ANCHOR Dynamically add the buttons to the page. This allows buttons to be added later.
function drawButtons() {
  let template = ""
  for (let key in damageBtns) {
    let item = damageBtns[key]
    template += /*html*/`
    <button class="btn btn-lg btn-primary" onclick="damage('${ item}')"> ${item} </button>
    </div >

      `
  }

  document.getElementById("insert-btns").innerHTML = template

}

drawButtons()