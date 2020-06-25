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
  debugger
  health -= damageBtns[damageType.toLowerCase()].damage
  console.log(health);
  drawHealth()
}

function drawHealth() {
  // take in damage info and dump result at health on page
  document.getElementById("health-count").innerText = `${health}`
}



// ANCHOR Dynamically add the buttons to the page. This allows buttons to be added later.
function drawButtons() {
  let template = ""
  for (let key in damageBtns) {
    let item = damageBtns[key]
    template += /*html*/`
    <button class="btn btn-lg btn-primary" onclick="damage('${item.title}')"> ${item.title} </button>
    </div >

      `
  }

  document.getElementById("insert-btns").innerHTML = template

}

drawButtons()