///
///Interactive Amahi Network Troubleshooter
///
$("input[type='submit']").click(function() { return false; });
//Variables
amahiIp = "";
gatewayIp = "";
amahiDomain = "";

///
/// Print Functions
///

function printIt() {
	var $showThese = $('#step-column').find('.hidden');
	$showThese.removeClass('hidden');
	$('#step4').toggleClass('hidden');
	var $textInput = $('#step-column').find(':input[type=text]');
	$textInput.toggleClass('hidden');
	$('#insertPrint').append('<p><i class="icon-print btn" onClick="window.print()"></i> Now, Print this page.  If your answer is no to one of the steps, use the troubleshooting step that follows.</p>')
}

///
///Step One
///

$('#ip-address').click(stepOne);
///
///Step One
///
function stepOne() {
    amahiIp = ipAddress.value;
    if ((ipAddress.value).length < 6 ) {
	$('#step1').append("<div class=\"alert alert-block\" ><button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button><span class=\"badge badge-important\">Important</span>  Please enter the IP Address in the form of x.x.x.x (ex.  192.168.1.10).</div>");	
    } else {
	$('#step1').collapse('hide');

	$('.amahiIP').append(amahiIp);

     //$('#solution-column').toggleClass('hidden');
	$('#progress').toggleClass('hidden');
	$('#insertHere').append("<p><i class='icon-ok'></i> Step 1: Your HDA IP address is <span class=\"highlight\"> " +ipAddress.value+ "</span></p>");
	$('#step2').toggleClass('hidden');
    }
};

///
///Step 2
///
$('#domain-id').click(stepTwo);

function stepTwo() {
    amahiDomain = domain.value;
    if ((domain.value).length < 4) {
	$('#step2').append("<div class=\"alert alert-block\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button><span class=\"badge badge-important\">Important</span>  Please enter your HDA home domain in the form of name.tld (ex.  amahi.net).</div>");	
    } else {
	$('#step2').collapse('hide');
	$('#insertHere').append("<p><i class='icon-ok'></i> Step 2: Your HDA domain name is <span class=\"highlight\">  " +domain.value+ "</span></p>");

	$('.amdom').append(amahiDomain);
	$('#step3').toggleClass('hidden');
    };

};

///
///Step 3
///  
$('#gateway-id').on('click', function() {
    gatewayIp = gatewayIP.value;
    if ((gatewayIP.value).length < 6) {
	$('#step3').append("<div class=\"alert alert-block\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button><span class=\"badge badge-important\">Important</span>  Please enter the IP of your router.</div>");	
    } else {
	$('#step3').collapse('hide');
	$('#insertHere').append("<p><i class='icon-ok'></i> Step 3: Your router IP address is <span class=\"highlight\"> " +gatewayIP.value+ "</span></p>");
	$('#step4').toggleClass('hidden');
	
	
    };
});


///Makes Bootstrap Radio Groups Behave like radio buttons, almost
jQuery.fn.getParent = function(num) {
    var last = this[0];
    for (var i = 0; i < num; i++) {
        last = last.parentNode;
    }
    return jQuery(last);
};


$(".yesBtn").click(function (event) {
    event.preventDefault();
    var ParId = $(this).parent(1).attr("id");
    ParId = ParId.slice(0, -1)
    $("#"+ParId).val('yes');  
    //console.log(ParId);//for testing
});

$(".noBtn").click(function (event) {
    event.preventDefault();
    var ParId = $(this).parent(1).attr("id");
    ParId = ParId.slice(0, -1)
    $("#"+ParId).val('no');
});

///
///Step 4
///

$('#dnsYesNo').on('click', function() {
    if ((dnsFour.value) != "yes" && dnsFour.value != "no") {
	$('#step4').append("<div class=\"alert alert-block\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button><span class=\"badge badge-important\">Important</span>  Please select Yes or No. </div>");	
    } else if ((dnsFour.value) == "no") {
		$('#insertHere').append('<p><i class="icon-flag"></i>  Step 4: Your HDA DNS server is <strong class="text-error">NOT</strong> working for <strong class="highlight">local hostnames</strong>.');
		$('#step4').collapse('hide');
		$('#step4TS').toggleClass('hidden');
    } else {
	$('#step4').collapse('hide');
	$('#insertHere').append("<p><i class='icon-ok'></i> Step 4: Your HDA DNS server is working fine for <span class='highlight'>local hostnames</span></p>");
	$('#step5').toggleClass('hidden');	
 
     $('.gateIp').append(gatewayIp);
    };

}) ;

