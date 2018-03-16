$(document).ready(
	function(){
		/*$('.carousel').carousel({
	      interval: 5200
	    });*/

		$(".servicio_consignacion").hide();
		$(".alquileres").hide();
		
		$("#servicio_contado").change(function(){
			if($(this).is(":checked")){
				$(".servicio_consignacion").hide();
				$(".servicio_contado").show();
				$(".alquileres").hide();
			}
		});

		$("#servicio_consignacion").change(function(){
			if($(this).is(":checked")){
				$(".servicio_consignacion").show();
				$(".servicio_contado").hide();
				$(".alquileres").hide();

			} 
		});

		$("#alquileres").change(function(){
			if($(this).is(":checked")){
				$(".servicio_consignacion").hide();
				$(".servicio_contado").hide();
				$(".alquileres").show();
			} 
		});

		$('.scroll').on('click', function(e){
			e.preventDefault();
			var strAncla = '#' + $(this).data('scroll');
			$('html,body').animate({scrollTop: $(strAncla).offset().top}, 2000);
		});

		$('#mapa_sitio').jstree({
			"core" : {
			    "themes" : {
			      "variant" : "large"
			    }
			}
		});
	}
);