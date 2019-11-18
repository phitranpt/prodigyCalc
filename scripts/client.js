//setting variables
let memberCount = 1;
let oneAdultProgram = 165;
let twoAdultProgram = 185
let kidsProgram = 130;

$(document).ready(function () {

    //add new members
    $( '#addMemberButton' ).on( 'click', function() {
        let newMember = `<tr><td>${memberCount++}</td>`;
        let memberLevel = `<td>'Member Level'</td>`;
        let extraDiscount = `<td>'Extra Discount'</td>`;
        let memberPrice = `<td>'Member Price'</td>`;
        let deleteButton = `<td><button id="deleteButton">Delete</button></td></tr>`;
        let newRow = newMember + memberLevel + extraDiscount + memberPrice + deleteButton;
        $('table tbody').append(newRow);
    });

    //delete members
    $( '#myTable' ).on( 'click', '#deleteButton', function() {
        console.log('delete button works');
        $(this).closest('tr').remove();
    });









}); //end doc ready