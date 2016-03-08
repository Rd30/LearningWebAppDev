var main = function(){

  var exercise1 = function (num) {

    'use strict';
    var sum = 0;
    var avgSum = 0;

    num.forEach(function (value) {

       sum += value;
       avgSum = sum / num.length;

    });

    return avgSum;

  };

  var exercise2 = function (largeNo) {

    'use strict';

     return Math.max.apply(Math, largeNo);
  };

  var exercise3 = function (evenOdd) {

  'use strict';
   var evenNo = [];

   for(var i = 0; i < evenOdd.length; i++){
     if(evenOdd[i] % 2 === 0){
       evenNo.push(evenOdd[i]);
     }
   }

    if(evenNo.length >= 1){
      return true;
    }
    else{
      return false;
    }

  };

  var exercise4 = function (allEven) {

  'use strict';
   var evenNo = [];

   for(var i = 0; i < allEven.length; i++){
     if(allEven[i] % 2 === 0){
       evenNo.push(allEven[i]);
     }
   }

    if(evenNo.length == allEven.length){
      return true;
    }
    else{
      return false;
    }

  };

  var arrayContains = function (strArr, string) {

    'use strict';
    if(strArr.indexOf(string) > -1){
      return true;
    }
    else{
      return false;
    }

  };

  var arrayContainsTwo = function  (strArr,string) {

    'use strict';

    var count = 0;
    var x = false;

    strArr.forEach(function (element) {

        if(element === string){
          count++;
        if(count === 2){
          x = true;
          return x;
        }
      }

    });
       return x;
  };

  var arrayContainsThree = function  (strArr,string) {

    'use strict';

    var count = 0;
    var y = false;

    strArr.forEach(function (element) {

        if(element === string){
          count++;
        if(count === 3){
          y = true;
          return y;
        }
        }

    });
     return y;

  };

  var arrayContainsNTimes = function  (strArr,string,num) {

    'use strict';

    var count = 0;
    var z = false;

    strArr.forEach(function (element) {

        if(element === string){
          count++;
        if(count === num){
          z = true;
          return z;
        }
        }

    });
     return z;

  };



  $(".ex1 span").text(exercise1([1, 2, 3, 4, 5, 6]));
  $(".ex2 span").text(exercise2([145, 6, 10, 9]));

  if (exercise3([3, 7, 9, 5])) {
     $(".ex3 span").text("contain");
  } else {
     $(".ex3 span").text("does not contain");
  }

  if (exercise4([2, 4, 6, 8])) {
     $(".ex4 span").text("is");
  } else {
     $(".ex4 span").text("is not");
  }

  $(".ex5 span").text(arrayContains(["abc", "xyz", "pqr", "zzz"], "xyz"));
  $(".ex61 span").text(arrayContainsTwo(["abc", "xyz", "pqr","yz","xyz"], "abc"));
  $(".ex62 span").text(arrayContainsThree(["abc", "xyz", "pqr","abc","abc", "fff"], "abc"));
  $(".ex63 span").text(arrayContainsNTimes(["ab", "ab", "ab", "c", "ab", "d"], "ab", 4));

  $(".underscore2 span").text(_.max([79, 2, 6, 8, 9, 34, 788], function (item) { return item; }));

  if (_.find([3, 2, 9, 7], function (num) {return num % 2 == 0})) {
     $(".underscore3 span").text("contain");
  } else {
     $(".underscore3 span").text("does not contain");
  }

  if (_.every([2, 4, 6, 8], function (num) {return num % 2 == 0})) {
     $(".underscore4 span").text("is");
  } else {
     $(".underscore4 span").text("is not");
  }

}

$(document).ready(main);
