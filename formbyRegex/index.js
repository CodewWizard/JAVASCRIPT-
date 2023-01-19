console.log("Project No 5");

validUser  = false;
validEmail = false;
validPhone = false;


//User input validation
let user = document.getElementById("user");

user.addEventListener("blur", (e) => {
  e.preventDefault();
//   console.log("Blurred username");
  let nameRegex = /^([a-zA-Z]){2,10}$/;
  let str = user.value;
  // console.log('String:',str);
  let result = nameRegex.exec(str);
//   console.log(result);

  if (nameRegex.test(str)) {
      validUser = true;
    // console.log(`MATCHED`);
    user.classList.remove("is-invalid");
  } else {
    validUser = false;
    // console.log(`DOES NOT MATCHED`);
    user.classList.add("is-invalid");
  }
});

//Email input validation
let email = document.getElementById("email");

email.addEventListener("blur", (e) => {
  e.preventDefault();
//   console.log("Blurred email");
  let emailRegex = /^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]){2,10}$/;
  let str = email.value;

  let result = emailRegex.exec(str);
//   console.log(result);

  if (emailRegex.test(str)) {
    validEmail = true;
    // console.log(`MATCHED`);
    email.classList.remove("is-invalid");
  } else {
    validEmail = false;
    // console.log(`DOES NOT MATCHED`);
    email.classList.add("is-invalid");
  }
});

// phone input validation
let phone = document.getElementById("phone");

phone.addEventListener("blur", (e) => {
  e.preventDefault();
//   console.log("Blurred phone");
  let phoneRegex = /^([0-9]){10}$/;
  let str = phone.value;

  let result = phoneRegex.exec(str);
//   console.log(result);

  if (phoneRegex.test(str)) {
      validPhone = true;
    // console.log(`MATCHED`);
    phone.classList.remove("is-invalid");
  } else {
    validPhone = false;
    // console.log(`DOES NOT MATCHED`);
    phone.classList.add("is-invalid");
  }
});
// console.log(user,email,phone);

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    if(validUser && validEmail && validPhone){
        // console.log("Submitted");
        let alerts = document.getElementById('alerts');
        alertsHtml = ` <div id="success" class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success !</strong> Your form has been submitted successfully.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div> `;
      alerts.innerHTML = alertsHtml;
    }
    else{
        // console.log("Not Submitted");
        let alerts = document.getElementById('alerts');
        alertsHtml = ` <div id="success" class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error !</strong> Your form has been not submitted.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div> `;
      alerts.innerHTML = alertsHtml;
    }
})

