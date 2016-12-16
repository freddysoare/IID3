function replaceButton(buttondescr, text) {
	var btn = $(buttondescr);
	btn.replaceWith(text);
}

function disable(buttondescr) {
	$(buttondescr).prop('disabled', true);
}