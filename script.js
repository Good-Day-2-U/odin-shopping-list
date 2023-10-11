const ulist = document.querySelector('ul')

const uinput = document.querySelector('input')

const ubutton = document.querySelector('button')

let newInput;




let uli = document.createElement("li")

let uspan = document.createElement("span")

let ubutton2 = document.createElement("button")

// uli.appendChild(uspan)
// uli.appendChild(ubutton2)

function buttonClicked() {
  // console.log("B")
  let newInput = document.querySelector('input').value;
  
  let uli = document.createElement("li")

  let uspan = document.createElement("span")

  let ubutton2 = document.createElement("button")
  ulist.appendChild(uli)
  uli.appendChild(uspan)
  uspan.textContent = newInput
  uli.appendChild(ubutton2)
  ubutton2.textContent = "Delete"
  uinput.textContent = document.querySelector('input').value = ""
  uinput.focus()
  ubutton2.textContent = "Delete"
  ubutton2.addEventListener("click", function(){
  uli.remove(uli)
  uinput.focus()
})
  return uli
}

// ubutton2.textContent = "Delete"
// ubutton2.addEventListener("click", function(){
//   uli.remove(uli)
//   uinput.focus()
// })

// uspan.textContent = newInput

// ulist.appendChild(uli)
