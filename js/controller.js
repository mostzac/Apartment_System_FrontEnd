$(document).ready(function(){

	$.getJSON( "https://localhost:8080/api/users", function( data ) {
	  var items = [];
	  $.each( data.content, function(i,user) {
	  	items.push("<div class='card-deck mb-3 text-center'>"+
          "<div class='card mb-4 lg-4 box-shadow'>"+
            "<div class='card-header'>"+
              "<h4 class='my-0 font-weight-normal'>"+user.account+"</h4>"+
            "</div>"+
            "<div class='card-body'>"+
              "<h1 class='card-title pricing-card-title'>"+user.name +"<small class='text-muted'>/ mo</small></h1>"+
              "<ul class='list-unstyled mt-3 mb-4'>"+
                "<li>"+user.room+"</li>"+
                "<li>无限美国境内电话</li>"+
                "<li>无限美国境内短信</li>"+
              "</ul>"+
              "<button type='button' class='btn btn-lg btn-block btn-outline-primary'>购买</button>"+
            "</div>"+
          "</div>"+
         "</div>")
      });
	 
	  $( items.join( "" )).appendTo( "#price-container" );
	});

});