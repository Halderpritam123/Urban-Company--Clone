document.querySelector("form").addEventListener("submit", Payment);
  var payM = document.getElementById("Pay");
  payM.value = "Proced to pay";

  function Payment(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var cvv = document.getElementById("cvv").value;
    var date = document.getElementById("date").value;

    if (
      number.length != 0 &&
      cvv.length === 3 &&
      date.length != 0 &&
      name.length != 0
    ) {
      alert("Otp send to your mobile");
      window.location.href = "otpPage.html";
    } else {
      alert("Enter correct information");
    }
  }
  
