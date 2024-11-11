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


    // Obtener el número de visitas desde localStorage
    let visitCount = localStorage.getItem('visitCount');

    // Si no hay un contador guardado, inicialízalo en 0
    if (!visitCount) {
        visitCount = 0;
    }

    // Incrementar el contador de visitas
    visitCount++;

    // Guardar el nuevo valor en localStorage
    localStorage.setItem('visitCount', visitCount);

    // Mostrar el contador en la página
    document.getElementById('visit-count').textContent = visitCount;

