export class MainController {
  constructor ($http) {
    'ngInject';
    this.$http = $http;
  }

  postMsg(){
    this.$http.post('http://localhost:8080/test', {
      msg: "this.message"
    });
  }

  getMsg(){
    var vm = this;
    this.$http.get('http://localhost:8080/test')
    .then((result) => {
      // console.log(result.data);
      vm.message = result.data;
    });
  }
}
