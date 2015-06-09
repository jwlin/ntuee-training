//$(function() { // $( document ).ready()
	$('#toggleClass').click(function() {
		$('#title').toggleClass( "highlight");
	});
	
	
	$('#changeClass').click(function() {
		$('h2').attr('style', 'color:red');
	});
	
	
	$('#changeHref').click(function() {
		$('body h1 a').attr('href', 'http://www.ntu.edu.tw/academics/academics.html');
	});
	
	
	$('#changeText').click(function() {
		var myCollege = $('#text').val();
		//$('.college:eq(0)').children('h2').text(myCollege);
		$('.college').first().find('h2').text(myCollege);
	});
	
	
	$('#addDOMTree').click(function() {
		var myDiv = '<div class="college"> \
			<h2>法律學院</h2> \
			<ul> \
				<li>法律學系</li> \
				<li>科際整合法律學研究所</li> \
			</ul> \
			</div>';
		//$('.college').first().before(myDiv);
		$('#content').prepend(myDiv);
	});
	
	$('#addEach').click(function() {
		$('li').each(function(){
			var orig = $(this).text();
			$(this).text(orig + ', ' + orig.length);			
		});
	});
//});