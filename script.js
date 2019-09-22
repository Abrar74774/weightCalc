var gm = document.getElementById("1");
var lbs = document.getElementById("2");
var oz = document.getElementById("3");

gm.addEventListener("input", function(e){
  let grams = e.target.value;
  lbs.value = grams*0.0022046;
  oz.value = grams*0.035274;  
})

lbs.addEventListener("input", function(e){
  let pounds = e.target.value;
  gm.value = pounds*453.592;
  oz.value = pounds*16;
})

oz.addEventListener("input", function(e){
  let ounce = e.target.value;
  gm.value = ounce*28.3495;
  lb.value = ounce*0.0625;  
})