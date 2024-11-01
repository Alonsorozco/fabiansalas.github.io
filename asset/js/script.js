$(function(){ 
    // script para realizar smooth scroll
    $("a").click(function(event){ 
    if (this.hash !== "") { 
      event.preventDefault(); 
      var gato = this.hash; 
      $("html, body").animate({ 
      scrollTop: $(gato).offset().top 
      }, 800, function(){ 
      window.location.hash = gato; 
  
  }); 
  } 
  }); 
    
    // script para popover bootrap
  
    $('[data-toggle="popover"]').popover()
  
    // script para tooltip bootrap
  
  
    $('[data-toggle="tooltip"]').tooltip() 
  
  }); 