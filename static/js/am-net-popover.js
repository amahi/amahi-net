///popover js
$('#why').popover()
$('#where').popover()
$('#AINT').popover()
$('.popover-dismiss').click(
	function() {
		$('.popover').popover(hide)
	})
