window.onload = pageLoad; //จะทำงานหลังจากทุกอย่างบนหน้าเว็บไซต์โหลดเสร็จหมด
function pageLoad(){
	var form = document.getElementById("myForm"); //ตัวแปร form จะเก็บข้อมูล เพื่อส่งข้อมูลไปแสดงผลที่ ID-myForm
    form.onsubmit = validateForm; //ข้อมูลจะถูกส่งไปที่ validateForm (ตรวจสอบแบบฟอร์ม)
}

function validateForm() {
    //var firstname = document.forms["myform"]["firstname"]; //ตัวแปร firstname จะรับข้อมูลมาจาก ID-myform เพื่อส่งค่าไปที่ name="firstname"
    var lastname = document.forms["myForm"]["lastname"];
    var gender = document.forms["myForm"]["gender"];
    var bday = document.forms["myForm"]["bday"];
    var email = document.forms["myForm"]["email"];
    var username = document.forms["myForm"]["username"];
    var password = document.forms["myForm"]["password"];

    var errormsg = document.getElementById("errormsg");
    errormsg.innerText = ""; //ตอนนี้มีข้อความที่แทรกอยู่คือความว่างเปล่า

    var answer = true;
    /*if(firstname.value == "") //ใส่ .value เพื่อให้ตัวแปรมีค่าขึ้นมา
    {
        errormsg.innerText += "Don't forget to first name."
        Answer = false; //ถ้าลืมกรอก ถือว่าไมถูกต้อง(ประกาศบอกเฉยๆ)
    }*/

    if(lastname.value == "")
    {
        errormsg.innerText += "Don't forget to lastname."
        answer = false; 
    }

    if(gender.value == "")
    {
        errormsg.innerText += "Don't forget to gender."
        answer = false;
    }

    if(bday.value == "")
    {
        errormsg.innerText += "Don't forget to Birthday."
        answer = false;
    }

    if(email.value == "")
    {
        errormsg.innerText += "Don't forget to Email address."
        answer = false;
    }

    if(username.value == "")
    {
        errormsg.innerText += "Don't forget to Username."
        answer = false;
    }

    if(password[0].value != password[1].value) //ถ้ารหัสแรก ไม่ตรงกับรหัส2
    {
        errormsg.innerText += "Passwords are not identical. Try again."
        answer = false;
    }
    
    if (answer == false)
    {
        return false; //ถ้าตรวจสอบแล้วพบว่ามีการ Register ไม่ถูกต้อง ให้ return false 
    }
}

