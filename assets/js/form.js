// بعد از ارسال نمایش پیغام
// form validation
// تشخیص تغییر ورودی ها
// دکمه ریست فورم

function changeInput() {
  const firstName = document.getElementById("first-name");
  firstName.addEventListener("change", (element) => {
    console.log(element.target.value);
  });
  const lastName = document.getElementById("last-name");
  lastName.addEventListener("change", (element) => {
    console.log(element.target.value);
  });
  const birthDate = document.getElementById("birth-date");
  birthDate.addEventListener("change", (element) => {
    console.log(element.target.value);
  });
  const phoneNumber = document.getElementById("phone");
  phoneNumber.addEventListener("change", (element) => {
    console.log(element.target.value);
  });
  const emailAddress = document.getElementById("email-address");
  emailAddress.addEventListener("change", (element) => {
    console.log(element.target.value);
  });
}
changeInput();

function validateForm() {
  let firstName = document.forms["myForm"]["first-name"].value;
  if (firstName == "" || firstName == null) {
    alert("First name must be filled out");
    return false;
  }
  user.firstName = firstName.target.value;
  let lastName = document.forms["myForm"]["last-name"].value;
  if (lastName == "" || lastName == null) {
    alert("Last name must be filled out");
    return false;
  }
  let phoneNumber = document.forms["myForm"]["phone-number"].value;
  if (phoneNumber == "" || phoneNumber == null) {
    alert("phoneNumber name must be filled out");
    return false;
  }
  let emailAddress = document.forms["myForm"]["email"];
  if (emailAddress == "" || emailAddress == null) {
    alert("emailAddress must be filled out");
    return false;
  }
}

let user = {
  firstName: "",
  lastName: "",
  birthDate: "",
  phoneNumber: "",
  emailAddress: "",
};
function input() {
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const birthDate = document.getElementById("birth-date").value;
  const phoneNumber = document.getElementById("phone-number").value;
  const emailAddress = document.getElementById("email-address").value;
  console.log({ firstName, lastName, birthDate, phoneNumber, emailAddress });
}
function showMassege() {
  if (
    firstName == !"" &&
    lastName == !"" &&
    phoneNumber == !"" &&
    emailAddress == !""
  ) {
    alert("اطلاعات شما با موفقیت ارسال شد");
  }
}
