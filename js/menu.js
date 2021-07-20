$(()=>{
	
	$('header.topo #menu-abrir').click(()=>{
		$('.menu-lista ').fadeIn();
	})
	$('header.topo #menu-fechar').click(()=>{
		$('.menu-lista').fadeOut();
	})

	//**//
	let el = $('body');

	el.click(()=>{
		$('.menu-lista').fadeOut();
	})
	$('header.topo #menu-abrir').click(function(e){
 			e.stopPropagation();
 		})
})