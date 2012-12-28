/*-----------------------------------------
--- Interactive Troubleshoooter Seletion 
-----------------------------------------*/

// Variables
distro = "0"  //Ubuntu or Fedora
version = "0"  //interactive or print
aintUrl = ""  //

/*------------------------------------------
--- Buttons with #id's
interavtive-btn
print-btn
ubuntu-btn
fedora-btn
go-btn
-------------------------------------------*/
	//Choosing a url
	var selectUrl = function() {
		if (distro == 'Ubuntu' && version == 'print') {
			aintUrl = "./support.html"
		} else if (distro == "Ubuntu" && version == 'interactive') {
			aintUrl = "./quick-fixes.html"
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
			$('#ready').append('<p id="appended" >You have chosen <span class="highlight">'+version+'</span> version of the <span class="highlight">'+distro+'</span> Troubleshooter.</p>');
			selectUrl ();
			$('#go-btn-a').prop('href', aintUrl);
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

	// Fedora vs. ubuntu
	var distroSelected = function() {
		if (oneOrTwo() == false) {
		$('#selected-distro').slideDown()
		}
	}

	$('#ubuntu-btn').click(function(){  
		distro = 'Ubuntu';
		distroSelected();
		console.log(distro)
	})

	$('#fedora-btn').click(function(){		
		distro = 'Fedora';
		distroSelected();
		console.log(distro)
	})





	// Choose a url and inject it into the go button



