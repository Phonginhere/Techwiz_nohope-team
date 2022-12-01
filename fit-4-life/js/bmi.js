function validateForm() {
  var age = document.getElementById("age");
  var height = document.getElementById("height");
  var weight = document.getElementById("weight");
  var male = document.getElementById("m");
  var female = document.getElementById("f");
  var form = document.getElementById("form");


  if (age.value == '' || height.value == '' || weight.value == '' || (male.checked == false && female.checked == false)) {
    
    alert("All fields are required!");
    document.getElementById("submit").removeEventListener("click", countBmi);
  } else {
    console.log(age.value);
    console.log(height.value);
    console.log(weight.value);
    console.log(male.checked);
    console.log(female.checked);
    var p = [age.value, height.value, weight.value];
    if (male.checked) {
      p.push("male");
    } else if (female.checked) {
      p.push("female");
    }
    form.reset();
    var bmi = Number(p[2]) / (Number(p[1]) / 100 * Number(p[1]) / 100);

    
    //kiểm tra các bảng
    if(document.getElementById("bmi1").style.display = "block") {
      console.log("đã chạy vào if")
      document.getElementById("bmi2").style.display = "none"
      document.getElementById("bmi3").style.display = "none"
      document.getElementById("bmi4").style.display = "none"
    } 
    else if(document.getElementById("bmi2").style.display = "block") {
      console.log("đã chạy vào else if")
      document.getElementById("bmi1").style.display = "none"
      document.getElementById("bmi3").style.display = "none"
      document.getElementById("bmi4").style.display = "none"
    }
    else if(document.getElementById("bmi2").style.display = "block") {
      console.log("đã chạy vào else if")
      document.getElementById("bmi1").style.display = "none"
      document.getElementById("bmi2").style.display = "none"
      document.getElementById("bmi4").style.display = "none"
    }
    else if(document.getElementById("bmi4").style.display = "block") {
      console.log("đã chạy vào else if")
      document.getElementById("bmi1").style.display = "none"
      document.getElementById("bmi2").style.display = "none"
      document.getElementById("bmi3").style.display = "none"
    }


    var result = '';
    var result = '';
    if (bmi < 18.5) {
      result = 'Underweight';
    } else if (18.5 <= bmi && bmi <= 24.9) {
      result = 'Healthy';
    } else if (25 <= bmi && bmi <= 29.9) {
      result = 'Overweight';
    } else if (30 <= bmi && bmi <= 34.9) {
      result = 'Obese';
    } else if (35 <= bmi) {
      result = 'Extremely obese';
    }
    //document.getElementById("demo").innerHTML = result + " BMI: " + bmi.toFixed(2);
    // var h1 = document.createElement("h1");
    // var h2 = document.createElement("h2");

    // var t = document.createTextNode(result);
    // var b = document.createTextNode('BMI: ');
    // var r = document.createTextNode(parseFloat(bmi).toFixed(2));

    // h1.appendChild(t);
    // h2.appendChild(b);
    // h2.appendChild(r);

    // document.getElementById("form").appendChild(h1);
    // document.getElementById("form").appendChild(h2);

    document.getElementById('h1').innerHTML = result;
    document.getElementById('h2').innerHTML = 'BMI: ' + parseFloat(bmi).toFixed(2);
  }
  document.getElementById("submit").removeEventListener("click", validateForm);
}