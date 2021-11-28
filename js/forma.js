/* Poruci */

function validacija() {
  
    /* Javlja poruku korisniku ako nije popunio polje za ime i prezime */
    if (document.forms[0].ime.value=='') {
      alert("Niste uneli Vase ime i prezime!");
      document.forms[0].ime.focus();
      return false;
    }
     
    /* Javlja poruku korisniku ako nije popunio polje za email */
    if (document.forms[0].mail.value=='') {
      alert("Niste uneli e-mail adresu!");
      document.forms[0].mail.focus();
      return false;
    }
  
    /* Javlja poruku korisniku ako nije popunio polje email-a sa znakom @ */
    if(document.forms[0].mail.value.indexOf('@') == -1){
      alert("Niste uneli e-mail adresu u odgovarajucem formatu! (mora sadrzati @)");
      document.forms[0].mail.focus();
      return false;
    }
        
    /* Javlja poruku korisniku ako nije popunio polje za broj telefona */
    if (document.forms[0].telefon.value=='') {
      alert("Niste uneli Vas broj telefona!");
      document.forms[0].telefon.focus();
      return false;
    }
    
    /* Javlja poruku korisniku ako nije popunio polje za adresu */
    if (document.forms[0].adresa.value=='') {
      alert("Niste uneli Vasu adresu!");
      document.forms[0].adresa.focus();
      return false;
    }
    
    /* Javlja poruku korisniku ako nije odabrao jedno jelo iz padajucih menija */
    if (document.forms[0].pice.value=='Biram picu' && document.forms[0].sendvici.value=='Biram sendvic' && document.forms[0].palacinke.value=='Biram palacinku') {
      alert("Niste odabrali jelo!");
      document.forms[0].pice.focus();
      return false;
    }
  
    
    confirm("Da li želite da završite sa poručivanjem?");
    alert("Uspešno ste poručili Vaše jelo! Želimo Vam ukusan ostatak dana! :)");
    
  }
  
  
  /* Proveri podatke, prvo su skriveni pa se posle kopira sadrzaj iz poja u formi */
  
  function proveri() {
    $(document).ready(function(){
      $("#pime").show();
      $("#pimee").show();
      document.getElementById("pimee").value = document.getElementById("ime").value;
    })
    $(document).ready(function(){
      $("#ptele").show();
      $("#ptelee").show();
      document.getElementById("ptelee").value = document.getElementById("telefon").value;
    })
    $(document).ready(function(){
      $("#pmejl").show();
      $("#pmejle").show();
      document.getElementById("pmejle").value = document.getElementById("mail").value;
    })
    $(document).ready(function(){
      $("#padresa").show();
      $("#padresae").show();
      document.getElementById("padresae").value = document.getElementById("adresa").value;
    })
    $(document).ready(function(){
      $("#pjelo").show();
      $("#pjeloe").show();
      if (document.forms[0].birajp.value!='Biram picu') {
        document.getElementById("pjelo").innerHTML = document.getElementById("birajp").value;
        $("#nisiBirao").hide();
      }
      else if (document.forms[0].birajs.value!='Biram sendvic') {
        document.getElementById("pjelo").innerHTML = document.getElementById("birajs").value;
        $("#nisiBirao").hide();
      } 
      else if (document.forms[0].birajpa.value!='Biram palacinku') {
        document.getElementById("pjelo").innerHTML = document.getElementById("birajpa").value;
        $("#nisiBirao").hide();
      }
      else{
        $("#pjelo").hide();
        $("#nisiBirao").show();
      }
    })
  }
  
  $(document).ready(function(){
    $("#pime").hide();
    $("#ptele").hide();
    $("#pmejl").hide();
    $("#padresa").hide();
    $("#pimee").hide();
    $("#ptelee").hide();
    $("#pmejle").hide();
    $("#padresae").hide();
    $("#pjelo").hide();
    $("#pjeloe").hide();
    $("#nisiBirao").hide();
  });
  
  
  /* Specijalitet meseca fade in and out */
  
  $(document).ready(function(){
    $("#spec").focus(function(){
      $("#spec_").css("display", "inline").fadeOut(5100);
    });
  });
  $(document).ready(function(){
    $("#spec_").hide();
  });
      