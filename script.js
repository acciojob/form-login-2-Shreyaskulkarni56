document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("secondname").value;
    let phoneNumber = document.getElementById("phonenumber").value;
    let email = document.getElementById("emailid").value;

    alert(
        "First Name: " + firstName + " " +
        "Last Name: " + lastName + " " +
        "Phone Number: " + phoneNumber + " " +
        "Email ID: " + email
    );
});