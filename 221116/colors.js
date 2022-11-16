
var Body = {
    setColor: function (color) {
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}

var Links = {
    setColor: function (color) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = color;
            i = i + 1;
        }
    }
}



// function BodySetBackgroudSetColor(color) {
//     document.querySelector('body').style.backgroundColor = color;
// }
// function BodySetColor(color) {
//     document.querySelector('body').style.color = color;
// }

// function setColor(color) {
//     var alist = document.querySelectorAll('a');
//     var i = 0;
//     while (i < alist.length) {
//         alist[i].style.color = color;
//         console.log(alist[i]);
//         i = i + 1;
//     }
// }







//함수를 선언 하는 위치 : 선언부, 매개변수(parameter)
//함수를 구현하는 위치 : 구현부
// 함수를 사용할 때 보통 "호출했다. cal" -> 함수를 사용할 때, 호출할 때 안에 있는 변수를 인자값(argument)

function nightDayHandler(self) {

    var target = document.querySelector('body');
    if (self.value === 'night') {
        // target.style.backgroundColor = 'black';
        //BodySetBackgroudSetColor('black');
        Body.setBackgroundColor('black');
        // target.style.color = 'white';
        // BodySetColor('white');
        Body.setColor('white');
        self.value = 'day'
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while (i < alist.length) {
        //     alist[i].style.color = 'powderblue';
        //     console.log(alist[i]);
        //     i = i + 1;
        // }
        // setColor('powderblue');
        Links.setColor('powderblue');



    } else {
        // target.style.backgroundColor = 'white';
        // BodySetBackgroudSetColor('white');
        Body.setBackgroundColor('white');
        // target.style.color = 'black';
        // BodySetColor('black');
        Body.setColor('black');
        self.value = 'night'
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while (i < alist.length) {
        //     alist[i].style.color = 'blue';
        //     console.log(alist[i]);
        //     i = i + 1;
        // }
        // setColor('blue');
        Links.setColor('blue');


    }
}


