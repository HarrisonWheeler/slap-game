let health = 100;


let damageBtns = {
  slap: {
    title: "Slap",
    damage: 1,
    hitCount: 0,
    countId: "slap-count"
  },
  punch: {
    title: "Punch",
    damage: 5,
    hitCount: 0,
    countId: "punch-count"
  },
  kick: {
    title: "Kick",
    damage: 10,
    hitCount: 0,
    countId: "kick-count"
  },
}

// At the beginning of page load, drawButtons()
// drawButtons()


// ANCHOR Define the slap, kick, and punch functions

function damage(damageType) {
  // if damageType = slap, then 
  // if damageType = punch, then -= 5
  // if damageType = kick, then -= 10

  let damageElem = damageBtns[damageType.toLowerCase()].damage
 

  health -= damageElem

  damageBtns[damageType.toLowerCase()].hitCount += 1

  console.log(health);
  drawHealth()
  drawCount(damageType)
}

function drawHealth() {
  // take in damage info and dump result at health on page
  document.getElementById("health-count").innerText = `${health}`
}

  // Slap
function drawCount(damageType){

// make var called insertCount that is Slap, but lowercase, then look at countID
  let insertCount = damageBtns[damageType.toLowerCase()].countId
  let count = damageBtns[damageType.toLowerCase()].hitCount

 
  document.getElementById(`${insertCount}`).innerText = count

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