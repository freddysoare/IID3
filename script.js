function replaceButton(buttondescr, text) {
	var btn = $(buttondescr);
	btn.replaceWith(text);
}

function disable(buttondescr) {
	$(buttondescr).prop('disabled', true);
}

function setCategories() {
	var catchooser1 = $("#category");
	var catchooser2 = $("#subcategory");
	var catchooser2container = $("#catchooser2");
	var selected = $("#category option:selected");
	if (selected.val() == "Alle") {
		catchooser2container.css("display", "none");
	} else {
		catchooser2.empty();
		catchooser2.append("<option>Alle</option>");
		catchooser2container.css("display", "block");
		if (selected.val() == "Garten") {
			catchooser2.append("<option>Großgeräte</option>");
			catchooser2.append("<option>Klein Werkzeug</option>");
		} else if (selected.val() == "Innenraum") {
			catchooser2.append("<option>Wohnzimmer</option>");
			catchooser2.append("<option>Bad</option>");
			catchooser2.append("<option>Küche</option>");
		} else if (selected.val() == "Deko") {
			catchooser2.append("<option>Innenraum</option>");
			catchooser2.append("<option>Außenraum</option>");
		} else if (selected.val() == "Medien") {
			catchooser2.append("<option>Bücher</option>");
			catchooser2.append("<option>CD/DVD/BRD</option>");
			catchooser2.append("<option>Geräte</option>");
		} else if (selected.val() == "Fitness") {
			catchooser2.append("<option>Kleingeräte</option>");
			catchooser2.append("<option>Großgeräte</option>");
		} else if (selected.val() == "Spiele") {
			catchooser2.append("<option>Brettspiele</option>");
			catchooser2.append("<option>Großgeräte</option>");
		}
	}
}

$("#searchbutton").click(function() {
	if($("#searchbox").val().length === 0) {
		$("h2").each(function() {
			$(this).parent().parent().parent().show();
		});
	} else {
		$("h2:not(:contains('" + $("#searchbox").val() + "'))").parent().parent().parent().hide();
	}
});