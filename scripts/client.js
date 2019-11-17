let memberCount = 1;

$(document).ready(function () {

    $( '#addMemberButton' ).on( 'click', function() {
        let newMember = `<tr><td>${memberCount++}</td>`;
        let deleteButton = `<td><button id="deleteButton">Delete</button></td></tr>`;
        let newRow = newMember + deleteButton;
        $('table tbody').append(newRow);
    });

    $( '#deleteButton' ).on( 'click', function() {
        console.log('delete button works');
    });









}); //end doc ready