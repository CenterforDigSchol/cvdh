//Edit 'key' and 'columns' to connect your spreadsheet

//enter google sheets key here
var key =
  "1HoiUQRQQqYXcvXejREg56GKplyedYgvsyB8N_rrwcp4";

//"data" refers to the column name with no spaces and no capitals
//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns = [
  {"data": "creators","title": "Creator(s)"}, 
  {"data": "project-title","title": "Project Title"}, 
  {"data": "project-url","title": "Project URL"},
  {"data": "institution","title": "Institution"},
  {"data": "institution-type", "title": "Institution Type"},
  {"data": "project-type", "title":"Project Type"},
  {"data": "date", "title":"Date"},
  {"data": "subjects", "title":"Subjects"},
  {"data": "funders","title":"Funders"} 
];


$(document).ready(function() {

  function initializeTabletopObject() {
    Tabletop.init({
      key: key,
      callback: function(data, tabletop) {
        writeTable(data); //call up datatables function
      },
      simpleSheet: true,
      debug: false
    });
  }

  initializeTabletopObject();

  function writeTable(data) {
    //select main div and put a table there
    //use bootstrap css to customize table style: http://getbootstrap.com/css/#tables
    $('#graphic').html(
      '<table cellpadding="0" cellspacing="0" border="0" class="table table-responsive table-bordered table-hover" id="mySelection"></table>'
    );

    //initialize the DataTable object and put settings in
    $("#mySelection").DataTable({
      "autoWidth": true,
      "data": data,
      "columns": columns,
      "order": [
        [2, "desc"]
      ], //order on second column
      "pagingType": "simple" //no page numbers
        //uncomment these options to simplify your table
        //"paging": false,
        //"searching": false,
        //"info": false
    });
  }
});
//end of writeTable
