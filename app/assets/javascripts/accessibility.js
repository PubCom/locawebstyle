$(function(){

 	// Chama função de criação de menu acessível.
	accessMenu();

	// $('select, textarea, h1, h2, h3, h4, h5, h6, p').attr('tabindex','0');
	// $('input, select, .pathWay li.active > a, .btn-primary, .alert a').attr('tabindex','2');
	// $('.btn-primary').attr('tabindex','3');
	// $('.tabs li a').attr('tabindex','4');
	//$('#menuPrincipal li > a, #main .chamadasBox h3 a, .headerContent h1, .alert').attr('tabindex','2');
	$('#menuPrincipal li > a').attr('tabindex','2');
	$('.btn, .tabs a').attr('tabindex','3');
	//$('input, select, .btn.btn-primary').attr('tabindex','2');

//
// WAI-ARIA nos elementos
//

	//
	// Menu
	$('#menuPrincipal').attr('role','navigation');
	$('#menuPrincipal li a').attr('role','menuitem');

	//
	// Elementos Geral
	// $('.pathWays').attr('role','navigation');
	$('#rodape').attr('role','contentinfo');
	$('.alert').attr('role','alert');
	$('a.btn, .modal-header .close').attr('role','button');
	$('.boxGray').attr('role','region');
	$('.boxGray h2').attr('role','presentation');
	$('.headerPrincipal').attr('role','banner');
	$('.content').attr('role','main'); // criar essa classe nos produtos ??
	$('.sidebar').attr('role','complementary');
	$('input.required').attr('aria-required','true');
	$('.lnkCoverAll').attr('tabindex','3');
	$('.chamadasBox h3 > a').attr('aria-hidden','true');

	//
	// TABS
	$('.tabs').attr('role','tablist');

	// Inserie ARIA-SELECTED em TABS ativas

	$('.tabs li a').attr({
		role: 'tab',
		'aria-selected': 'false',
		tabindex : 3
	});

	$('.tabs li.active a').attr('aria-selected','true');
	$('.tabs li.active a').attr('tabindex','3');

	

	// $('[data-toggle="tab"]').attr('aria-selected','false');
	// $('.active [data-toggle="tab"]').attr('aria-selected','true');
	// $('[data-toggle="tab"]').attr('role','tab').on('show', function(e){
	// 	$(e.target).attr('aria-selected','true');
	// 	$(e.relatedTarget).attr('aria-selected','false');
	// });

	// Verifica se existe um elemento mais específico que o MAIN com o conteúdo principal
	// if ($('#main .limite .row .span12').length == 1) {
	// 	$('#main .limite .row .span12').attr('role','main');
	// } else {
	// 	$('#main').attr('role','main');
	// }



	//collapse
	$('.boxCollapse header').each(function(){
		var title = $(this).find('h4').text();
		var target = $(this).data('target');
		$(this).prepend('<a href="#" role="button" aria-haspopup="true" aria-controls="'+target+'" aria-label="'+title+'" title="'+title+'" class="lnkCollapse" tabindex="3"></a>');
	})
	$('.collapse').find('*[tabindex="3"]').attr('tabindex','0');
	

	// $('[data-toggle="collapse"]').attr('role','button').attr('tabindex','3');

	//Notificaçao
	$('.alert, .focusOn').attr('tabindex','-1').focus();

	//Ir para o conteudo 
	$('.lnkContent').on('click',function(e){
    $('.titleContent').attr('tabindex', '-1').focus().css('outline','none');
    $('html, body').animate({
		    scrollTop: $(".titleContent").offset().top
		}, 500);
    e.preventDefault();
  })


})

function accessMenu(){
	// Colocando o menu acessível logo depois do Logo. Assim o logo é lido primeiro.
	$('.serviceName').after('<nav class="menuAccess" />');
	$('[data-access]').each(function(){
		var title = $(this).attr('title');
		var  href = $(this).attr('href');
		var  text = $(this).text();
		$('.menuAccess').append('<a role="menuitem" tabindex="1" href="'  + href + '" aria-label="' + title + '" title="' + title + '">' + text + '</a>');
	})      
}
