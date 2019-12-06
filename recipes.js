function myHide()
{
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("Hide");

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

function myHide2()
{
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("Hide2");

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

function myHide3()
{
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("Hide3");

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

function myHide4()
{
  var dots = document.getElementById("dots4");
  var moreText = document.getElementById("more4");
  var btnText = document.getElementById("Hide4");

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

function myHide5()
{
  var dots = document.getElementById("dots5");
  var moreText = document.getElementById("more5");
  var btnText = document.getElementById("Hide5");

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

function myHide6()
{
  var dots = document.getElementById("dots6");
  var moreText = document.getElementById("more6");
  var btnText = document.getElementById("Hide6");

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
    localStorage.ingredient= ingredient + "flour, Sugar, Baking powder, Cinnamon, Salt";
  }
  else if(recipe="CRbunnies")
  {
    localStorage.ingredient=ingredient + "raisins, Cinnamon Roll Dough";
  }
  else if(recipe="GoldenDrink")
  {
    localStorage.ingredient=ingredient+"Pineapple, Papaya";
  }
  else if(recipe="CoffeeCreamer")
  {
    localStorage.ingredient=ingredient+"Cashews, Medjool dates, Salt"
  }
  else if(recipe="Quinoa")
  {
    localStorage.ingredient=ingredient+"Quinoa";
  }
}
