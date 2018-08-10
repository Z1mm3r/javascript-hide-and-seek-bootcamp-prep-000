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
  var selectorList = document.querySelectorAll("#app ul.ranked-list li");
  
  for (let i = 0; i < selectorList.length; i++)
  {
    selectorList[i].innerHTML = (parseInt(selectorList[i].innerHTML,10) + n).toString();
  }
}

function deepestChild()
{
  var selector = document.getElementById('grand-node')
  
  var selectorList = selector.querySelectorAll("div");
  
  while(selectorList)
  
}