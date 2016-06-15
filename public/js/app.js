angular.module('fileUploadDemo',['ngFileUpload'])
.controller('HomeCtrl',['Upload','$scope',function(Upload,$scope){
	$scope.img = false;
	
	  $scope.check = function(){
		  $scope.msg = "";
		  $scope.img = false;
	  }
		$scope.upload = function(user){
			//alert(user.file);
		if(user.file != undefined){
			$scope.msg = "";
			$scope.img = '/loadingAnimation.gif';
			Upload.upload({
				url: 'http://localhost:3000/image-upload',
				data:{file:user.file}
			}).then(function(res){
				if(res.data.success){
					$scope.msg = res.data.msg;
					$scope.img = 'uploads/'+res.data.img_path;
					user.file = "";
				}
				else{
					$scope.msg = res.data.msg;
					$scope.img = false;
				}
			});
		}
		else{
			$scope.msg = 'Select valid image  file';
			$scope.img = false;
			}
	}
	
}]);