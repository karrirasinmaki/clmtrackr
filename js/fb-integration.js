(function() {

	function login() {
		FB.login(function(response) {
			if (response.status === 'connected') {
			}
		}, {scope: 'public_profile,email,user_friends'});
	}


	function selectFriendDialog() {
		FB.api(
		    "/me/taggable_friends?fields=id,name,picture",
			{limit: 100},
		    function (response) {
		      if (response && !response.error) {
				  console.log(response);
		      }
		    }
		);
	}

	window.fbLogin = login;
	window.selectFbFriend = selectFriendDialog;

})();
