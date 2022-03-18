window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin")
	form.onsubmit = checkLogin;
}

function checkLogin(){
	//เอาค่า username และ password จากหน้า register
	const queryString = window.location.search;

	//แสดงข้อมูลบนลิงค์ URL
	const urlParams = new URLSearchParams(queryString);

	//ของหน้า register
	const username = urlParams.get("username");
	const password = urlParams.get("password");

	//ของหน้า Login
	var usernameLogin = document.forms["myLogin"]["username"].value;
    var passwordLogin = document.forms["myLogin"]["password"].value; 

	if(username != usernameLogin)
	{
		alert("Username are not identical. Try again.");
		return false;
	}

	else if(password != passwordLogin)
	{
		alert("Password are not identical. Try again.");
		return false;
	}

	else
	{
		alert("Correct");
	}
}

			