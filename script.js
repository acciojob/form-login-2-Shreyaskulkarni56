//your JS code here. If required.
document.getElementById("myForm").addEventListener("submit" ,function(event){
	event.preventDefault();

    let firstname = document.getElementById("firstname").values;
	let secondname = document.getElementById("secondname").values;
	let phonenumber = document.getElementById("phonenumber").values;
	let emailid = document.getElementById("emailid").values;

	alert(
        "First Name: " + firstName + " " +
        "Last Name: " + lastName + " " +
        "Phone Number: " + phoneNumber + " " +
        "Email ID: " + email
    );
})