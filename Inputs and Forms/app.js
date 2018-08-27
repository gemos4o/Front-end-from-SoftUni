// REGISTER SECTION
$("#emko").blur(function () {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var emailaddress = $("#emko").val();
    if (!emailReg.test(emailaddress))
        $("#emailspan").html('<font color="#DC3545"><br>Please enter valid Email address');
    else
        $("#emailspan").html('<font color="#DC3545">');
});

$('#submitBtn').click(function () {
    if ($('#first_name').val() != '' && $('#last_name').val() != ''
        && $('#emko').val() != '' && $('#emailspan').text() == '') {

        $('#first_name').val('');
        $('#last_name').val('');
        $('#emko').val('');
        $('#mobile').val('');
        $('#address').val('');
        $('#district').val('');
        $('#zipcode').val('');
        $('#selected').empty().append('<option value="">  Your City  </option>');
        $('#divReg').css('display', 'none');
        $('#submitBtn').css('background-color', 'green').html('<h3>Success</h3>');
    }
    else {
        $('#divReg').css('display', 'block');
    }
});



// SIGN-UP SECTION
$('#passwordRet').blur(function (event) {

    if ($('#password').val() != $('#passwordRet').val()) {
        $('#confirmedPassword').css('display', 'block');
    }
    else {
        $('#confirmedPassword').css('display', 'none');
    }
});

$("#email").blur(function () {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var emailaddress = $("#email").val();
    if (!emailReg.test(emailaddress))
        $("#emailspanSign").html('<font color="#DC3545"><br>Please enter valid Email address');
    else
        $("#emailspanSign").html('');
    $('#email').css('backgroud-color', '#151711');
});

$('#submitBtnSign').click(function(){
    if($('#username').val() != '' && $('#password').val() != ''
        && $('#passwordRet').val() != '' && $('#password').val() == $('#passwordRet').val() &$('#email').val() != ''
    && $('#emailspanSign').text() == ''){

        $('#username').val('');
        $('#password').val('');
        $('#passwordRet').val('');
        $('#email').val('');
        $('#phone').val('');
        $('#divSignUp').css('display', 'none');
        $('#confirmedPassword').css('display', 'none');
        $('#submitBtnSign').css('background-color', 'green').html('<h3>Success!</h3>');
    }
    else {
        $('#divSignUp').css('display', 'block');
    }
});



// LOGIN SECTION
$('#logBtn').click(function(){
    if($('#usernameLog').val() != '' && $('#passwordLog').val() != ''){

        $('#divLogin').css('display', 'none');
        $('#usernameLog').val('');
        $('#passwordLog').val('');
        $('#logBtn').css('background-color', 'green').html('<h6>Successfull Login!</h6>');
    }
    else {
        $('#divLogin').css('display','block');
    }
});



// SURVEY SECTION
$("#emailServ").blur(function () {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var emailaddress = $("#emailServ").val();
    if (!emailReg.test(emailaddress))
        $("#emailspanServ").html('<font color="#DC3545">Please enter valid Email');
    else
        $("#emailspanServ").html('<font color="#DC3545"');
});

$('#submitSurveyBtn').click(function(){
    if(($('#radio1Serv').is(':checked') || $('#radio2Serv').is(':checked')
        || $('#radio3Serv').is(':checked') || $('#radio4Serv').is(':checked'))
        && ($('#check1').is(':checked') || $('#check2').is(':checked') || $('#check3').is(':checked'))
    && ($('#occupation option:selected').text() != 'Your Occupation') &&
        $('#income option:selected').text() != 'Income Level' && $('#age option:selected').text() != 'Your Age' ){

        $('#divServey').css('display', 'none');
        $('#radio1Serv').prop('checked', false);
        $('#radio2Serv').prop('checked', false);
        $('#radio3Serv').prop('checked', false);
        $('#radio4Serv').prop('checked', false);
        $('#textAreaServ').val('');
        $('#check1').prop('checked', false);
        $('#check2').prop('checked', false);
        $('#check3').prop('checked', false);
        $('#occupation').empty().append('<option value="">   Your Occupation   </option>');
        $('#income').empty().append('<option value="">   Income Level   </option>');
        $('#age').empty().append('<option value="">   Your Age   </option>');
        $('#nameServ').val('');
        $('#emailServ').val('');
        $('#maleSurvey').prop('checked', false);
        $('#femaleSurvey').prop('checked', false);
        $('#message').val('');
        $('#submitSurveyBtn').css('background-color', 'green').html('<h3>Success!</h3>');
    }
    else{
        $('#divServey').css('display', 'block');
    }
});



// APPLICATION SECTION
$("#youremail").blur(function () {
    let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    let emailaddress = $("#youremail").val();
    if (!emailReg.test(emailaddress))
        $("#emailspanApp").html('<font color="#DC3545"><br>Please enter valid Email address');
    else
        $("#emailspanApp").html('');
});
$('#appSubmitBtn').click(function(){
    if ($('#yourfullname').val() != '' && $('#youremail').val() != '' && $('#emailspanApp').text() == ''
        && $('#city option:selected').text() != 'Your City'
        && $('#yoursalary option:selected').text() != 'Select'){

        $('#divApp').css('display', 'none');
        $('#yourfullname').val('');
        $('#youremail').val('');
        $('#mailAdress').val('');
        $('#mailAd').val('');
        $('#city').empty().append('<option value = "">  Your City  </option>');
        $('#zipcode').val('');
        $('#radioMale').prop('checked', false);
        $('#radioFemale').prop('checked', false);
        $('#yoursalary').empty().append('<option value = "">  Select  </option>');
        $('#upfile').val(null);
        $('#message').val('');
        $('#appSubmitBtn').css('background-color', 'green').html('<h3>Success!</h3>');
    }
    else {
        $('#divApp').css('display', 'block');
    }
});

