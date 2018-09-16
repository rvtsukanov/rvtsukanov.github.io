$(document).ready(function(){
    $('#lic').css('color', 'black');
    var chosen = 'lic';


    $('.container li').hover(function(){
        $(this).css('color', 'black');
    }, function(){
        $(this).css('color', 'white')
    });

    $('#lic').click(function() {
        $('div.main-table').css('display', 'flex');
        $('div.map').css('display', 'none');
        $('div.order').css('display', 'none');
        $('#lic').css('color', 'black');
        $('#map').css('color', 'white');
        $('#ord').css('color', 'white');
    });

    $('#map').click(function() {
        $('div.main-table').css('display', 'none');
        $('div.map').css('display', 'flex');
        $('div.order').css('display', 'none');
        $('#lic').css('color', 'white');
        $('#map').css('color', 'black');
        $('#ord').css('color', 'white');
    });

    $('#ord').click(function() {
        $('div.main-table').css('display', 'none');
        $('div.map').css('display', 'none');
        $('div.order').css('display', 'flex');
        $('#lic').css('color', 'white');
        $('#map').css('color', 'white');
        $('#ord').css('color', 'black');
    });

});
