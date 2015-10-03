/*-----------------------------------------
--- Interactive Troubleshoooter Seletion 
-----------------------------------------*/

// Variables
distro = "0"  //Ubuntu or Fedora
version = "interactive"  //interactive or print
aintUrl = ""  //

/*------------------------------------------
--- Buttons with #id's
interavtive-btn
print-btn
ubuntu-btn
fedora-btn
go-btn
-------------------------------------------*/
	// Reset Variables on modal exit
	 $('#aintModal').on('hidden', function () {
    	location.reload()
    })

	//Choosing a url
	var selectUrl = function() {
		if (distro == 'Amahi 7' && version == 'interactive') {
			aintUrl = "./amahi7interactive.html"
		} else if (distro == "Amahi 6" && version == 'interactive') {
			aintUrl = "./amahi6interactive.html"
		}else if (distro == "Amahi 6" && version == 'print') {
			aintUrl = "./amahi6print.html"
		}else if (distro == "Amahi 7" && version == 'print') {
			aintUrl = "./amahi7print.html"
		};
		console.log(aintUrl)
	}

	// Have you chosen 1 or 2 options
	var oneOrTwo = function () {
		if (distro !== "0" && version !== "0") {
			console.log('Both!')
			$('#appended').detach();
			$('#selected-distro').slideUp();
			$('#selected-method').slideUp();
			$('#go-btn').slideDown();	
			$('#ready').append('<div id="appended"><div class="span2"><a class="btn pull-left" id="print-btn" title="Click me for the print version!" data-toggle="button" onClick="printBtn()";><i class="icon-print"></i></a></div><div class="span1"></div><div style="text-align:center !important" class="span6"><p>You have chosen <span class="italic">'+version+'</span> version of the <span class="italic">'+distro+'</span> Troubleshooter.</p></div></div>');
			selectUrl ();
			$('#go-btn-a').prop('href', aintUrl);
			if (version =='print') {
					$('#print-btn').addClass('active')
				} else {
					$('#print-btn').removeClass('active')
				};
			return true;	
		} else {

			console.log('JustOne')
			return false
		}

	}

	// Online vs. print
	var methodSelected = function() {
		if (oneOrTwo() == false) {
		$('#selected-method').slideDown()
		}
	}

	$('#interactive-btn').click(function(){  
		version = 'interactive';
		methodSelected();
		console.log(version)
	})

	$('#print-btn').click(function(){
		version = 'print';
		methodSelected();

		console.log(version)
	})

	var printBtn = function() {
		if (version =='interactive'){
			version = 'print';
			methodSelected();
		} else if (version=='print') {
			version = 'interactive';
			methodSelected();
		}
	}

	// Fedora vs. ubuntu
	var distroSelected = function() {
		if (oneOrTwo() == false) {
		$('#selected-distro').slideDown()
		}
	}

	$('#ubuntu-btn').click(function(){  
		distro = 'Amahi 6';
		distroSelected();
		console.log(distro)
	})

	$('#fedora-btn').click(function(){		
		distro = 'Amahi 7';
		distroSelected();
		console.log(distro)
	})





	// Choose a url and inject it into the go button
