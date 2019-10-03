function validate() {
    if (document.form.name.value == "") {
        alert("Please enter your name to continue!");
        document.form.name.focus();
        return false;
    }
    if (document.form.email.value == "") {
    alert("Please enter your Email address to continue!");
    document.form.name.focus();
    return false;
    }

    var emailinput = document.form.email.value;
    atsign = emailinput.indexOf("@");
    dotsign = emailinput.indexOf(".");

    if (atsign < 1 || (dotsign - atsign < 2 )) {
    alert("Please enter a valid Email address");
    document.form.name.focus();
    return false;
    }

    if (document.form.postcode.value == "") {
    alert("Please enter your Postcode to continue!");
    document.form.postcode.focus();
    return false;
    }

    if (document.form.choice.value == "choose") {
    alert("Please select an option!");
    return false;
    }

    return( true );


}