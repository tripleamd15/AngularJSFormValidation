'use strict';
//for update test
angular.module('confusionApp', [])

        .controller('DishDetailController', ['$scope', function ($scope) {

            $scope.dish =
        {
            name: 'Uthapizza',
            image: 'images/uthapizza.png',
            category: 'mains',
            label: 'hot',
            price: '4.99',
            description: 'A unque combination of indian Uthappam (pancake) and Italian pizza,topped with Cerignola olives, ripe vine cherry tomatoes,vidalia onion,Guntur chillies and Buffalo paneer.',
            comments: [
                {
                    rating: 5,
                    comment: "Imagine all the eatables, living in conFusion!",
                    author: "John Lemon",
                    date: "2012-10-16T17:57:28.556094Z"
                },
                {
                    rating: 4,
                    comment: "Sens anyone to heaven, I wish I could get my mother-in-law to eat it!",
                    author: "Paul McVites",
                    date: "2014-09-06T10:57:28.556094Z"
                },
                {
                    rating: 3,
                    comment: "Eat it, just eat it!",
                    author: "Michael Jaikishan",
                    date: "2015-02-14T16:57:28.556094Z"
                },
                {
                    rating: 4,
                    comment: "Ultimate, Reaching for the stars!",
                    author: "Ringo Starry",
                    date: "2013-12-03T18:57:28.556094Z"
                },
                {
                    rating: 2,
                    comment: "It's your birthday, we're gonna party!",
                    author: "25 Cent",
                    date: "2011-12-03T18:57:28"
                }
            ]
        };

            $scope.filterText = '';
                        
        }])

        .controller('DishCommentController', ['$scope', function ($scope) {

            $scope.comment = { author: "", rating: 5, comment: "", date: "" }
         
            $scope.submitComment = function () {

                //Step 2: This is how you record the date
                $scope.comment.date = new Date().toISOString();
                $scope.comment.rating = parseInt($scope.comment.rating);
                console.log($scope.comment)
                
              
                // Step 3: Push your comment into the dish's comment array
                $scope.dish.comments.push($scope.comment);

                 //Step 4: reset your form to pristine
                $scope.feedBackForm.$setPristine();
                //console.log($scope.comment);

                //Step 5: reset your JavaScript object that holds your comment
                $scope.comment = { author: "", rating: 5, comment: "", date: "" }
                // console.log($scope.comment);     
                
            }
            
        }])



;



