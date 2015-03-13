(function() {
  'use strict';

  angular.module('myapp', ['ui.router']);

  var navigation = [
    {
      id: 'page1',
      title: 'Page 1'
    },
    {
      id: 'page2',
      title: 'Page 2'
    },
    {
      id: 'page3',
      title: 'Page 3'
    },
  ];


  angular.module('myapp').controller('NavigationController',
    function($scope) {
      $scope.navigation = navigation;
    }
  );

  angular.module('myapp').directive('navigationDirective',
    function() {
      return {
        templateUrl: 'navigation.html'
      };
    }
  );

  angular.module('myapp').run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
      // It's very handy to add references to $state and $stateParams to the
      // $rootScope so that you can access them from any scope within your
      // applications.For example,
      // <li ng-class="{ active: $state.includes('contacts.list') }"> will set
      // the <li> to active whenever 'contacts.list' or one of its decendents
      // is active.
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
  ]);

  angular.module('myapp').config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/page1');
    $stateProvider
      .state('page1', {
        url: '/page1',
        templateUrl: 'page1' + '.html'
      })
      .state('page2', {
        url: '/page2',
        templateUrl: 'page2.html'
      })
      .state('page3', {
        url: '/page3',
        templateUrl: 'page3.html'
      })
      .state('page3.tab1', {
        url: '/tab1',
        templateUrl: 'page3.tab1.html'
      })
      .state('page3.tab2', {
        url: '/tab2',
        templateUrl: 'page3.tab2.html'
      })
      .state('page3.tab3', {
        url: '/tab3',
        templateUrl: 'page3.tab3.html'
      });
  });

})();
