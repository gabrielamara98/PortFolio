
function darkMode(){
//header-sections//
   document.querySelector(".section").style.backgroundImage="url(./image4.jpg)"
   var backColor=document.querySelectorAll(".sectionSlides");
   for(i=0;i<backColor.length;i++){
      backColor[i].style.borderBottom="1px solid gold"
      backColor[i].style.backgroundColor="black";
   }
   var titleSections=document.querySelectorAll(".title h1");
   for(b=0;b<titleSections.length;b++){
      titleSections[b].style.color="white";
   }
   //footer//
   document.querySelector('.footer').style.backgroundColor="black";
   document.querySelector(".footer span").style.color="white";
   var iconFooter=document.querySelectorAll(".footer i");
   iconFooter.forEach(iconFooterX=>{
      iconFooterX.style.color="white";
   })
   //COMPETENCIAS//
   //Liguagens
   document.querySelector(".linguagens h1").style.color="white";
   var linguagensTipos=document.querySelectorAll(".card-icon span");
    linguagensTipos.forEach(linguagensComp => {
       linguagensComp.style.color="white";
   })
   var bordaBarra=document.querySelectorAll(".progress-bar");
    bordaBarra.forEach(bordaBarraX => {
       bordaBarraX.style.border="1px groove gold";
   })
   var conteudoBarra=document.querySelectorAll(".inside-bar");
    conteudoBarra.forEach(conteudoBarraX =>{
       conteudoBarraX.style.backgroundColor="orange";
   })
   //Soft Skills
   document.querySelector(".soft-skills").style.borderLeft="1px solid white"
   document.querySelector(".soft-skills h1").style.color="white";
   var icones=document.querySelectorAll(".icon-soft i");
   icones.forEach(iconesX =>{
      iconesX.style.color="white"
   })
   var tituloSoft=document.querySelectorAll(".title-soft h2");
      tituloSoft.forEach(tituloSoftX=>{
        tituloSoftX.style.color="white";
   })
   var bordas=document.querySelectorAll(".text-soft");
      bordas.forEach(bordasX =>{
      bordasX.style.borderLeft="2px solid gold"
      bordasX.style.borderRight="2px solid gold";
   })
   var textoSoftSkills=document.querySelectorAll(".text-soft p");
      textoSoftSkills.forEach(textoSoftSkillsX =>{
         textoSoftSkillsX.style.color="white"
   })


   //Projetos//
   document.querySelector(".title-banner").style.borderBottom="1px solid gold"
   document.querySelector("#titleBanner").style.color="white"
   document.querySelector("#imageBanner").style.border="1px solid gold"
   document.querySelector(".text-banner").style.borderTop="1px solid gold"
   document.querySelector("#textBanner").style.color="white" 
   var borderImageChoose=document.querySelectorAll(".flex-project img");
      for(a=0;a<borderImageChoose.length;a++){
         borderImageChoose[a].style.border="4px groove gold"
      }
}

//////////////////////////////////////////////

function lightMode(){
   //header-sections//
   document.querySelector(".section").style.backgroundImage="url(./image.jpg)"
   var backColor=document.querySelectorAll(".sectionSlides");
   for(i=0;i<backColor.length;i++){
      backColor[i].style.borderBottom=null
      backColor[i].style.backgroundColor=null;
   }
   var titleSections=document.querySelectorAll(".title h1");
   for(b=0;b<titleSections.length;b++){
      titleSections[b].style.color=null;
   }  
   //footer//
   document.querySelector('.footer').style.backgroundColor="black";
   document.querySelector(".footer span").style.color="white";
   var iconFooter=document.querySelectorAll(".footer i");
   iconFooter.forEach(iconFooterX=>{
      iconFooterX.style.color="white";
   })
   //COMPETENCIAS//
   //Liguagens
   document.querySelector(".linguagens h1").style.color=null;
   var linguagensTipos=document.querySelectorAll(".card-icon span");
    linguagensTipos.forEach(linguagensComp => {
       linguagensComp.style.color=null;
   })
   var bordaBarra=document.querySelectorAll(".progress-bar");
    bordaBarra.forEach(bordaBarraX => {
       bordaBarraX.style.border=null;
   })
   var conteudoBarra=document.querySelectorAll(".inside-bar");
    conteudoBarra.forEach(conteudoBarraX =>{
       conteudoBarraX.style.backgroundColor=null;
   })
   //Soft Skills
   document.querySelector(".soft-skills").style.borderLeft=null
   document.querySelector(".soft-skills h1").style.color=null;
   var icones=document.querySelectorAll(".icon-soft i");
   icones.forEach(iconesX =>{
      iconesX.style.color=null;
   })
   var tituloSoft=document.querySelectorAll(".title-soft h2");
      tituloSoft.forEach(tituloSoftX=>{
        tituloSoftX.style.color=null;
   })
   var bordas=document.querySelectorAll(".text-soft");
      bordas.forEach(bordasX =>{
      bordasX.style.borderLeft=null
      bordasX.style.borderRight=null;
   })
   var textoSoftSkills=document.querySelectorAll(".text-soft p");
      textoSoftSkills.forEach(textoSoftSkillsX =>{
         textoSoftSkillsX.style.color=null
   })


   //Projetos//
   document.querySelector(".title-banner").style.borderBottom=null
   document.querySelector("#titleBanner").style.color=null
   document.querySelector("#imageBanner").style.border=null
   document.querySelector(".text-banner").style.borderTop=null
   document.querySelector("#textBanner").style.color=null
   var borderImageChoose=document.querySelectorAll(".flex-project img");
   for(a=0;a<borderImageChoose.length;a++){
      borderImageChoose[a].style.border=null
   }

}


//Functions for select projects changes//
function myFunction(){
   document.querySelector("#titleBanner").innerHTML="Rainbow Six Extraction Fan Wiki"
   document.querySelector("#imageBanner").src="./R6-EXTRACTION.jpg"
   document.querySelector("#textBanner").innerHTML="1"
}

function myFunction1(){
   document.querySelector("#titleBanner").innerHTML="Projeto2"
   document.querySelector("#imageBanner").src="https://pbs.twimg.com/media/EJ16B8pX0A4ye2g.jpg"
   document.querySelector("#textBanner").innerHTML="2";
}

function myFunction2(){
   document.querySelector("#titleBanner").innerHTML="Projeto3"
   document.querySelector("#imageBanner").src="https://pbs.twimg.com/media/EJ16B8pX0A4ye2g.jpg"
   document.querySelector("#textBanner").innerHTML="3."
}

function myFunction3(){
   document.querySelector("#titleBanner").innerHTML="Projeto4"
   document.querySelector("#imageBanner").src="https://pbs.twimg.com/media/EJ16B8pX0A4ye2g.jpg"
   document.querySelector("#textBanner").innerHTML="4."
}
