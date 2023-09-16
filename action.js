// ------------------------------ For smooth scroll effect ------------------------------- //





function callFirst()
{
  document.getElementById("workSectionFirst").style.cssText="display: flex;height: 100%;width: 100%;flex-direction: column;flex-wrap: wrap;justify-content: space-around;";
  document.getElementById("workSectionSecond").style.display="none";
  document.getElementById("workSectionThird").style.display="none";
  document.getElementById("btnSlider1").style.backgroundColor="pink";
  document.getElementById("btnSlider2").style.backgroundColor="whitesmoke";
  document.getElementById("btnSlider3").style.backgroundColor="whitesmoke";
}
function callSecond()
{
  document.getElementById("workSectionFirst").style.display="none";
  document.getElementById("workSectionThird").style.display="none";
  document.getElementById("workSectionSecond").style.cssText="display: flex;height: 100%;width: 100%;flex-direction: column;flex-wrap: wrap;justify-content: space-around;";
  document.getElementById("btnSlider2").style.backgroundColor="pink";
  document.getElementById("btnSlider3").style.backgroundColor="whitesmoke";
  document.getElementById("btnSlider1").style.backgroundColor="whitesmoke";
}
function callThird()
{
  document.getElementById("workSectionFirst").style.display="none";
  document.getElementById("workSectionSecond").style.display="none";
  document.getElementById("workSectionThird").style.cssText="display: flex;height: 100%;width: 100%;flex-direction: column;flex-wrap: wrap;justify-content: space-around;";
  document.getElementById("btnSlider3").style.backgroundColor="pink";
  document.getElementById("btnSlider2").style.backgroundColor="whitesmoke";
  document.getElementById("btnSlider1").style.backgroundColor="whitesmoke";
}

function submitResponse()
{
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  alert(name+email+message);
  clearFields();
}

function clearFields()
{
  document.getElementById("name").value="";
  document.getElementById("email").value="";
  document.getElementById("message").value="";
}

function callLocation(id)
{
  const ButtonId = id;
  const href = document.getElementById(ButtonId).value
  window.open(href)
}


