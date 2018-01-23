// JavaScript Document

var Rank_0 = 'Tribune';
var Rank_1 = 'Cavalier';
var Rank_2 = 'Legate';
var Rank_3 = 'Consul';
var Rank_4 = 'Magistrate';
var Rank_5 = 'Governor';
var Rank_6 = 'Patrician';

var SovStreamTeam = ['Adeadlyfork', 'BlueKnight_VR', 'Bognogus', 'Carrumba', 'ChaosDispenser', 'CptBlowupDoll', 'Daebol', 'DarkInsanities', 'DJTruthsayer', 'Ecrodorious', 'Frici', 'The_Thargoid', 'Jacen_G', 'Jessica_Sonnet', 'Khaleb_Daarke', 'Malic_VR', 'Matoro', 'MarvinDarkstone', 'chicken_dipps', 'TrashPandaM1dna', 'DansNexus', 'PaleGringo', 'Rormir', 'Selezen', 'Simon', 'Skyhijinx', 'Skyrme', 'Speedvice', 'madsplat', 'sumodeluxe', 'TheCommander', 'TheHoneyThief', 'UnseeingWhales', 'Zenumtin', 'Icehornet_', 'SteazTV', 'otherbuttons', 'WoxLi', 'Jacen_G', 'RoughriderUT', 'Speedvice', 'Zenumtin', 'CMDR_Nightlock', 'Nitebytes', 'osmium_scorpion', 'AstrocatFreitag', 'BTNMasherDraco', 'Thunderceptor11', 'Talung', 'Burbs_256', 'PaganPryde', 'WaynesCraft', 'Matriarch_Draca', 'Sir_Lambsalot', 'aetaric', 'DrBo42', 'abrekke83', 'Aitke12', 'Simpology', 'Turarts', 'Aggy', 'Ivorysmoon', 'Neo_ERS', 'JediBear', 'Hawnee', 'Porter_John', 'Lavangfan'];

var Rank_5_Streamers = ['Bognogus', 'carrumba', 'Cazenn', 'Ecrodorious', 'Valkyrien27'];
var Rank_4_Streamers = ['icehornet_', 'DLCoates1', 'PaleGringo', 'Wizpirio', 'CptBlowUpDoll', 'Rormir', 'jaxmaru', 'cmdrnade'];
var Rank_2_Streamers = ['Loyallte', 'Faabmaster', 'Izehouze'];
var Rank_1_Streamers = ['Kongatron', 'LanceUppercut_CS'];

var SovereignNewsTitle = ['Brestla Reclaimed for the greater good!', 
						  'Promotions'];

var SovereignNewsDescription = ['Brestla has been reclaimed by the excelent work of our commanders and the Sovereigntys very own strike force the Home Fleet!', 
								'Congratulations to Commander Bognogus for his excellent work in the sovereign military, for his excellent work he is now promoted to Admiral of Home fleet operations!'];

var Alert_Description = 'There is no current active mission, thank you for the work you have been putting in everyone, we couldnt make this possible without all of you!';

var Event_Image = '<img src="https://pbs.twimg.com/profile_images/902285775382994948/sp3isoKI_400x400.jpg"/>';

var Event_Title = 'One Special Day';

var Event_Info = 'The UK games industry is generously committing time, sales and resources for gamers’ charity SpecialEffect on 29 September. <br/><br/>For more information watch <a href="https://youtu.be/InN_394Hx6I" style="color: skyblue;">this video</a> or see <a href="http://www.onespecialday.org.uk/" style="color: skyblue;">this site.</a><br/><br/> if youre taking part in one special day as a caster or mod join the <a href="https://discord.gg/grTHYmS" style="color: skyblue;">discord</a>';

function openNav() 
{
	"use strict";
	var nav = document.getElementById("sideNavigation");

	if(nav.style.width === "0px")
	{
		nav.style.width = "250px";
		return;
	}
	else
	{
		nav.style.width = "0px";
		return;
	}
}

function playSquee()
{
	"use strict";
	var audio = document.getElementById("squee");
	if(audio.paused)
		{
			audio.play();
		}
	else
		{
			audio.pause();
			audio.currentTime = 0;
		}
}

function changeImg()
{
	"use strict";
	var newImgNumber =Math.floor(Math.random()*9);
	document.getElementById('background').src = '../communitybackgrounds/background'+newImgNumber+'.png';
}
window.onload=changeImg;

var allowedKonamiKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};
var allowedBrainpowerKeys = {
  66: 'b',
  82: 'r',
  65: 'a',
  73: 'i',
  78: 'n',
  80: 'p',
  79: 'o',
  87: 'w',
  69: 'e'
};


var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
var brainPower = ['b', 'r', 'a', 'i', 'n', 'p', 'o', 'w', 'e', 'r'];

var konamiCodePosition = 0;
var brainPowerPosition = 0;

document.addEventListener('keydown', function(e) 
{
	"use strict";
	var Konamikey = allowedKonamiKeys[e.keyCode];
	var Brainpowerkey = allowedBrainpowerKeys[e.keyCode];
  	
	var requiredKonamiKey = konamiCode[konamiCodePosition];
  	var requiredBrainpowerKey = brainPower[brainPowerPosition];
	
	if (Konamikey === requiredKonamiKey) 
  	{

    	konamiCodePosition++;

    	if (konamiCodePosition === konamiCode.length) 
		{
      		rainbows();
      		konamiCodePosition = 0;
    	}
  	} 
	else 
  	{
    	konamiCodePosition = 0;
  	}
	
	if (Brainpowerkey === requiredBrainpowerKey) 
  	{

    	brainPowerPosition++;

    	if (brainPowerPosition === brainPower.length) 
		{
      		brainpower();
      		brainPowerPosition = 0;
    	}
  	} 
	else 
  	{
    	brainPowerPosition = 0;
  	}
});

function rainbows() 
{
	"use strict";
	alert("Delivering rainbows!");
	document.getElementById('Unicorn').src = 'https://www.youtube.com/embed/17o1OlroNSE?autoplay=1';
	document.getElementById('Unicorn').style.display = 'block';
}

function brainpower() 
{
	"use strict";
	if(document.getElementById('Unicorn').style.display === 'block')
	{
		alert("O-oooooooooo AAAAE-A-A-I-A-U-JO-oooooooooooo AAE-O-A-A-U-U-A-E-eee-ee-eee AAAAE-A-E-I-E-A-JO-ooo-oo-oo-oo EEEEO-A-AAA-AAAA");
  		document.getElementById('Unicorn').src = 'https://player.twitch.tv/?video=v158178904&autoplay=true';
	}
}

function copyToClipboard(elementId) 
{
			
	"use strict";
	var aux = document.createElement("input");
			
	
	aux.setAttribute("value", document.getElementById(elementId).innerHTML);
			
	
	document.body.appendChild(aux);
			
	
	aux.select();
			
	
	document.execCommand("copy");
			
	
	document.body.removeChild(aux);
			
}





