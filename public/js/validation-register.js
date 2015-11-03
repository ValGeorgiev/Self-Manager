function validateRegisterPasswords(){
    var password = $("#tb-pass").val();
    var checkPassword = $("#tb-pass-check").val();
    if(password === checkPassword){
        $('#tb-pass-check').css('border-color', '#292E87');
        $('#btn-register').attr('disabled', false);
        return true;
    }else{
        $('#tb-pass-check').css('border-color', '#d4000a');
        return false;
    }

}

function enterTriggerRegister(e){
    var key = e.which;
    if(key == 13)  // the enter key code
    {
        $('#btn-register').click();
        return false;
    }
}

function enterTriggerLogin(e){
    var key = e.which;
    if(key == 13)  // the enter key code
    {
        $('#btn-login').click();
        return false;
    }
}