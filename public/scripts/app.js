console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $.ajax({
     method: 'GET',
     url: 'http://localhost:3000/api/albums',
     success: handleSuccess,
     error: handleError
   });

   $.ajax({
     method: 'GET',
     url: 'http://localhost:3000/api/taquerias',
     success: tacoSuccess,
     error: handleError
   });

   function handleSuccess(json) {
     console.log(json);
     console.log(json[0].title);
     $('h1').empty();
     json.forEach(function(item){$('h1').append(`<br></br>${item.title}`)});

   }

   function handleError(xhr, status, errorThrown) {
     console.log('uh oh');
   }
   function tacoSuccess(json) {
     console.log(json);

     json.forEach(function (item){$('h1').prepend(`<br></br>${item.name}`)});
   }



});
