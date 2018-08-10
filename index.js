function getFirstSelector(selector)
{
  return document.querySelector(selector);
}

function nestedTarget()
{
  return document.querySelector("#nested .target");
}

function increaseRankBy(n)
{
  var selectorList = document.getElementById("app").querySelectorAll(".ranked-List li");
  
  console.log(selectorList);
  
  for (let i = 0; i < selectorList.length; i++)
  {
    selectorList[i].innerHTML = (praseInt(selectorList[i].innerHTML,10) + n).toString();
  }
}