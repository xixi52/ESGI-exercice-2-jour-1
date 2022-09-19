$(document).ready(function() {
    var table = $('#planning').on( 'draw.dt', function () {
$("#containerplanning").attr("id", "container"); $("#loadercontainer").css("display","none");
} ).DataTable( {
        buttons: [ 'excel'],
        "scrollX": true
    } );
    table.buttons().container()
        .appendTo( '#planning_wrapper .col-md-6:eq(0)' );
} );