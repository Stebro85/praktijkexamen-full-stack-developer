$(document).ready(function() {
    // Functie om artikelen op te halen via Ajax
    function laadArtikelen() {
        $.ajax({
            url:'../html/blog/artikelen.html',
            method: 'GET',
            success: function(data) {
                // Pak de eerste 3 artikelen
                let artikelen = $('<div>').html(data).find('article').slice(0,3);
                $('#blog-overzicht').html(artikelen);
            },
            error: function() {
                $('#blog-overzicht').html('<p>Kan de artikelen niet laden.</p>');
            }
        });
    }

    laadArtikelen();
});

function laadDetail(artikelId) {
    $.ajax({
        url:'../html/blog/artikelen.html',
        method:'GET',
        success: function(data) {
            let artikel = $(data). finc('#' + artikelId);
            $('#blog-detail').html(artikel);
        },
        error: function() {
            $('blog-detail').html('<p>KAn het artikel niet laden.</p>');
        }
    });
}

$(document).ready(function() {
    if($('#blog-detail').length) {
        let artikelId = 'artikel1';
        laadDetail(artikelId);
    }
});

//tooltip plugin
$(function() {
    $('input, textarea').tooltip({
        show:{effect:"fadeIn", duration:500},
        hide:{effect:"fadeOut", duration:500}
    });
});

//jQuery UI datepicker
$(function() {
    $('#datum').datepicker({
        dateFormat: 'dd-mm-yy'
    });
});

//formuliervalidatie
$('#nieuw-artikel-form').submit(function(e) {
    e.preventDefault();

    let titel = $('#titel').val().trim();
    let inhoud = $('#inhoud').val().trim();
    let datum = $('#datum').val().trim();


    if (titel ==="" || inhoud === "" || datum === "") {
         $('#melding').text('Vul alle velden in!').hide().fadeIn(500);
         return false;
    }
 
        $('#melding').text('Artikel succesvol toegevoegd!').hide().fadeIn(1000);
        $(this).trigger('reset');
});