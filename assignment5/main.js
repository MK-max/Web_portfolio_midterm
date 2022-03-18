var topic1_edit;    //ประกาศตัวแปรรับค่า เพื่อแสดงข้อความ
var comment1_edit;
var comment2_edit;

window.onload = setGlobal_edit; //ประกาศเพื่อบอกว่าให้รัน setGlobal_edit หลังจากเว็ปโหลดเสร็จ
function setGlobal_edit(){      
    topic1_edit = document.getElementById("topic1");
    comment1_edit = document.getElementById("comment1");
    comment2_edit = document.getElementById("comment2");
}

//--------------------------------------------------------
function postFunction(){    //ฟังก์ชั่นกด Post
    var text_inbox_post = document.getElementById("text1").value;   

    if(topic1_edit.innerText == "")  //innerText = การนำข้อความใหม่มาแสดงแทนของเดิม (ในที่นี่คือความว่างแปล่า "") ซึ่งจะแสดงผลได้ 1 ครั้งเท่านั้น
    {
        topic1_edit.innerText = text_inbox_post;
    }

    else if(comment1_edit.innerText == "")
    {
        comment1_edit.innerText = text_inbox_post;
    }

    else if(comment2_edit.innerText == "")
    {
        comment2_edit.innerText = text_inbox_post;
    }
}

//--------------------------------------------------------
function clearFunction(){
    topic1_edit.innerText = "";
    comment1_edit.innerText = "";
    comment2_edit.innerText = "";
}

