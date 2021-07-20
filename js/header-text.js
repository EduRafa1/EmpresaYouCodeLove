$(()=>{
		let frase = ['Marketing Digital','Captação de Clientes','Criação de Sites']
		let frases2 = ['moderno','personalizado','atual']
		let cont = 0
		let cont2 = 0
	
		let time = 3000


		function typeWriter(elemento){
			let textoArray = elemento.innerHTML.split('');
			elemento.innerHTML = '';
			textoArray.forEach((letra, i) =>{
				setTimeout(function(){
						elemento.innerHTML += letra;
				}, 100 * i);
			});
		}

	setInterval(function(){
		
			$('header.topo .container-info-header').html('<h2>'+frase[cont]+'</h2>');
			//VAlidação da contagem pra troca de palavras
			cont++;
			if(cont == 3){
				cont = 0;
			}
			let titulo = document.querySelector('h2');
			typeWriter(titulo);

	},time)

	setInterval(function(){

		$('.trabalhamos .titulo-trabalho .titulo-wraper').html('<h3>'+frases2[cont2]+'</h3>');
		cont2++;
		if(cont2 == 3)
			cont2 = 0
		let titulo2 = document.querySelector('h3');
		typeWriter(titulo2);
		
		


	}, 2000)

	

	
})