$('.link').click(pressNav);

function pressNav() {
    $('.link').css('background', 'none');
    $(this).css({'background': 'grey', 'outline': 'none'});
}

$("#email").blur(function () {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var emailaddress = $("#email").val();
    if (!emailReg.test(emailaddress))
        $("#emailDiv").html('<font color="#DC3545"><br>Please enter valid Email address');
    else
        $("#emailDiv").html('<font color="#DC3545">');
});

$('#send').click(function () {
    if($('#name').val() != '' && $('#email').val() != '' && $('#emailDiv').text() == '' && $('#subject').val() != ''){

        $('#name').val('');
        $('#email').val('');
        $('#subject').val('');
        $('#comment').val('');
        $('#contacts').css('display', 'none');
        $('#send').removeClass("bg-dark border").css('background-color', 'green').html('Success');
        $('#send').css('outline', 'none');
    }
    else {
        $('#contacts').css('display', 'block');
    }

});


