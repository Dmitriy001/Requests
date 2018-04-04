'use strict';

function getData(url){
    return new Promise(function (resolve,reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.send();
        xhr.onload = function () {
            if (this.readyState == 4 ) { // or this.status == 200
                resolve(this.response);
            } else reject('error');
        };
    })
}


getData('https://jsonplaceholder.typicode.com/posts')
    .then(function(data){
       console.log(data);})
    .catch(function (error) {
        alert(error);
    });

