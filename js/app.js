function go(word) {
	if ($('#' + word + '-info').hasClass('hidden')) {
		$('#' + word + '-info').removeClass('hidden')
	} else {
		$('#' + word + '-info').addClass('hidden')
	}
}