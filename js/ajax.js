function loadData() {
	$('#streetview').attr('src', 'http://placehold.it/500x350');  
    var attraction = $('#attraction').val();
	var streetview_url = "https://maps.googleapis.com/maps/api/streetview?size=500x350&location=" + attraction;
	$('#streetview').attr('src', streetview_url);  
    
	$('#wiki').empty();
    var wiki_url = 'http://zh.wikipedia.org/w/api.php?action=opensearch&search=' + attraction + '&format=json&callback=mycallback';  
    $.ajax({
        url: wiki_url,
        dataType: "jsonp",
        success: function (response) {
			for (var i=0; i<response[1].length; i++) {
				var title = response[1][i];
				var desc = response[2][i];
				var link = response[3][i];
				$('#wiki').append('<h3><a href="' + link + '" target="_blank">' + title + '</a></h3><p>' + desc + '</p>');
			}
			console.log(response[1]);
			console.log(response[2]);
			console.log(response[3]);
        }
    })
    return false;
};

$('#form-container').submit(loadData);