app.controller("index-ctrl", ($scope, $http, $cart, $utility, authService, HOST) => {
	const { $owlSlick } = $utility;
	var cate = `${HOST}/api/category`;
	var brand = `${HOST}/api/category`;
	$scope.cates = [];
	$scope.brands = [];
	$scope.currentUser = localStorage.getItem("currentUser");
	
    $scope.logout = function () {
        authService.logout && authService.logout();
    };

    $scope.isAuthed = function () {
        return authService.isAuthed ? authService.isAuthed() : false;
    };

	$http.get(cate).then(resp => {
		$scope.cates = resp.data;
	});

	$http.get(brand).then(resp => {
		$scope.brands = resp.data;
	});

	$owlSlick.configIndex($scope);

	$scope.removeCartItem = (item) => {
		$cart.removeItem(item.id);
	};
});