///
///Step 5
///

$('#gatewayYesNo').click(stepFive);

function stepFive () {
    if ((gatewayFive.value) != "yes" && gatewayFive.value != "no") {
	$('#step5').append("<div class=\"alert alert-block\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button><span class=\"badge badege-important\">Important</span>  Please select Yes or No. </div>");	
    } else if ((gatewayFive.value) == "no") {
		$('#insertHere').append('<p><i class="icon-flag"></i>  Step 5: Your <span class="highlight">router</span> is <span class= "text-error" >NOT</span> accessible from your HDA server.</p>');
		$('#step5').collapse('hide');
		$('#step5TS').toggleClass('hidden');
    } else {
	$('#step5').collapse('hide');
	$('#insertHere').append("<p><i class='icon-ok'></i> Step 5: Your <span class='highlight'>router</span> is accessible from your HDA server.</p>"); 
	$('#step6').toggleClass('hidden');	
    };

};

///
///Step 6
///

$('#internetYesNo').click(stepSix);

function stepSix () {
    if ((internetSix.value) != "yes" && internetSix.value != "no") {
	$('#step6').append("<div class=\"alert alert-block\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button><span class=\"badge badege-important\">Important</span>  Please select Yes or No. </div>");	
    } else if ((internetSix.value) == "no") {
		$('#insertHere').append('<p><i class="icon-flag"></i>  Step 6: Your HDA <strong class = "text-error" >cannot access</strong> <span class="highlight">the internet</span> (ping test failed).</p>');
		$('#step6').collapse('hide');
		$('#step6TS').toggleClass('hidden');
    } else {
	$('#step6').collapse('hide');
	$('#insertHere').append("<p><i class='icon-ok'></i> Step 6: Your HDA can access <span class='highlight'>the Internet</span></p>"); 
	$('#step7').toggleClass('hidden');	
    };

};
///
///Step 7
///

$('#externalHostYesNo').click(stepSeven);

function stepSeven () {
    if ((externalSeven.value) != "yes" && externalSeven.value != "no") {
	$('#step7').append("<div class=\"alert alert-block\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button><span class=\"badge badege-important\">Important</span>  Please select Yes or No. </div>");	
    } else if ((externalSeven.value) == "no") {
		$('#insertHere').append('<p><i class="icon-flag"></i>  Step 7: Your HDA DNS server is <strong class="text-error">NOT</strong> working for <span class = "highlight" >external hostnames</span></p>');
		$('#step7').collapse('hide');
		$('#step7TS').toggleClass('hidden');
    } else {
	$('#step7').collapse('hide');
	$('#insertHere').append("<p><i class='icon-ok'></i> Step 7: Your HDA DNS server is working fine for <span class = 'highlight' >external hostnames</span></p>"); 
	$('#step8').toggleClass('hidden');	
    };

};

///
///Step 8
///
$('#dashboardYesNo').click(stepEight);

function stepEight () {
    if ((dashboardEight.value) != "yes" && dashboardEight.value != "no") {
	$('#step8').append("<div class=\"alert alert-block\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button><span class=\"badge badege-important\">Important</span>  Please select Yes or No. </div>");	
    } else if ((dashboardEight.value) == "no") {
		$('#insertHere').append('<p><i class="icon-flag"></i>  Step 8: Your <span class="highlight">HDA Dashboard</span> is <span class="text-error">NOT</span> accessible.</p>');
		$('#step8').collapse('hide');
		$('#step8TS').toggleClass('hidden');
    } else {
	$('#step8').collapse('hide');
	$('#insertHere').append("<p><i class='icon-ok'></i> Step 8: Your <span class='highlight'>HDA Dashboard</span> is accessible.</p>"); 
	$('#step9').toggleClass('hidden');	
    };

};
///
///Step 9
///
$('#dnsServYesNo').click(stepNine);

