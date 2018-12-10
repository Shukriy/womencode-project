var imgPath = "";
function showPreview(objFileInput) {
  hideUploadOption();
  if (objFileInput.files[0]) {
    var fileReader = new FileReader();
    fileReader.onload = function (e) {
      $("#targetLayer").html('<img src="'+e.target.result+'" width="200px" height="200px" class="upload-preview" />');
          // var img = $(this).attr('src');
              // $('#indivPic').expose('<img src="' + img + '" height="100" width="130"/>');
              // $('#myModal img').prepend('src', img));
      // uploadImage(img);

      imgPath=e.target.result;
      // $('#indivPic').html(img);
      $("#targetLayer").css('opacity','0.7');
      $(".icon-choose-image").css('opacity','0.5');

    }
    fileReader.readAsDataURL(objFileInput.files[0]);
  }
}
$(document).ready(function(){
  $("#btnProfile").click(function(){
    var input_name = $("#profileModal").find('#nameInput').val();
    var input_descr = $("#profileModal").find('#descrInput').val();
    var img = $(this).attr('src');
    $("#indivName").html(input_name);
    $("#indivP").html(input_descr);
    $("#indivPic").attr("src",imgPath);

    var image = document.createElement("img");
      image.src = e.target.result;
      document.body.appendChild(image);

    // $('#indivPic').html(img + '-0.png?"' + new Date().getTime() +' alt="your image" class="img-responsive" />');
  });
});

function showUploadOption(){
  $("#profile-upload-option").css('display','block');
}

function hideUploadOption(){
  $("#profile-upload-option").css('display','none');
}
// $(document).ready(function(){
//   $("#btnProfile").click(function(){
// var img = $(this).attr('src');
// $('#indivPic').prepend('<img class="img" type="image" src="' + img + '" height="100" width="130"/>');
// });
// });

// function uploadImage(img){
// $(document).ready(function(e){
  // $("#btnProfile").click(function(){
    // $('#indivPic').append('<img src="' + img + '" height="100" width="130"/>');
  // });
// });
// }

// function removeProfilePhoto(){
//   hideUploadOption();
//   $("#userImage").val('');
//   $.ajax({
//     url: "remove.php",
//     type: "POST",
//     data:  new FormData(this),
//     beforeSend: function(){$("#body-overlay").show();},
//     contentType: false,
//     processData:false,
//     success: function(data)
//     {
//     $("#targetLayer").html('');
//     setInterval(function() {$("#body-overlay").hide(); },500);
//     },
//     error: function()
//     {
//     }
//   });
// }
// $(document).ready(function (e) {
//   $("#uploadForm").on('submit',(function(e) {
//     e.preventDefault();
//     $.ajax({
//       url: "upload.php",
//       type: "POST",
//       data:  new FormData(this),
//       beforeSend: function(){$("#body-overlay").show();},
//       contentType: false,
//       processData:false,
//       success: function(data)
//       {
//         $("#targetLayer").css('opacity','1');
//         setInterval(function() {$("#body-overlay").hide(); },500);
//       },
//       error: function()
//       {
//       }
//     });
//   }));
// });

// $(document).ready(function(){
//   $("#btnProfile").click(function(){
//     var input_name = $("#profileModal").find('#nameInput').val();
//     var input_descr = $("#profileModal").find('#descrInput').val();
//     $("#indivName").html(input_name);
//     $("#indivP").html(input_descr);
//   });
// });

// $('#btnProfile').click(function){
//     var name = $('#nameInput').val();
//     var discr = $('#descrInput').val();
//     $('#indivP').val(name);
//     $('#indivName').val(discr);
//     $('#profileModal').modal('hide');
// });

// $("body").on('click', '#btnProfile', function () {
//     input = $(this).parent('td').prev('td').children('input[type=textbox]')
//     var params = { id: $(this).attr('id'), value: input.val() };
//     $.ajax({
//         type: 'POST',
//         url: '@Url.Action(SomeUrl- pointless)',
//         dataType: 'json',
//         cache: false,
//         contentType: 'application/json; charset=utf­8',
//         data: JSON.stringify(params),
//         success: function (data, status) {
//             doingsomething
//         },
//         error: function (er, info) {
//
//         },
//         complete: function (xhr, status) {
//
//         },
//     });
// });
