'use strict';

function getData(url){
    return new Promise(function (resolve,reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.send();
        xhr.onload = function () {
            if (this.readyState == 4) {// or this.status == 200
                resolve(JSON.parse(this.response));
            } else reject('error');
        };
    })
}



getData('https://jsonplaceholder.typicode.com/posts')
    .then(function (data) {
            var arr = [];
            for (var i =0; i <= data.length-1; i++) {
                var url = 'https://jsonplaceholder.typicode.com/posts/' + data[i].id;
                getData(url)
                    .then(function (value) { console.log(value) });

            }
            // Promise.all(arr).then(function(responses){
            //     responses.forEach(function (value) {
            //         console.log(value);
            //     })
            // });
        }
    )
    .then(function (array) {

    })
    .catch(function (error) {
        alert(error);
    });


