function validationForm() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  let flag = 1;
  if (username.value == "") {
    document.getElementById("usererror").innerText = "Username is empty";
    flag = 0;
  } else if (username.value.length < 3) {
    document.getElementById("usererror").innerText =
      "Username require min 3 char";
    flag = 0;
  } else {
    document.getElementById("usererror").innerText = " ";
    flag = 1;
  }

  if (password.value == "") {
    document.getElementById("passerror").innerText = "Password is empty";
    flag = 0;
  } else if (password.value.length < 8) {
    document.getElementById("passerror").innerText =
      "Password require min 8 char";
    flag = 0;
  } else {
    document.getElementById("passerror").innerText = " ";
    flag = 1;
  }

  if (flag) {
    return true;
  } else {
    return false;
  }
}
