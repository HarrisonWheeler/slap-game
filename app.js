let health = 100;


buttons {


}


// ANCHOR Define the slap, kick, and punch functions
function slap(){
  health--;
 console.log(health);
 
 //  drawHealth()
}

function kick(){
  health--;
 console.log(health);
 
 //  drawHealth()
}

function punch(){
  health--;
 console.log(health);
 
 //  drawHealth()
}




function drawHealth(){
 
}

// ANCHOR Dynamically add the buttons to the page. This allows buttons to be added later.
function drawButtons(){
  let template = ""
  for (let prop in menuItems) {
      let item = menuItems[prop]
      // if(even iteration add row)
      // template += whatever
      template += /*html*/`
      <div class="col-4 bg-light rounded border shadow-lg p-5">
              <h3>${item.title}</h3>
              <h5>${item.ingredients}</h5>
              <h5>Vegan: ${item.vegan}</h5>
              <h5>${item.price}</h5>
              <button class="btn btn-success btn-block" onclick="addToCart('${prop}')"> Buy ${item.title}</button>
          </div>
      `
  }

  document.getElementById("menu-items").innerHTML = template

}