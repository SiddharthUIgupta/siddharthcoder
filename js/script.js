$(document).ready(function()
{
  

    function after(el)
    {
       
        if(el.id=="test")
        {
            $('#html5').animate({
                width:"95%"
            },800);
             $('#javascript').animate({
                width:"85%"
            },800);
             $('#angularjs').animate({
                width:"92%"
             },800);
             $('#ps').animate({
                width:"82%"
             },800);
           
           
        }
                
    }
    


$('#owl-demo').owlCarousel({
    margin:20,
    navigation:true,   
    loop:true,
    autoWidth:true,
    items:1,
    center:true,
    slideSpeed:300, 
    paginationSpeed:400,
    singleItem:true,
    autoplay:true,
    autoplaySpeed:1000,
     autoplayTimeout:10000,
    dotsSpeed: 1000
    
    
});

		new WOW({callback:after}).init();


  $('#js-scroll-down').click(function()
        {
            $('html,body').animate({scrollTop: 
                    $('#about').offset().top},1000);
        });



});




   function save()
      {

        

        // Initialize Firebase
          var config = {
     apiKey: "AIzaSyDRmgABP7zup6QC3XJschf1g_HGgdJykMU",
     authDomain: "siddharthcoder.firebaseapp.com",
     databaseURL: "https://siddharthcoder.firebaseio.com",
     projectId: "siddharthcoder",
     storageBucket: "siddharthcoder.appspot.com",
     messagingSenderId: "429276049604"
   };
   firebase.initializeApp(config);

       
         

          firebase.database().ref().child("users").push({
            firstName: $("input[name='first_name']").val(),
            phone: $("input[name='phone_number']").val(),
            email:$("input[name='email_address']").val()
          }).then(function()
          { 
            
               $('#message').show().delay(700).fadeOut(function()
            {
              $(this).remove();
            },function()
            {
              $('form').submit();
            });
                

          
              
             
          });

         

              
            

          
          //console.log($("input[name='first_name']").val());
      }

  $(window).load(function()
        {
          $('#preloader').fadeOut('slow',function()
            {
              $(this).remove();
            });
        });





