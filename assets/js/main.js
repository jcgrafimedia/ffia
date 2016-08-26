$(function() {

	$("#btn_menu").click(function(event) {
		$("#nav_small").toggle('slow');
	});


	/* 	Action del Menu Principal
	================================================================*/

	var URLactual = window.location;
	var ruta_base = 'http://serv-web/Newweb/cdeportivo_usmp/menores/';

	if(URLactual == ruta_base || URLactual == ruta_base + 'index.html'){

		$('#home').css('background-color', '#1585CF');
	}else

	if(URLactual == ruta_base + 'plantel.html'){

		$('#plantel').css('background-color', '#1585CF');

	}else

	if(URLactual == ruta_base + 'torneos/2016/federacion.html' ||
	   URLactual ==	ruta_base + 'torneos/2016/categoria/sub18/jugadores.html' ||
	   URLactual == ruta_base + 'torneos/2016/categoria/sub18/resultados1.html' ||
	   URLactual == ruta_base + 'torneos/2016/categoria/sub18/resultados2.html' ||
	   URLactual == ruta_base + 'torneos/2016/categoria/juvenil/jugadores.html' ||
	   URLactual == ruta_base + 'torneos/2016/categoria/juvenil/resultados1.html' ||
	   URLactual == ruta_base + 'torneos/2016/categoria/juvenil/resultados2.html' ||
	   URLactual == ruta_base + 'torneos/2016/categoria/infantil/jugadores.html' ||
	   URLactual == ruta_base + 'torneos/2016/categoria/infantil/resultados1.html' ||
	   URLactual == ruta_base + 'torneos/2016/categoria/infantil/resultados2.html' ||
	   URLactual == ruta_base + 'torneos/2016/categoria/calichin/jugadores.html' ||
	   URLactual == ruta_base + 'torneos/2016/categoria/calichin/resultados1.html' ||
	   URLactual == ruta_base + 'torneos/2016/categoria/calichin/resultados2.html' ||
	   URLactual == ruta_base + 'torneos/2016/categoria/precalichin/jugadores.html' ||
	   URLactual == ruta_base + 'torneos/2016/categoria/precalichin/resultados1.html' ||
	   URLactual == ruta_base + 'torneos/2016/categoria/precalichin/resultados2.html' ||
	   URLactual == ruta_base + 'torneos/2016/categoria/base/jugadores.html' ||
	   URLactual == ruta_base + 'torneos/2016/categoria/base/resultados1.html' ||
	   URLactual == ruta_base + 'torneos/2016/categoria/base/resultados2.html'){
		
		$('#copa').css('background-color', '#1585CF');

	}

	/* 	Efecto Sub-Menu
	================================================================*/
			
	$('#facultad').hover(
		function dentro() {
			$('#menu_fa').css('display' , 'block');
			$('#menu_fa').addClass('sub_menu_fa');
			$('#facultad').css('background-color' , 'rgb(42, 55, 68)');
		},
		function fuera() {
			$('#menu_fa').css('display' , 'none');
			$('#menu_fa').removeClass('sub_menu_fa');
			$('#facultad').css('background-color' , 'transparent');
		}
	);

		$('#menu_fa').hover(
			function dentro() {
				$('#menu_fa').css('display' , 'block');
				$('#menu_fa').addClass('sub_menu_fa');
				$('#facultad').css('background-color' , 'rgb(42, 55, 68)');
			},
			function fuera() {
				$('#menu_fa').css('display' , 'none');
				$('#facultad').css('background-color' , 'transparent');
			}
		);

	$('#escuelas').hover(
		function dentro() {
			$('#menu_esc').css('display' , 'block');
			$('#menu_esc').addClass('sub_menu_esc');
			$('#escuelas').css('background-color' , 'rgb(42, 55, 68)');
		},
		function fuera() {
			$('#menu_esc').css('display' , 'none');
			$('#menu_esc').removeClass('sub_menu_esc');
			$('#escuelas').css('background-color' , 'transparent');
		}
	);

	$('#menu_esc').hover(
		function dentro() {
			$('#menu_esc').css('display' , 'block');
			$('#menu_esc').addClass('sub_menu_esc');
			$('#escuelas').css('background-color' , 'rgb(42, 55, 68)');
		},
		function fuera() {
			$('#menu_esc').css('display' , 'none');
			$('#escuelas').css('background-color' , 'transparent');
		}
	);
	

});

