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

  }
  else if(recipe="Pancakes")
  {

  }
  else if(recipe="CRbunnies")
  {

  }
  else if(recipe="GoldenDrink")
  {

  }
  else if(recipe="CoffeeCreamer")
  {

  }
  else if(recipe="Quinoa")
  {
    
  }
}
