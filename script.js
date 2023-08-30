
var logintoIcon = document.getElementById("loginto");
logintoIcon.addEventListener("click", function() {
  var urlParams = new URLSearchParams(window.location.search);
  var loginSuccessful = urlParams.get('loginSuccessful') === 'true';

  if (loginSuccessful) {
    // Remove loginSuccessful=true and objectId from the URL
    var url = window.location.href.replace('?loginSuccessful=true&objectId=', '');

    // Reset the color of the icon to black
    logintoIcon.style.color = "black";

    // Show a logout alert message
    alert("You have been successfully logged out.");

    // Redirect to index.html after a short delay
    setTimeout(function() {
      window.location.href = "index.html";
    }, 1000); // Delay of 2 seconds before redirecting (adjust as needed)
  } else {
    // User is not logged in, redirect to login page
    window.location.href = "login.html";
  }
});


var urlParams = new URLSearchParams(window.location.search);
var loginSuccessful = urlParams.get('loginSuccessful') === 'true';
if (loginSuccessful) {

  logintoIcon.style.color = "red";
 }



///////
async function fetchUserData() {

const nameofUser = document.getElementById("nameofUser");
const emailofUser = document.getElementById("emailofUser");
  try {
  
    var urlParams = new URLSearchParams(window.location.search);
    var objectId = urlParams.get('objectId');

    const response = await fetch('https://backend-for-experiences.onrender.com/users/' + objectId);
    if (!response.ok) {
      throw new Error('Error fetching user data');
    }

    const data = await response.json();
	nameofUser.innerHTML = `${data.name}`;
	emailofUser.innerHTML = `${data.email}`;
	
    console.log(data);
	
  } catch (error) {
    console.error('Error:', error);
    
  }
}


fetchUserData();
