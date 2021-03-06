define([
	'backbone',
	'tmpl/main',
	'models/userProfile'
], function (Backbone,
             tmpl,
             User) {

	var Main = Backbone.View.extend({
		template: tmpl,
		model: User,

		events: {
			"click .menu__item_logout": "logout"
		},

		initialize: function () {
			this.render();
			that = this;
			this.listenTo(User, 'change', function () {
				that.render();
			});
		},

		logout: function () {
			this.model.logout({
				success: function (response) {
					response = JSON.parse(response);
					if (response.status == "200") {
						console.log("ajax success");
						User.clear();
						Backbone.history.navigate('', {trigger: true});
					}
				}
			});
			this.render();
		},

		render: function () {
			var userlogin = User.get('login');
			var userData = {
				"login": userlogin
			}
			this.$el.html(this.template(userData));
		},

		show: function () {
			this.trigger('show', this);
			this.$el.show();
		},

		hide: function () {
			this.$el.hide();
		}

	});

	return new Main();
});
