$(document).ready(function(e){

    var basePath = Drupal.settings.basePath;
    var modPath = basePath + "bulk_code/";
    var modPath1 = basePath + "bulk_code/books/";
    var modPath2 = basePath + "bulk_code/books/all";
    var modPath3 = basePath + "bulk_code/forms/";
    var modPath4 = basePath + "comments/rand/";

$('#disapprove_textrea').hide();
$('.submit_form_bulk_approve').hide();

$(this).on('change', '#select_book', function(){
				var	id = $('#select_book').val();					
				var type = $('#select_book').attr('id');				
			    var dataString = 'id='+ id + '&type=' + type;
				    
if(id == 0){
$('#download_entire_book').hide();
$('#disapprove_textrea').hide();
$('.submit_form_bulk_approve').hide();
}else{	    
$.ajax({
      type: "POST",
      url: modPath + "ajax/",
      data: dataString,
      cache: false,
      success: function(result){  
       $('#download_entire_book').show();     
       $('#download_entire_book').html(result);
       $('#disapprove_textrea').show();
       $('.submit_form_bulk_approve').show();              
      }
      });
      }
					
});
/*****############################******/
$(".submit_form_bulk_approve").click(function(){
//$(this).on('submit', '.submit_form_bulk_approve', function(event) {
var pref_id = $("#select_book").val();
var action = $(".form_action:checked").val();
var dis_approve_reason = $("#dis_approve").val();

// Returns successful data submission message when the entered information is stored in database.
var dataString = 'pref_id='+ pref_id + '&action='+ action + '&dis_approve_reason='+ dis_approve_reason ;
if(pref_id==null || pref_id=='', action ==null || action == '' ){
alert('Please select action');

}
else{
// AJAX Code To Submit Form.
console.log(dataString);
var conf_action=confirm("Are  you sure?");
    if (conf_action==true)
    {
$.ajax({
       type: "POST",
       url: modPath1 + "ajax/",
       data: dataString,
       cache: false,			
       success: function(data){
           var re_load=confirm(data);
           if (re_load==true){
              window.location.reload();
           }else{
             window.location.reload();
            }
      }

});
    }
    else
    { 
    window.location.reload(); 
    return false;
    }
//location.reload();
//trigger('reset');		
}
return false;
});
/*****############################******/
	
	 

});/***********************************/




