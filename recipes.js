function myFunction()
{
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


function makeList()
{
localStorage.recipe = "placeholder";


  document.getElementById("potatoes").innerHTML =  localStorage.recipe="pototoes";
  document.getElementById("Pancakes").innerHTML =  localStorage.recipe="Pancakes";
  document.getElementById("CRbunnies").innerHTML =  localStorage.recipe="CRbunnies";
  document.getElementById("GoldenDrink").innerHTML =  localStorage.recipe="GoldenDrink";
  document.getElementById("CofeeCreamer").innerHTML =  localStorage.recipe="CoffeeCreamer";
  document.getElementById("Quinoa").innerHTML =  localStorage.recipe="Quinoa";

  if (recipe="pototoes")
  {
    localStorage.ingredient= ingredient + "kosher salt, garlic powder, onion powder, black pepper";
  }
  else if(recipe="Pancakes")
  {

    <ul>3 cups of flour</ul>
    <ul>2 tablespoons of Sugar</ul>
    <ul>2 tablespoons of Baking powder</ul>
    <ul>5 teaspoons of cinnamon</ul>
    <ul>1 1/4 tablespoon of salt</ul>
  }
  else if(recipe="CRbunnies")
  {
    <ul>16 ounce package cinnamon roll dough with glaze </ul>
    <ul>5 raisins</ul>
  }
  else if(recipe="GoldenDrink")
  {
    <ul>1 1/2 cups pineapple cubes</ul>
    <ul>1 1/2 cups of papaya cubes(deseeded)</ul>
  }
  else if(recipe="CoffeeCreamer")
  {
    <ul>1/2 cup cashews</ul>
    <ul>4 pitted medjool dates</ul>
    <ul>1.5 cups of water</ul>
    <ul>1 pinch salt</ul>
  }
  else if(recipe="Quinoa")
  {
    quinoa
  }
}
