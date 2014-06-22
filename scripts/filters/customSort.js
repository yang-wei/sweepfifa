
  // custom filter to sort the epoch date
  app.filter('customSort',function(){
    function sort (a, b) {
        if (a > b) { return 1; }
        if (a < b) { return -1; }

        return 0;
    }

    return function(arrInput, prop) {
        var arr = arrInput.sort(function(a, b) {
            return sort(+a[prop], +b[prop]);
        });
        return arr;
    }
  })
