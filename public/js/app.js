angular.module('fileUploadDemo',['ngFileUpload'])
.controller('HomeCtrl',['Upload','$scope',function(Upload,$scope){
	
		$scope.upload = function(user){
		if(user.file){
			Upload.upload({
				url: 'http://localhost:3000/image-upload',
				data:{file:user.file}
			}).then(function(res){
				if(res.data.success){
					alert(res.data.msg);
				}
				else{
					alert(res.data.msg);
				}
			});
		}
		else{alert('Select file');}
	}
	
}]);