// JavaScript Document

function fetchSovereignInfluence()
{
	getBrestlaSystemInfo();
}


var twitchAPI = new XMLHttpRequest();
	
function getBrestlaSystemInfo()
{
	twitchAPI.open('GET', "https://www.edsm.net/api-system-v1/factions?systemName=Brestla", true);
	twitchAPI.send();
 
	twitchAPI.onreadystatechange = processBrestlaInfluence;
}

function processBrestlaInfluence()
{
	if (twitchAPI.readyState == 4 && twitchAPI.status == 200)
	{
    	var edsmAPIresponse = JSON.parse(twitchAPI.responseText);
		
		for(x=0; x < edsmAPIresponse.factions.length; x++)
    	{
        	if(edsmAPIresponse.factions[x].name == "The Imperial Inquisition" || edsmAPIresponse.factions[x].name == "The Sovereignty")
			{
            	document.getElementById('brestlaInfluence').style.width = edsmAPIresponse.factions[x].influence * 100 + '%';
            	document.getElementById('brestlaInfluence').innerHTML = edsmAPIresponse.factions[x].influence * 100 + '%';
        	}
    	}
	}
}
