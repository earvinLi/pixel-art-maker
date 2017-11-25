function makeGrid() {
    for (i = 0; i < $('#input_height').val(); i++) {
        $('#pixel_canvas').append('<tr></tr>');
        for (j = 0; j < $('#input_width').val(); j++) {
            $('tr:last').append('<td class="white"></td>');
        }
    }
}
