angular.module('fileUploadDemo',['ngFileUpload'])
.controller('HomeCtrl',['Upload','$scope',function(Upload,$scope){
	$scope.img = false;
		$scope.upload = function(user){
			$scope.img = '/loadingAnimation.gif';
		if(user.file){
			Upload.upload({
				url: 'http://localhost:3000/image-upload',
				data:{file:user.file}
			}).then(function(res){
				if(res.data.success){
					alert(res.data.msg);
					$scope.img = 'uploads/'+res.data.img_path;
				}
				else{
					alert(res.data.msg);
				}
			});
		}
		else{alert('Select file');}
	}
	
}]);