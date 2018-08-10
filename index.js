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
  const selectorList = document.querySelectorAll("#app ul.ranked-List li");
  
  for (let i = 0; i < selectorList.length; i++)
  {
    selectorList[i].innerHTML = (praseInt(selectorList[i].innerHTML,10) + n).toString();
  }
}