let names = [

  "Kantin",
  "EğlenceAlanı",
  "Teras",
  
  "D2501",
  "D2502",
  "D2503",
  "D2504",
  "D2505",
  "D2506",
  "D2507",
  "D2509",
  "D2510",
  "D2511",
  "D2512",


  "D2416",
  "D2417",
  "D2418",
  "D2408",
  "D2407",
  "D2406",
  "D2415",
  "D2414",
  "D2413",
  "D2412",
  "D2411",
  "D2410",
  "D2409",
  "D2401",
  "D2402",
  "D2403",
  "D2404",
  "D2405",

  "D2301",
  "D2302",
  "D2303",
  "D2304",
  "D2305",
  "D2306",
  "D2307",
  "D2308",
  "D2309",
  "D2310",
  "D2311",
  "D2312",
  "D2313",
  "D2314",
  "D2315",

  "D2201",
  "D2202",
  "D2203",
  "D2204",
  "D2205",
  "D2207",
  "D2242",
  "D2227",
  "D2228",
  "D2229",
  "D2230",
  "OnlineLAB",
  "DGiriş",

  "D2110",
  "D2109",
  "D2108",
  "D2107",
  "D2106",
  "TekmerGirisi",
  "TEKMER",
  "TuruncuKonferansSalonu",
  "MaviKonferansSalonu",

  "L001",
  "L002",
  "L003",
  "L004",
  "L006",
  "L007",
  "L008",
  "L009",
  "L010",
  "L011",
  "L019",
  "L023",
  "L024",
  "L026",
  "L028",
  "L029",
  "L030",
  "LAB028"
];

//Sort names in ascending order
let sortedNames = names.sort();
//reference
let beginInput = document.getElementById("beginInput");
//Execute function on keyup
beginInput.addEventListener("keyup", (e) => {
  //loop through above array
  //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
  removeElements();
  for (let i of sortedNames) {
    //convert beginInput to lowercase and compare with each string
    if (
      i.toLowerCase().startsWith(beginInput.value.toLowerCase()) &&
      beginInput.value != ""
    ) {
      //create li element
      let listItem = document.createElement("li");
      //One common class name
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + i + "')");
      //Display matched part in bold
      let word = "<b>" + i.substr(0, beginInput.value.length) + "</b>";
      word += i.substr(beginInput.value.length);

      //display the value in array
      listItem.innerHTML = word;
      document.querySelector("#list1").appendChild(listItem);
    }
  }
});
function displayNames(value) {
  beginInput.value = value;
  removeElements();
}
function removeElements() {
  //clear all the item
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}
