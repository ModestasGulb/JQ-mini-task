$(document).ready(function() {
    $('#container').css({'display':'flex', 'flex-wrap':'wrap'})
$('#Add').click(function(event) {
    event.preventDefault()
    var height = $('#height').val()
    var width = $('#width').val()
    var color = $('#color').val()
    if (height == '' || width == '' || color == '') {
       
    } else {
    var blokas = $('<div class=\"block\" style=\"width:' + width + 'px;height:' + height + 'px;background-color:' + color + ';\"/>')
    $('#container').append(blokas)
    }  
})
$('#container').on('click', '.block', function(){
    $(this).css('opacity', 0)
})
});