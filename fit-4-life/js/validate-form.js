var continues;
var x = document.getElementsByTagName("Input");

function validate_input() {
    // kiem tra input khong trong
    var psw = document.getElementById("psw").value;
    var psw_repeat = document.getElementById("psw-repeat").value;
    for (var i = 0; i < x.length - 2; i++) {
        if (x[i].value.trim().length == 0) {
            x[i].style.border = "solid red";
        }
        else {
            x[i].style.borderStyle = "none";
        }
    }

    if (psw != psw_repeat) {
        document.getElementById("psw-repeat").style.border = "solid red";
    } else {
        document.getElementById("psw-repeat").style.border = "none"
    }
}
function sign_up() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    for (var i = 0; i < x.length - 2; i++) {
        if (x[i].style.border == "solid red" || x[i].value == "") {
            continues = false;
            break;
        } else {
            continues = true;
        }
    }

    if (continues) {
        //document.getElementById('id01').style.display='none';
        var obj = { 'name': name, 'gmail': email, 'password': document.getElementById("psw").value };
        var text = JSON.stringify(obj);
        console.log(text);
        window.location.replace("index.html");
        alert("Xin chào " + name + " có email là " + email)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ////////////////////////// /  // //  / ////////// /////////////////////////////////////////////////////////////////////////
    } else {
        alert("Bạn đang nhập sai.")
    }
}
function sign_in() {
    var request = new XMLHttpRequest();
    var name_si = document.getElementById("name_si").value;
    var psw_si = document.getElementById("psw_si").value;
    request.open('GET', 'test.json', true);

    request.onload = function () {
        // begin accessing JSON data here
        var data = JSON.parse(this.response);
        for (var i = 0; i < data.length; i++) {
            if((data[i].name == name_si)&&(data[i].password == psw_si)){
                alert("Xin chào " + name_si + " đã sử dụng sản phẩm của chúng tôi");
                window.location = "index.html";
            }
            console.log(data[i].name + ' have password : ' + data[i].password + '.');
        }
    }
    request.send();
 
}
