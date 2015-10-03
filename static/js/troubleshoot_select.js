// Variables
var distro = "8"

function MakeUrl(isPrint) {
	var amahi = "amahi";
	var version = "interactive";
	var currUrl = document.URL.toLowerCase();
	
	if( isPrint ) {
		version = 'print';
	}
	var toUrl = "/" + amahi + distro + version + ".html";
	
	return toUrl;
}

function MakeText(  isPrint ) {
	var amahi = "Amahi";
	var version = "Interactive";
	
	var url = document.URL.toLowerCase();
	if( isPrint ) {
		version = 'Print';
	}
	
	var text = "<h3>Would you like to go to the</h3>";
	text += "<h3>" + version + " version of the</h3>";
	text += "<h3>" + amahi + " " + distro + " troubleshooter?</h3>";
	
	return text;	
}

function SetDistro(d) {
	distro = d;
	var isPrint = false;
	var url = document.URL.toLowerCase();
	if( url.indexOf("print") > -1 ) {
		isPrint = true;
	}
	ShowModal(isPrint);
} 

function ShowModal(isPrint) {
	$('#go-btn').attr('href', MakeUrl(isPrint));
	$('#confirmChange .modal-body').html( MakeText(isPrint) );
	
	$('#confirmChange').modal('show');
}

function SetButtonState( version ){
	var amahi = "Amahi";
	
	var text = amahi + " " + distro + " " + version;
	$('#main-btn').html(text);
	
	if(version.toLowerCase() === "print") {
		$('#print-btn').addClass('active');
	}
}

function PrintClick() {
	var url = document.URL.toLowerCase();
	var isPrint = true;
	
	if( url.indexOf('print') > -1) {
		isPrint = false;
	}
	ShowModal(isPrint);
}

function GetState( callback ) {
	var url = document.URL.toLowerCase();
	
	var version = "Interactive";
	
	if( url.indexOf('print') > -1) {
		version = 'Print';
	}
	
	if( url.indexOf('7') > -1 )	{
		distro = 7;
	} else if ( url.indexOf('6') > -1 ) {
		distro = 6;
	}
	
	callback( version );
}

