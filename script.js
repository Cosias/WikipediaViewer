
function searchBtn(){
	var searchTerm = $("#search").val();
	var apiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=?&search="+searchTerm;

  $.getJSON(apiUrl, function(data){
		$(output).html('');
		data[1].forEach(function(info,x){
			$("#output").append('<li class = "well"><a href ='+ data[3][x]+' target ="_blank" >'+info+'</a><p>'+data[2][x]+'</p></li>');
		});
	})
}//Searches wikipedia and updates page results 

$("#search").on('keyup', function (e) {
    if (e.keyCode == 13 && ($("#search").val() != '')) {
    	searchBtn();
        $("#search").val(''); 
    }
});//Submit on enter key 

$("#removeBtn").click(function(){
	$('#search').val('');
})//Resets search input

$("#refreshBtn").click(function(){
	$('#output').html('');
	$('#search').val('');
})//Refreshes the page 