$(function() {

	/* 	Action del Menu Principal
		================================================================*/

	var URLactual = window.location;
	var ruta_base = 'http://localhost:8004/';

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

	/* 	Efecto Scroll en Header
		================================================================*/
	
	var flag = false;
	var scroll;
	var size;

	$(window).scroll(function(event) {
		scroll = $(window).scrollTop();
		
		if(scroll > 200 ){

			if(!flag){

				$("#container_menu").removeClass('menu_dynamic');
				$("#usmp_logo").removeClass('logo');
				$("#main_nav").removeClass('nav_principal');
				$("#usmp").removeClass('usmp');
				$("#facultad").removeClass('facultad');
				$("#escuelas").removeClass('escuelas');
				$("#posgrados").removeClass('posgrados');
				$("#institutos").removeClass('institutos');
				$("#epu").removeClass('epu');
				$("#admision").removeClass('admision');

				$("#container_menu").addClass('menu_dynamic2');
				$("#usmp_logo").addClass('logo2');
				$("#main_nav").addClass('nav_principal2');
				$("#usmp").addClass('usmp2');
				$("#facultad").addClass('facultad2');
				$("#escuelas").addClass('escuelas2');
				$("#posgrados").addClass('posgrados2');
				$("#institutos").addClass('institutos2');
				$("#epu").addClass('epu2');
				$("#admision").addClass('admision2');

				$('#usmp').hover(
					function dentro() {
						$('#usmp').css('background-color' , 'rgb(228, 75, 48)');
					},
					function fuera() {
						$('#usmp').css('background-color' , 'transparent');
					}
				);
				$('#facultad').hover(
					function dentro() {
						$('#facultad').css('background-color' , 'rgb(228, 75, 48)');
					},
					function fuera() {
						$('#facultad').css('background-color' , 'transparent');
					}
				);
				$('#escuelas').hover(
					function dentro() {
						$('#escuelas').css('background-color' , 'rgb(228, 75, 48)');
					},
					function fuera() {
						$('#escuelas').css('background-color' , 'transparent');
					}
				);
				$('#posgrados').hover(
					function dentro() {
						$('#posgrados').css('background-color' , 'rgb(228, 75, 48)');
					},
					function fuera() {
						$('#posgrados').css('background-color' , 'transparent');
					}
				);
				$('#institutos').hover(
					function dentro() {
						$('#institutos').css('background-color' , 'rgb(228, 75, 48)');
					},
					function fuera() {
						$('#institutos').css('background-color' , 'transparent');
					}
				);
				$('#epu').hover(
					function dentro() {
						$('#epu').css('background-color' , 'rgb(228, 75, 48)');
					},
					function fuera() {
						$('#epu').css('background-color' , 'transparent');
					}
				);
				$('#admision').hover(
					function dentro() {
						$('#admision').css('background-color' , 'rgb(228, 75, 48)');
					},
					function fuera() {
						$('#admision').css('background-color' , 'transparent');
					}
				);
				flag = true;
			}
				
		}else {
			if(flag){

				$("#container_menu").removeClass('menu_dynamic2');
				$("#usmp_logo").removeClass('logo2');
				$("#main_nav").removeClass('nav_principal2');
				$("#usmp").removeClass('usmp2');
				$("#facultad").removeClass('facultad2');
				$("#escuelas").removeClass('escuelas2');
				$("#posgrados").removeClass('posgrados2');
				$("#institutos").removeClass('institutos2');
				$("#epu").removeClass('epu2');
				$("#admision").removeClass('admision2');

				$("#container_menu").addClass('menu_dynamic');
				$("#usmp_logo").addClass('logo');
				$("#main_nav").addClass('nav_principal');
				$("#usmp").addClass('usmp');
				$("#facultad").addClass('facultad');
				$("#escuelas").addClass('escuelas');
				$("#posgrados").addClass('posgrados');
				$("#institutos").addClass('institutos');
				$("#epu").addClass('epu');
				$("#admision").addClass('admision');

				$('#usmp').hover(
					function dentro() {
						$('#usmp').css('background-color' , 'rgb(42, 55, 68)');
					},
					function fuera() {
						$('#usmp').css('background-color' , 'transparent');
					}
				);
				$('#facultad').hover(
					function dentro() {
						$('#facultad').css('background-color' , 'rgb(42, 55, 68)');
					},
					function fuera() {
						$('#facultad').css('background-color' , 'transparent');
					}
				);
				$('#escuelas').hover(
					function dentro() {
						$('#escuelas').css('background-color' , 'rgb(42, 55, 68)');
					},
					function fuera() {
						$('#escuelas').css('background-color' , 'transparent');
					}
				);
				$('#posgrados').hover(
					function dentro() {
						$('#posgrados').css('background-color' , 'rgb(42, 55, 68)');
					},
					function fuera() {
						$('#posgrados').css('background-color' , 'transparent');
					}
				);
				$('#institutos').hover(
					function dentro() {
						$('#institutos').css('background-color' , 'rgb(42, 55, 68)');
					},
					function fuera() {
						$('#institutos').css('background-color' , 'transparent');
					}
				);
				$('#epu').hover(
					function dentro() {
						$('#epu').css('background-color' , 'rgb(42, 55, 68)');
					},
					function fuera() {
						$('#epu').css('background-color' , 'transparent');
					}
				);
				$('#admision').hover(
					function dentro() {
						$('#admision').css('background-color' , 'rgb(42, 55, 68)');
					},
					function fuera() {
						$('#admision').css('background-color' , 'transparent');
					}
				);	
				flag = false;
			}
		}
	});
	
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

