function ExampleService($http) {
  'ngInject';

  const service = {};

  service.get = () => 
    new Promise((resolve, reject) => {
      $http.get('apiPath').success((data) => {
        resolve(data);
      }).error((err, status) => {
        reject(err, status);
      });
    });

  return service;
}

export default {
  name: 'ExampleService',
  fn: ExampleService
};
