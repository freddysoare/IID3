$("#searchbutton").click(function() {
	if($("#searchbox").val().length === 0) {
		$("h2").each(function() {
			$(this).parent().parent().parent().show();
		});
	} else {
		$("h2:not(:contains('" + $("#searchbox").val() + "'))").parent().parent().parent().hide();
	}
});