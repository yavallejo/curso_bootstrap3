jQuery(document).ready(function($) {
	$(".mensaje_escondio").css('display', 'none');

	$("#enviar").click(function() {
		var input_validado = $(".form-control").val();
		

		if (input_validado =="")
		 {
		 	$( "#error" ).addClass( "has-error" );
		 	$(".mensaje_escondio").css('display', 'block');
		 	
		 }
		 else
		 {
		 alert("mi input "+input_validado);
	 	
		 }
	   });
	
});