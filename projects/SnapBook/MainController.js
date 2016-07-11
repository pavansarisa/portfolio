app.controller('MainController', ['$scope', function($scope) { //created a new controller named 'MainController'..
  $scope.title = "My Best Moments"; //used the property 'title' to store a string & attach it to '$scope'..
  $scope.promo = 'The most popular photos of mine.';
  $scope.products = [ 
  { 
    name: 'Galveston Island, TX',  
    pubdate: new Date('2014', '11', '28'), 
    cover: '11.jpg', 
    likes: 0,
    dislikes: 0
  }, 
  { 
    name: 'San Antanio River Walk, TX',  
    pubdate: new Date('2015', '00', '07'), 
    cover: '14.jpg', 
    likes: 0,
    dislikes: 0
  },
  { 
    name: 'Priceless Moment, OH',  
    pubdate: new Date('2015', '11', '18'), 
    cover: '33.jpg',
    likes: 0,
    dislikes: 0
  },
  { 
    name: 'Myrtle Beach, SC',  
    pubdate: new Date('2016', '02', '24'), 
    cover: '38.jpg',
    likes: 0,
    dislikes: 0
  },
  { 
    name: '#Graduation, Kent State University',  
    pubdate: new Date('2015', '11', '18'), 
    cover: '36.jpg',
    likes: 0,
    dislikes: 0
  } 
];
  $scope.plusOne= function(index) { 
  $scope.products[index].likes += 1; 
  };
  $scope.minusOne= function(index) { 
  $scope.products[index].dislikes += 1;
  };
}]);
