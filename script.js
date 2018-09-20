ymaps.ready(init);
var myMap;


function init(){
    myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7
    });
}

var http = new XMLHttpRequest();
var parser = new DOMParser();
var points = [];



var added = 0;
var send_request = function (msg) {
    console.log('Sended: ', msg);
    http.open('GET', ' https://geocode-maps.yandex.ru/1.x/?geocode=' + msg, false);
    http.send(null);
    // console.log(http.responseText);
    xmlDoc = parser.parseFromString(http.responseText, 'text/xml');
    console.log(xmlDoc.getElementsByTagName('pos')[0].textContent);
    points.push(xmlDoc.getElementsByTagName('pos')[0].textContent);
}

var field = document.getElementById('field');
console.log(field);

field.oninput = function () {
    console.log(field.value.split(' - '));
    console.log(added);
    var req = field.value.split(' - ');

    if(req.length === 1) {added = 0; points = [];}
    else if (added === req.length-2){send_request(req[req.length - 2]); added++};
}
field.onchange = function () {
    var req = field.value.split(' - ');
    if(req[req.length - 1] !== '') {
        send_request(req[req.length - 1]);
    }
}


$(document).ready(function(){

    function main_frame(){
        var content = document.getElementsByClassName('inside')[0].getElementsByTagName('*');
        var list_of_content = [];

        for(var i = 0; i < content.length; i++){
            list_of_content.push(content[i].id);
        }
        this.active_tab = content[0].id;
        this.len = content.length;
        this.list_of_content = content;
    }

    let frame = new main_frame();
    document.getElementById(frame.active_tab).style.color = 'black';


    $('.container li').hover(function(){
        $(this).css('color', 'black');
    }, function(){
        if(this.id !== frame.active_tab) {
            $(this).css('color', 'white');
        }
    });


    $('#lilic').click(function() {
        frame.active_tab = 'lilic';
        $('div.main-table').css('display', 'flex');
        $('#map').css('display', 'none');
        $('div.order').css('display', 'none');
        $('#lilic').css('color', 'black');
        $('#limap').css('color', 'white');
        $('#liord').css('color', 'white');
    });

    $('#limap').click(function() {
        frame.active_tab = 'limap';
        $('div.main-table').css('display', 'none');
        $('#map').css('display', 'flex');
        $('div.order').css('display', 'none');
        $('#lilic').css('color', 'white');
        $('#limap').css('color', 'black');
        $('#liord').css('color', 'white');
    });

    $('#liord').click(function() {
        frame.active_tab = 'liord';
        $('div.main-table').css('display', 'none');
        $('#map').css('display', 'none');
        $('div.order').css('display', 'flex');
        $('#lilic').css('color', 'white');
        $('#limap').css('color', 'white');
        $('#liord').css('color', 'black');
    });

});
