function makeGrid() {
    for (i = 0; i < $('#input_height').val(); i++) {
        $('#pixel_canvas').append('<tr></tr>');
        for (j = 0; j < $('#input_width').val(); j++) {
            $('tr:last').append('<td class="white"></td>');
        }
    }
    // pick and change cel color
    $('td').click(function() {
        var color = $('#colorPicker').val();
        if (rgb2hex($(this).css('background-color')) === color) {
            $(this).css({
                'background-color': 'white'
            });
            return;
        }
        $(this).css({
            'background-color': color
        });
    });
}
