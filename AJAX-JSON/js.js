var i=0;
var count = 0;
var container =document.getElementById('table');
var btn = document.getElementById('btn');

btn.addEventListener('click', 	function(){
	if((i%3)==0){
	count++;
    }
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+count+'.json');
	ourRequest.onload = function(){
		var data= JSON.parse(ourRequest.responseText);
		 renderHTML(data);
	}
	ourRequest.send();
	i++;
	if(i>8){
		document.getElementById('btn').style.display='none';
	}
})

function renderHTML(data){
	var string ="<tr><td>"+i+"</td><td>"+data[i%3].name+"</td><td>"+data[i%3].species+"</td><td>";
	
	for(j=0;j<data[i%3].foods.likes.length;j++)
	{
		string+=data[i%3].foods.likes[j]+" ";
	}
	string+="</td><td>";
	for(j=0;j<data[i%3].foods.dislikes.length;j++)
	{
		string+=data[i%3].foods.dislikes[j]+" ";
	}
	string+="</td></tr>";
	container.insertAdjacentHTML('beforeend', string);
}