let memberCount = 1;

$(document).ready(function () {

    $( '#addMemberButton' ).on( 'click', function() {
        let newMember = `<tr><td>${memberCount++}</td>`;
        let deleteButton = `<td><button id="deleteButton">Delete</button></td></tr>`;
        let newRow = newMember + deleteButton;
        $('table tbody').append(newRow);
    });

    $( '#myTable' ).on( 'click', '#deleteButton', function() {
        console.log('delete button works');
        $(this).closest('tr').remove();
    });









}); //end doc ready