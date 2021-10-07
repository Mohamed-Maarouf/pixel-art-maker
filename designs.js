//A grid should apear when you click submit button
$('#sizePicker').submit(function (event) {
	event.preventDefault();
	rows = $('#inputHeight').val();
	columns = $('#inputWidth').val();

	makeGrid(rows, columns);
})
//Made grid
function makeGrid(g, h) {
   
	//this for clear color when click submit
	$('tr').remove()
       
    //Made height
	for (let x = 0; x < g; x++) {
		$('table').append('<tr></tr>');
	}
    //Made width
	for (let y = 0; y < h; y++) {
        $('tr').append('<td></td>')
	}
	$('td').click(function (event) {
		//Choose color
		color = $('#colorPicker').val();
		$(event.target).css('background-color', color)
	})
}
