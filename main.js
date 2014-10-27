$(document).on('ready', function() {
  	
	var templateStore = $('#store').html();
	var template = Handlebars.compile(templateStore);

	for (var i = 0; i < productsData.productsList.length; i++) {
	  console.log(productsData.productsList[i]);
	  var outputHTML = template(productsData.productsList[i]);
	  $('#product-container').append(outputHTML);
	};

	$(document).on('click', '.add', function(){
		var teplateWishlist = $('#wishlist-items').html();
		var template2 = Handlebars.compile(teplateWishlist);
		for (var i = 0; i < productsData.productsList.length; i++) {
		  var outputHTML2 = template2(productsData.productsList[i]);
		  $('#wishlist').append(outputHTML2);
		};
	});	

	$(document).on('click', '.remove', function(){
		console.log($(this));
	});

});