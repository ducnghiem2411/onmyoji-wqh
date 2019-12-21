
function autocomplete(inp, arr) {

  //the autocomplete function takes two arguments
  //the text field element and an array of possible autocompleted values:

  var currentFocus;

  //Execute a function when someone writes in the text field

  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;

    //Close any already open lists of autocompleted values
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;

    //create a DIV element that will contain the items (values)
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");

    //append the DIV element as a child of the autocomplete container
    this.parentNode.appendChild(a);

    //set the limit for dropdown result
    var limit = 0;

    //for each item in the array
    for (i = 0; i < arr.length; i++) {
      //check if the item starts with the same letters as the text field value
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {

        //create a DIV element for each matching element
        b = document.createElement("DIV");

        //make the matching letters bold
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);

        //insert a input field that will hold the current array item's value
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

        //execute a function when someone clicks on the item value (DIV element)
        b.addEventListener("click", function (e) {

          //insert the value for the autocomplete text field
          inp.value = this.getElementsByTagName("input")[0].value;

          //close the list of autocompleted values, or any other open lists of autocompleted values
          closeAllLists();
        });
        if (limit <= 4) {
          a.appendChild(b);
          limit += 1;
        }
      }
    }

  });

  //execute a function presses a key on the keyboard
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      //If the arrow DOWN key is pressed, increase the currentFocus variable
      currentFocus++;
      //and and make the current item more visible
      addActive(x);
    } else if (e.keyCode == 38) { //up
      //If the arrow UP key is pressed, decrease the currentFocus variable
      currentFocus--;
      //Make the current item more visible
      addActive(x);
    } else if (e.keyCode == 13) {
      //If the ENTER key is pressed, prevent the form from being submitted
      e.preventDefault();
      if (currentFocus > -1) {
        //and simulate a click on the "active" item
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    //close all autocomplete lists in the document, except the one passed as an argument
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  // execute a function when someone clicks in the document
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });

}

//initiate the autocomplete function
autocomplete(document.getElementById("input"), monsters);

let searchBtn = document.getElementById("search-btn");
searchBtn.onclick = search;

let inputForm = document.getElementById("input");
inputForm.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.getElementById("search-btn").click();
  }
});

function showLocationData(monsterName) {
  let obj = model[`${monsterName}`]
  let result = `<h4>${obj.name}</h4>`
  for (const key in obj) {
    if (key != "name") {
      let details = `<p>${key} has [ ${obj[key]} ]</p>`
      result += details;
    }
  }
  document.getElementById("result").innerHTML = result;
}


function search(monster) {
  document.getElementById("result").innerHTML = "";
  monster = document.getElementById("input").value
  stringConverterAndRender(monster);
}

function stringConverterAndRender(str) {
  //Remove all white space of string got from input
  let monsterName = str.replace(/ /g, '').toLowerCase()

  //Get location data from model by input
  if (model[`${monsterName}`]) {
    showLocationData(monsterName);
  }

  //Get location data by tip
  if (monsterName == "kite" || monsterName == "blueskin") {
    showLocationData("blueimp");
  }
  if (monsterName == "tears" || monsterName == "rain") {
    showLocationData("ameonna");
  }
  if (monsterName == "fisherman" || monsterName == "sea" || monsterName == "beard" || monsterName == "mustache" || monsterName == "cane" || monsterName == "mustache") {
    showLocationData("umibozu");
  }
  if (monsterName == "butt" || monsterName == "slapping" || monsterName == "redghost") {
    showLocationData("redimp");
  }
  if (monsterName == "drum") {
    showLocationData("yellowimp");
  }
  if (monsterName == "moss" || monsterName == "wall") {
    showLocationData("norikabe");
  }
  if (monsterName == "seductive" || monsterName == "redtail" || monsterName == "cherrytree") {
    showLocationData("mio");
  }
  if (monsterName == "orb" || monsterName == "horn" || monsterName == "fortune" || monsterName == "luck" || monsterName == "luckwealth") {
    showLocationData("zashiki");
  }
  if (monsterName == "bubbles") {
    showLocationData("koi");
  }
  if (monsterName == "waterball" || monsterName == "waterlily" || monsterName == "river" || monsterName == "leaf") {
    showLocationData("kappa");
  }
  if (monsterName == "offering" || monsterName == "feathers") {
    showLocationData("oguna");
  }
  if (monsterName == "feathercoat" || monsterName == "younggirl" || monsterName == "littlegirl") {
    showLocationData("doujo");
  }
  if (monsterName == "poison" || monsterName == "bugs") {
    showLocationData("kodokushi");
  }
  if (monsterName == "naginata") {
    showLocationData("karasutengu");
  }
  if (monsterName == "dandelion" || monsterName == "healing" || monsterName == "ding") {
    showLocationData("kusa");
  }
  if (monsterName == "armor" || monsterName == "harden" || monsterName == "petrified") {
    showLocationData("samuraix");
  }
  if (monsterName == "scarecrow" || monsterName == "cursenail" || monsterName == "curseddart" || monsterName == "strawdoll") {
    showLocationData("ushinotoki");
  }
  if (monsterName == "stonebuddha" || monsterName == "diamond" || monsterName == "sutra") {
    showLocationData("hitotsume");
  }
  if (monsterName == "shell") {
    showLocationData("shuzu");
  }
  if (monsterName == "minidrum" || monsterName == "littlefairy" || monsterName == "cute" || monsterName == "drum") {
    showLocationData("chocho");
  }
  if (monsterName == "stonehammer" || monsterName == "strong") {
    showLocationData("yamawaro");
  }
  if (monsterName == "mahjong" || monsterName == "cheat" || monsterName == "gambling" || monsterName == "ceramic") {
    showLocationData("jikikaeru");
  }
  if (monsterName == "bird" || monsterName == "house" || monsterName == "protection" || monsterName == "purpledog") {
    showLocationData("inugami");
  }
  if (monsterName == "bone" || monsterName == "hatred") {
    showLocationData("honeonna");
  }
  if (monsterName == "candles" || monsterName == "coffins") {
    showLocationData("kyonshiani");
  }
  if (monsterName == "puppet" || monsterName == "control") {
    showLocationData("puppeteer");
  }
  if (monsterName == "abeautifulfairy" || monsterName == "accessories") {
    showLocationData("momiji");
  }
  if (monsterName == "bell" || monsterName == "nightmare") {
    showLocationData("yumekui");
  }
  if (monsterName == "dance" || monsterName == "flower") {
    showLocationData("momo");
  }
  if (monsterName == "soupbowl" || monsterName == "guitar" || monsterName == "teeth") {
    showLocationData("mouba");
  }
  if (monsterName == "blood" || monsterName == "bats") {
    showLocationData("vampira")  
  }
  if (monsterName == "dagger" || monsterName == "blackscythe" || monsterName == "tantosword") {
    showLocationData("kuromujou");
  }
  if (monsterName == "white" || monsterName == "takelife") {
    showLocationData("shiromujou");
  }
  if (monsterName == "hammer" || monsterName == "plow" || monsterName == "rake") {
    showLocationData("kamaitachi");
  }
  if (monsterName == "paperfan" || monsterName == "scholar") {
    showLocationData("youko");
  }
  if (monsterName == "bigwings" || monsterName == "flute") {
    showLocationData("ootengu");
  }
  if (monsterName == "ghostmask" || monsterName == "hell") {
    showLocationData("enma");
  }
}

