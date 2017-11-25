function makeGrid() {
  // change rgb to hex to check color match, from stack: https://stackoverflow.com/questions/1740700/how-to-get-hex-color-value-rather-than-rgb-value
  function rgb2hex(rgb) {
      if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;
      rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      function hex(x) {
          return ("0" + parseInt(x).toString(16)).slice(-2);
      }
      return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  }

  for (i = 0; i < $('#input_height').val(); i++) {
      $('#pixel_canvas').append('<tr></tr>');
      for (j = 0; j < $('#input_width').val(); j++) {
          $('tr:last').append('<td class="white"></td>');
      }
  }

  // pick and change cel color
  $('td').click(function() {
      var color = $('#colorPicker').val();
      // .css() gets a color in rgb form but html color picker gives a color in hex former, so we need to convert one of the forms to match the other when comparing colors
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
