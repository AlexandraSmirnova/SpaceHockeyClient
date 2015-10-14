define([
    'backbone',
    'tmpl/register'
], function(
    Backbone,
    tmpl
){

    var View = Backbone.View.extend({
	el: $("#page"),
	template: tmpl,
				
	events: {
	    "submit .form_signup": "submitSignup",
	    "click a": "hide"
	},

	render: function () {
	    $(this.el).html(this.template());
	},

	submitSignup: function(event) {

	    if(validateForm()){	
		var formData = {
		    'login': $("input[name = login]").val(),
		    'password': $("input[name = password]").val(),
		    'email': $("input[name = email]").val()			
		};

		$.ajax({
		    type: "POST",
		    url: "/auth/signup",
		    data: formData,
										
		    success: function(data){
			data =  JSON.parse(data);
			if(data["status"] == "200"){
                             console.log("ajax success");
                             Backbone.history.navigate('', { trigger: true });
			 }
			else{
                            var $error = $(".form__row_errors"); 
                            $error.append("I'm error!");
                            $error.show();
                        }
			//window.location.replace("/#game");
		    }
		});
	    }																
	    return false;
	},

	show: function () {
	    this.$el.render();
	},

	hide: function () {
	    this.$el.empty();
	}

    });

    function validateForm(){
	var valid = checkName() && checkPasswords() && checkEmail();
	if(!valid)
	    $('.form__row_errors').css('display', 'block');		
	return valid;
    }
		
    function checkPasswords(){
	var userPassword1 = $("input[name = password]").val();
	var userPassword2 = $("input[name = password2]").val();
	if (userPassword1 == '' || userPassword2 == '' ) {
	    $('.form__row_errors').text("Input your password in both fields!");
	    return false;
        }
        if (userPassword1 != userPassword2 ) {
            $('.form__row_errors').text("Passwords should be the same! Input again, please.");
            return false;
        }
	return true;
    }

    function checkName(){
	var userName = $("input[name = login]").val();
	if (userName == '') {
	    $('.form__row_errors').text("Input your login, please!");
	    return false;				
	}		
	return true;
    }

    function checkEmail(){
	var userEmail = $("input[name = email]").val();
	if (userEmail == '') {
	    $('.form__row_errors').text("Input your email, please!");
	    return false;				
	}		
	return true;
    }

    return new View();
});
