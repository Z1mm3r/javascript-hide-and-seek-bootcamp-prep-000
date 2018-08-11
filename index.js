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
  var selectorListArray = [];
  var selectorList = selector.querySelectorAll("div");
  selectorListArray.push(selectorList);
  
  while(selectorListArray.length > 0)
  {
    selectorList = selectorListArray.pop();
    
    for(let i = 0; i < selectorList.length; i++)
    {
      
       selectorListArray.push(selectorList[i].querySelector("div"));
       selector = selectorList[i];
     
    }
    
  }
  
  return selector;
  
}