function FormDataValidate()
{
    var country = document.getElementById("countryId").value;
    var state = document.getElementById("stateId").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var pincode = parseInt(document.getElementById("pincode").value);
    var phone = parseInt(document.getElementById("phone").value);
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;

 let result = /^[a-zA-Z ]+$/.test(fname);
 let resultlname = /^[a-zA-Z ]+$/.test(lname);
debugger;
 // first name checking
  if(fname == "" || !result || fname.trim() == "")
 {
    document.getElementById('spanfname').innerHTML = "<strong>Enter First Name allowed [a-zA-Z]</strong>";
    return false;
 }
 else if(fname.length < 3 || fname.length > 40)
 {
    document.getElementById('spanfname').innerHTML = "<strong>Length 3 to 40 allowed</strong>";
 }
 else 
 {
    document.getElementById('spanfname').innerHTML = "";
 }
 // last name checking 
 if(lname == "" || !resultlname || lname.trim() == "")
 {
    document.getElementById('spanlname').innerHTML = "<strong>Enter Last Name allowed [a-zA-Z]</strong>";
    return false;
 }
 else if(lname.length < 3 || lname.length > 40)
 {
    document.getElementById('spanlname').innerHTML = "<strong>Length 3 to 40 allowed</strong>";
    return false;
 }
 else{
    document.getElementById('spanlname').innerHTML = "";
 }
 // pincode checking
 if(document.getElementById("pincode").value == "")
 {
    document.getElementById('spanpincode').innerHTML = "<strong>Enter Pincode</strong>";
    return false;
 }
 else if(document.getElementById("pincode").value.length < 3 || document.getElementById("pincode").value.length > 20)
 {
    document.getElementById('spanpincode').innerHTML = "<strong>Length 3 to 20 allowed</strong>";
    return false;
 }
 else{
    document.getElementById('spanpincode').innerHTML = "";
 }
 // phone number checking
 if(document.getElementById("phone").value == "")
 {
    document.getElementById('spanphone').innerHTML = "<strong>Enter Phone Number</strong>";
    return false;
 }
 else{
    let Phonelen = document.getElementById("phone").value
    if(Phonelen.length < 10 || Phonelen.length > 10)
    {
        document.getElementById('spanphone').innerHTML = "<strong>Length Must Be 10 digits</strong>";
        return false;
    }
    document.getElementById('spanphone').innerHTML = "";
 }

 // Country DropDown Validation
 if(country == "")
 {
    document.getElementById('spancountry').innerHTML = "<strong>Select Country</strong>";
    return false;
 }
 else {
    document.getElementById('spancountry').innerHTML = "";
 }
 // State DropDown Validation
 if(state == "")
 {
    document.getElementById('spanstate').innerHTML = "<strong>Select State</strong>";
    return false;
 }
 else{
    document.getElementById('spanstate').innerHTML = "";
 }
 // email validation
 if(email == "" || email.trim() == "")
 {
    document.getElementById('spanemail').innerHTML = "<strong>Enter Email</strong>";
    return false;

 }
 else if( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ))
{
    document.getElementById('spanemail').innerHTML = "<strong>Enter Valid Email</strong>";
    return false;
}
 else{
    document.getElementById('spanstate').innerHTML = "";
}
// Address Validation
if(address == "" || address.trim() == "")
{
    document.getElementById("spanaddress").innerHTML = "<strong>Enter Address</strong>";
    return false;
}
else {
    document.getElementById("spanaddress").innerHTML = "";
}

    // var cc = $("#countryId").val();
    const formData = new FormData();
    formData.append("country", country);
    formData.append("state", state);
    formData.append("fname", fname);
    formData.append("lname", lname);
    formData.append("pincode", pincode);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("address", address);

    $.ajax({
        url: 'https://localhost:7237/api/RegisterDatas/AddUser',
        method: 'POST',
        dataType: 'json',
        contentType: false, // Set to false to prevent jQuery from setting the Content-Type header
        processData: false, // Set to false to prevent jQuery from processing the data
        data: formData,
        success: function (data) {
        //alert("Saved successfully");
        if(data.message == "User Addded Sucessfully")
        {
          iziToast.success({
            timeout: 10000,
            title: 'Hey',
            message: data.message
        });
        }
        else if(data.message == 'User already exists')
        {
          iziToast.success({
            timeout: 10000,
            title: 'Hey',
            message: data.message
        });
        }
        },
        error: function(jqXHR, textStatus, errorThrown) {
        //alert("Request failed: " + textStatus);
        iziToast.error({
            timeout: 10000,
            title: 'Request failed',
            message: errorThrown
        });
        }
    })
    return false;
}
