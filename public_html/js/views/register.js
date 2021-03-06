define([
	'backbone',
	'tmpl/register',
	'utils/validator',
	'models/userProfile'
], function (Backbone,
             tmpl,
             Validator,
             User) {

	var formClass = ".form_signup";
	var validator = new Validator();

	var View = Backbone.View.extend({
		template: tmpl,
		model: User,

		events: {
			"submit .form_signup": "submitSignup"
		},

		initialize: function () {
			this.render();
		},

		render: function () {
			$(this.el).html(this.template());
			return this;
		},

		submitSignup: function (event) {
			validator.clearErrors();
			validator.validateForm(formClass);
			if (validator.form_valid) {
				var data = {
					'login': $(formClass + " input[name = login]").val(),
					'password': $(formClass + " input[name = password]").val(),
					'email': $(formClass + " input[name = email]").val()
				};
				this.model.registration(data, {
					success: function (response) {
						console.log(response);
						data = JSON.parse(response);
						if (parseInt(data["status"]) == "200") {
							Backbone.history.navigate('', {trigger: true});
						}
						else {
							var $error = $(".form__row_errors");
							$error.append("User cann't be registrated. Try to change your input data");
							$error.show();
						}
					}
				});
			}
			return false;
		},

		show: function () {
			validator.clearErrors()
			this.$el.show();
			this.trigger("show", this);
		},

		hide: function () {
			this.$el.hide();
		}

	});

	return new View();
});
