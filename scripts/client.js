$(document).ready(function () {
    $( '#calculate' ).on( 'click', function() {
        let oneProgram = $('#oneProgram').val();
        let twoProgram = $('#twoProgram').val();
        let kidsProgram = $('#kidsProgram').val();
        console.log('one', parseInt(oneProgram));
    });
}); //end doc ready