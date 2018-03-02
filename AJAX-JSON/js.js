var i=0;
var container =document.getElementById('table');
var btn = document.getElementById('btn');

btn.addEventListener('click', 	function(){
	
		var ourRequest = new XMLHttpRequest();
		ourRequest.open('GET', 'animals.json');
		ourRequest.onload = function(){
			var data= JSON.parse(ourRequest.responseText);
			for(k=0;k<9;k++){
		    renderHTML(data);
			}
			if(i>8){
			document.getElementById('btn').style.display='none';
		    document.getElementById('myInput').style.display='block';
			}
		}
		ourRequest.send();
		document.getElementById("num").innerHTML="Number of records found:9";
})

function renderHTML(data){
	id = i+1;	
	var string ="<tr><td>"+id+"</td><td>"+data[i].name+"</td><td>"+data[i].species+"</td><td>";
	
	for(j=0;j<data[i].foods.likes.length;j++)
	{
		string+=data[i].foods.likes[j]+" ";
	}
	string+="</td><td>";
	for(j=0;j<data[i].foods.dislikes.length;j++)
	{
		string+=data[i].foods.dislikes[j]+" ";
	}
	string+="</td></tr>";
	container.insertAdjacentHTML('beforeend', string);
	i++;	
}




function myFunction() {
  var input, filter, table, tr, td, i,count=9;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
	        td = tr[i].getElementsByTagName("td")[1];
	    	if (td) {
	      	if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
	        tr[i].style.display = "";
	      	} else {
		        td = tr[i].getElementsByTagName("td")[2];
		    	if (td) {
		      	if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
		        tr[i].style.display = "";
		      	} else {
			        td = tr[i].getElementsByTagName("td")[3];
			    	if (td) {
			      	if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
			        tr[i].style.display = "";
			      	} else {
				        td = tr[i].getElementsByTagName("td")[4];
				    	if (td) {
				      	if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
				        tr[i].style.display = "";
				      	} else {
				        tr[i].style.display = "none";
				        count--;
				      	}
				    	}
			      	}
			    	}	
		      	}
		    	}
	      	}
	    	}
      }
    }
  }
  document.getElementById("num").innerHTML="Number of records found:"+count;
}