function stepNine () {
    if ((dnsServNine.value) != "yes" && dnsServNine.value != "no") {
	$('#step9').append("<div class=\"alert alert-block\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button><span class=\"badge badege-important\">Important</span>  Please select Yes or No. </div>");	
    } else if ((dnsServNine.value) == "no") {
		$('#insertHere').append('<p><i class="icon-flag"></i>  Step 9: Your <span class="highlight">HDA DNS server</span> is <span class="text-error">NOT</span> used by your client computer.</p>');
		$('#step9').collapse('hide');
		$('#step9TS').toggleClass('hidden');
    } else {
	$('#step9').collapse('hide');
	$('#insertHere').append("<p><i class='icon-ok'></i> Step 9: Your <span class='highlight'>HDA DNS server</span> is used by your client computer.</p>"); 
	$('#step10').toggleClass('hidden');	
    };

};

///
///Step 10
///
$('#domainYesNo').click(stepTen);

function stepTen () {
    if ((domainTen.value) != "yes" && domainTen.value != "no") {
	$('#step10').append("<div class=\"alert alert-block\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button><span class=\"badge badege-important\">Important</span>  Please select Yes or No. </div>");	
    } else if ((domainTen.value) == "no") {
		$('#insertHere').append('<p><i class="icon-flag"></i>  Step 10: Your client computer <span class="text-error">DOES NOT</span> have the correct <span class="highlight">domain name</span></p>');
		$('#step10').collapse('hide');
		$('#step10TS').toggleClass('hidden');
    } else {
	$('#step10').collapse('hide');
	$('#insertHere').append("<p><i class='icon-ok'></i> Step 10: Your client computer has the correct <span class='highlight'>domain name</span></p>"); 
	$('#step11').toggleClass('hidden');	
    };

};
///
///Step 11
///
$('#routerClYesNo').click(stepEleven);

function stepEleven () {
    if ((routerClEleven.value) != "yes" && routerClEleven.value != "no") {
	$('#step11').append("<div class=\"alert alert-block\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button><span class=\"badge badege-important\">Important</span>  Please select Yes or No. </div>");	
    } else if ((routerClEleven.value) == "no") {
		$('#insertHere').append('<p><i class="icon-flag"></i>  Step 11: Your router <span class="highlight">is NOT accessible</span> from your client computer.</p>');
		$('#step11').collapse('hide');
		$('#step11TS').toggleClass('hidden');
    } else {
	$('#step11').collapse('hide');
	$('#insertHere').append("<p><i class='icon-ok'></i> Step 11: Your router <span class='highlight'>is accessible</span> from your client computer.</p>"); 
	$('#step12').toggleClass('hidden');	
    };

};
///
///Step 12
///
$('#internetClYesNo').click(stepTwelve);

function stepTwelve () {
    if ((internetClTwelve.value) != "yes" && internetClTwelve.value != "no") {
	$('#step12').append("<div class=\"alert alert-block\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button><span class=\"badge badege-important\">Important</span>  Please select Yes or No. </div>");	
    } else if ((internetClTwelve.value) == "no") {
		$('#insertHere').append('<p><i class="icon-flag"></i>  Step 12: You <span class="text-error">CANNOT</span> access <span class="highlight">the internet</span> on your client computer (ping test unsuccessful).</p>');
		$('#step12').collapse('hide');
		$('#step12TS').toggleClass('hidden');
    } else {
	$('#step12').collapse('hide');
	$('#insertHere').append("<p><i class='icon-ok'></i> Step 12: You can access <span class='highlight'>the internet</span> on your client computer (ping test successful).</p>"); 
	$('#step13').toggleClass('hidden');	
    };

};
///
///Step 13
///
$('#dnsClYesNo').click(stepThirteen);

function stepThirteen () {
    if ((dnsClThirteen.value) != "yes" && dnsClThirteen.value != "no") {
	$('#step11').append("<div class=\"alert alert-block\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button><span class=\"badge badege-important\">Important</span>  Please select Yes or No. </div>");	
    } else if ((dnsClThirteen.value) == "no") {
		$('#insertHere').append('<p><i class="icon-flag"></i>  Step 13: Your HDA DNS server is <span class="text-error">NOT</span> working fine for <span class="highlight">external hostnames</span> on your client computer.</p>');
		$('#step13').collapse('hide');
		$('#step13TS').toggleClass('hidden');
    } else {
	$('#step13').collapse('hide');
	$('#insertHere').append("<p><i class='icon-ok'></i> Step 13: Your HDA DNS server is working fine for <span class='highlight'>external hostnames</span> on your client computer.</p>"); 
	$('#step14').toggleClass('hidden');	
    };

};


