// JavaScript Document

function showPage(id)
{
	var totalNumberOfPages = 6;
	for(var i = 1; i <= totalNumberOfPages; i++)
	{
		if(document.getElementById('page'+i))
		{
			document.getElementById('page'+i).className -= " active";
			document.getElementById('page'+i).style.visibility = 'hidden';
			
		}
		
		
		if(document.getElementById('page'+id))
		{
			document.getElementById('page'+id).style.visibility = 'visible';
		}
	}
	
    document.getElementById('page'+id).className += " active";
}