class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

  //vai identificar qual botão foi clicado e criar as imagens
  function botoes() { 
      if (document.getElementById("Termos").value == 1 || document.getElementById("estatuto").value == 1 || document.getElementById("Outros").value == 1) {
        document.getElementById("botao1").addEventListener("click", function() {
          if (document.getElementById("botao1").value == 0) {
            document.getElementById("botao1").value = 1
            document.getElementById("aparecer1").style = "animation-name: subir;animation-duration: 1s; animation-fill-mode: forwards;";
            if (document.getElementById("Termos").value == 1) {
              document.querySelector(".imagens").innerHTML = "<a href='documentos/termos/013-2023/pdf/termo 1.pdf' target='_blank'><img src='documentos/termos/013-2023/termo 1.jpeg' alt='' class='imagens-T'></a><a href='documentos/termos/013-2023/pdf/termo 3.pdf' target='_blank'><img src='documentos/termos/013-2023/termo 2.jpeg' alt='' class='imagens-T'></a><a href='documentos/termos/013-2023/pdf/termo 4.pdf' target='_blank'><img src='documentos/termos/013-2023/termo 3.jpeg' alt='' class='imagens-T'></a><a href='documentos/termos/013-2023/pdf/termo 5.pdf' target='_blank'><img src='documentos/termos/013-2023/termo 4.jpeg' alt='' class='imagens-T'></a><a href='documentos/termos/013-2023/pdf/termo 6.pdf' target='_blank'><img src='documentos/termos/013-2023/termo 5.jpeg' alt='' class='imagens-T'></a><a href='documentos/termos/013-2023/pdf/termo 7.pdf' target='_blank'><img src='documentos/termos/013-2023/termo 6.jpeg' alt=''class='imagens-T'></a><a href='documentos/termos/013-2023/pdf/termo 8.pdf' target='_blank'><img src='documentos/termos/013-2023/termo 7.jpeg' alt='' class='imagens-T'></a><a href='documentos/termos/013-2023/pdf/termo 2.pdf' target='_blank'><img src='documentos/termos/013-2023/ultimo termo.jpeg' alt='' class='imagens-T'></a>"
            } else if (document.getElementById("estatuto").value == 1 ) {
              document.querySelector(".imagens").innerHTML = '<a href="documentos/estatuto/fundação/pdf/estatuto-1.pdf" target="_blank"><img src="documentos/estatuto/fundação/estatuto-1.jpeg" alt=""class="imagens-T"></a><a href="documentos/estatuto/fundação/pdf/estaturo-2.pdf" target="_blank"><img src="documentos/estatuto/fundação/estaturo-2.jpeg" alt="" class="imagens-T"></a><a href="documentos/estatuto/fundação/pdf/estatuto-3.pdf" target="_blank"><img src="documentos/estatuto/fundação/estatuto-3.jpeg" alt="" class="imagens-T"></a><a href="documentos/estatuto/fundação/pdf/estatuto-4.pdf" target="_blank"><img src="documentos/estatuto/fundação/estatuto-4.jpeg" alt="" class="imagens-T"></a>'
            } else if (document.getElementById("Outros").value == 1) {
              document.querySelector(".imagens").innerHTML = '<a href="documentos/outros/ATA de Eleição da Diretoria/pdf/ATA-1.pdf" target="_blank"><img src="documentos/outros/ATA de Eleição da Diretoria/ATA-1.jpeg" alt="" class="imagens-T"></a><a href="documentos/outros/ATA de Eleição da Diretoria/pdf/ATA-2.pdf" target="_blank"><img src="documentos/outros/ATA de Eleição da Diretoria/ATA-2.jpeg" alt="" class="imagens-T"></a>'
            }
          } else {
            document.getElementById("botao1").value = 0
            document.getElementById("aparecer1").style = "animation-name: decer;animation-duration: 1s; animation-fill-mode: forwards;";
            document.querySelectorAll(".imagens-T").forEach((img) => {
              img.style = "animation-name: teste;animation-duration: 1s; animation-fill-mode: forwards;"
            })
            setTimeout( function() {document.querySelector(".imagens").innerHTML = ""}, 900) 
          }
        })
        document.getElementById("botao2").addEventListener("click", function() {
          if (document.getElementById("botao2").value == 0) {
            document.getElementById("botao2").value = 1
            document.getElementById("aparecer2").style = "animation-name: subir;animation-duration: 1s; animation-fill-mode: forwards;";
            if (document.getElementById("Termos").value == 1) {
              document.querySelector(".imagens1").innerHTML = '<a href="documentos/termos/aditivo Nº001/pdf/termo 1.pdf" target="_blank"><img src="documentos/termos/aditivo Nº001/termo 1.jpeg" alt="" class="imagens-E"></a> <a href="documentos/termos/aditivo Nº001/pdf/termo2.pdf" target="_blank"><img src="documentos/termos/aditivo Nº001/termo2.jpeg" alt="" class="imagens-E"></a>'
            } else if (document.getElementById("estatuto").value == 1 ) {
              document.querySelector(".imagens1").innerHTML = '<a href="documentos/estatuto/alteração/pdf/estatuto-1.pdf" target="_blank"><img src="documentos/estatuto/alteração/estatuto-1.jpeg" alt="" class="imagens-E"></a><a href="documentos/estatuto/alteração/pdf/estatuto-2.pdf" target="_blank"><img src="documentos/estatuto/alteração/estatuto-2.jpeg" alt="" class="imagens-E"></a><a href="documentos/estatuto/alteração/pdf/estatuto-3.pdf" target="_blank"><img src="documentos/estatuto/alteração/estatuto-3.jpeg" alt="" class="imagens-E"></a>'
            } else if (document.getElementById("Outros").value == 1) {
              document.querySelector(".imagens1").innerHTML = '<a href="documentos/outros/CEBAS/pdf/CEBAS-1.pdf" target="_blank"><img src="documentos/outros/CEBAS/CEBAS-1.jpeg" alt="" class="imagens-E"></a><a href="documentos/outros/CEBAS/pdf/CEBAS-2.pdf" target="_blank"><img src="documentos/outros/CEBAS/CEBAS-2.jpeg" alt="" class="imagens-E"></a>'
            }
          } else {
            document.getElementById("botao2").value = 0
            document.getElementById("aparecer2").style = "animation-name: decer;animation-duration: 1s; animation-fill-mode: forwards;";
            document.querySelectorAll(".imagens-E").forEach((img) => {
              img.style = "animation-name: teste;animation-duration: 1s; animation-fill-mode: forwards;"
            })
            setTimeout( function() {document.querySelector(".imagens1").innerHTML = ""}, 900)
          }
        })
                      
        document.getElementById("botao3").addEventListener("click", function() {
          if (document.getElementById("botao3").value == 0) {
            document.getElementById("botao3").value = 1
            document.getElementById("aparecer3").style = "animation-name: subir;animation-duration: 1s; animation-fill-mode: forwards;";
            if (document.getElementById("Termos").value == 1) {
              document.querySelector(".imagens2").innerHTML = '<a href="documentos/termos/042-2023/pdf/termo 1.pdf" target="_blank"><img src="documentos/termos/042-2023/termo 1.jpeg" alt="" class="imagem-F"></a><a href="documentos/termos/042-2023/pdf/termo 2.pdf" target="_blank"><img src="documentos/termos/042-2023/termo 2.jpeg" alt="" class="imagem-F"></a><a href="documentos/termos/042-2023/pdf/termo 3.pdf" target="_blank"><img src="documentos/termos/042-2023/termo 3.jpeg" alt="" class="imagem-F"></a><a href="documentos/termos/042-2023/pdf/termo 4.pdf" target="_blank"><img src="documentos/termos/042-2023/termo 4.jpeg" alt="" class="imagem-F"></a><a href="documentos/termos/042-2023/pdf/termo 5.pdf" target="_blank"><img src="documentos/termos/042-2023/termo 5.jpeg" alt="" class="imagem-F"></a><a href="documentos/termos/042-2023/pdf/termo 6.pdf" target="_blank"><img src="documentos/termos/042-2023/termo 6.jpeg" alt=""class="imagem-F"></a><a href="documentos/termos/042-2023/pdf/termo final.pdf" target="_blank"><img src="documentos/termos/042-2023/termo final.jpeg" alt="" class="imagem-F"></a>'
            } else if (document.getElementById("estatuto").value == 1 ) {
              document.querySelector(".imagens2").innerHTML = '<a href="documentos/estatuto/segunda-alteração/pdf/estatuto-1.pdf" target="_blank"><img src="documentos/estatuto/segunda-alteração/estatuto-1.jpeg" alt="" class="imagem-F"></a><a href="documentos/estatuto/segunda-alteração/pdf/estatuto-2.pdf" target="_blank"><img src="documentos/estatuto/segunda-alteração/estatuto-2.jpeg" alt="" class="imagem-F"></a>'
            } 
          } else {
            document.getElementById("botao3").value = 0
            document.getElementById("aparecer3").style = "animation-name: decer;animation-duration: 1s; animation-fill-mode: forwards;";
            document.querySelectorAll(".imagem-F").forEach((img) => {
              img.style = "animation-name: teste;animation-duration: 1s; animation-fill-mode: forwards;"
            })
            setTimeout( function() {document.querySelector(".imagens2").innerHTML = ""}, 900)
          }
        })

        document.getElementById("botao4").addEventListener("click", function() {
          if (document.getElementById("botao4").value == 0) {
            document.getElementById("botao4").value = 1
            document.getElementById("aparecer4").style = "animation-name: subir;animation-duration: 1s; animation-fill-mode: forwards;";
            if (document.getElementById("Termos").value == 1) {
              document.querySelector(".imagens3").innerHTML = '<a href="documentos/termos/040-2022/pdf/termo 1.pdf" target="_blank"><img src="documentos/termos/040-2022/termo 1.jpeg" alt="" class="imagens-G"></a> <a href="documentos/termos/040-2022/pdf/termo 2.pdf" target="_blank"><img src="documentos/termos/040-2022/termo 2.jpeg" alt="" class="imagens-G"></a> <a href="documentos/termos/040-2022/pdf/termo 3.pdf" target="_blank"><img src="documentos/termos/040-2022/termo 3.jpeg" alt="" class="imagens-G"></a> <a href="documentos/termos/040-2022/pdf/termo 4.pdf" target="_blank"><img src="documentos/termos/040-2022/termo 4.jpeg" alt="" class="imagens-G"></a> <a href="documentos/termos/040-2022/pdf/termo 5.pdf" target="_blank"><img src="documentos/termos/040-2022/termo 5.jpeg" alt="" class="imagens-G"></a> <a href="documentos/termos/040-2022/pdf/termo 6.pdf" target="_blank"><img src="documentos/termos/040-2022/termo 6.jpeg" alt="" class="imagens-G"></a><a href="documentos/termos/040-2022/pdf/termo 7.pdf" target="_blank"><img src="documentos/termos/040-2022/termo 7.jpeg" alt="" class="imagens-G"></img></a>'
            } else if (document.getElementById("estatuto").value == 1 ) {
              document.querySelector(".imagens3").innerHTML = '<a href="documentos/estatuto/terceira-alteração/pdf/estatuto-1.pdf" target="_blank"><img src="documentos/estatuto/terceira-alteração/estatuto-1.jpeg" alt="" class="imagens-G"></a><a href="documentos/estatuto/terceira-alteração/pdf/estatuto-2.pdf" target="_blank"><img src="documentos/estatuto/terceira-alteração/estatuto-2.jpeg" alt="" class="imagens-G"></a>'
            } 
          } else {
            document.getElementById("botao4").value = 0
            document.getElementById("aparecer4").style = "animation-name: decer;animation-duration: 1s; animation-fill-mode: forwards;";
            document.querySelectorAll(".imagens-G").forEach((img) => {
              img.style = "animation-name: teste;animation-duration: 1s; animation-fill-mode: forwards;"
            })
            setTimeout( function() {document.querySelector(".imagens3").innerHTML = ""}, 900)
          }
        })
        document.getElementById("botao5").addEventListener("click", function() {
          if (document.getElementById("botao5").value == 0) {
            document.getElementById("botao5").value = 1
            document.getElementById("aparecer5").style = "animation-name: subir;animation-duration: 1s; animation-fill-mode: forwards;";
            if (document.getElementById("Termos").value == 1) {
              document.querySelector(".imagens4").innerHTML = '<a href="documentos/termos/125-2022/pdf/termo-1.pdf" target="_blank"><img src="documentos/termos/125-2022/termo-1.jpeg" alt="" class="imagens-C"></a><a href="documentos/termos/125-2022/pdf/termo-2.pdf" target="_blank"><img src="documentos/termos/125-2022/termo-2.jpeg" alt="" class="imagens-C"></a> <a href="documentos/termos/125-2022/pdf/termo-3.pdf" target="_blank"><img src="documentos/termos/125-2022/termo-3.jpeg" alt="" class="imagens-C"></a><a href="documentos/termos/125-2022/pdf/termo-4.pdf" target="_blank"><img src="documentos/termos/125-2022/termo-4.jpeg" alt="" class="imagens-C"></a><a href="documentos/termos/125-2022/pdf/termo-5.pdf" target="_blank"><img src="documentos/termos/125-2022/termo-5.jpeg" alt="" class="imagens-C"></a><a href="documentos/termos/125-2022/pdf/termo-6.pdf" target="_blank"><img src="documentos/termos/125-2022/termo-6.jpeg" alt="" class="imagens-C"></a><a href="documentos/termos/125-2022/pdf/termo-7.pdf" target="_blank"><img src="documentos/termos/125-2022/termo-7.jpeg" alt="" class="imagens-C"></a><a href="documentos/termos/125-2022/pdf/termo-8.pdf" target="_blank"><img src="documentos/termos/125-2022/termo-8.jpeg" alt="" class="imagens-C"></a><a href="documentos/termos/125-2022/pdf/termo-9.pdf" target="_blank"><img src="documentos/termos/125-2022/termo-9.jpeg" alt="" class="imagens-C"></a><a href="documentos/termos/125-2022/pdf/termo-10.pdf" target="_blank"><img src="documentos/termos/125-2022/termo-10.jpeg" alt="" class="imagens-C"></a><a href="documentos/termos/125-2022/pdf/termo 11.pdf" target="_blank"><img src="documentos/termos/125-2022/termo 11.jpeg" alt="" class="imagens-C"></a><a href="documentos/termos/125-2022/pdf/termo-12.pdf" target="_blank"><img src="documentos/termos/125-2022/termo-12.jpeg" alt="" class="imagens-C"></a><a href="documentos/termos/125-2022/pdf/termo-13.pdf" target="_blank"><img src="documentos/termos/125-2022/termo-13.jpeg" alt="" class="imagens-C"></a>'
            } else if (document.getElementById("estatuto").value == 1 ) {
              document.querySelector(".imagens4").innerHTML = '<a href="documentos/estatuto/quarta-alteração/pdf/estatuto-1.pdf" target="_blank"><img src="documentos/estatuto/quarta-alteração/estatuto-1.jpeg" alt="" class="imagens-C"></a><a href="documentos/estatuto/quarta-alteração/pdf/estatuto-2.pdf" target="_blank"><img src="documentos/estatuto/quarta-alteração/estatuto-2.jpeg" alt="" class="imagens-C"></a><a href="documentos/estatuto/quarta-alteração/pdf/estatuto-3.pdf" target="_blank"><img src="documentos/estatuto/quarta-alteração/estatuto-3.jpeg" alt="" class="imagens-C"></a><a href="documentos/estatuto/quarta-alteração/pdf/estatuto-4.pdf" target="_blank"><img src="documentos/estatuto/quarta-alteração/estatuto-4.jpeg" alt="" class="imagens-C"></a><a href="documentos/estatuto/quarta-alteração/pdf/estatuto-5.pdf" target="_blank"><img src="documentos/estatuto/quarta-alteração/estatuto-5.jpeg" alt="" class="imagens-C"></a><a href="documentos/estatuto/quarta-alteração/pdf/estatuto-6.pdf" target="_blank"><img src="documentos/estatuto/quarta-alteração/estatuto-6.jpeg" alt="" class="imagens-C"></a>'
            } 
          } else {
            document.getElementById("botao5").value = 0
            document.getElementById("aparecer5").style = "animation-name: decer;animation-duration: 1s; animation-fill-mode: forwards;";
            document.querySelectorAll(".imagens-C").forEach((img) => {
              img.style = "animation-name: teste;animation-duration: 1s; animation-fill-mode: forwards;"
            })
            setTimeout( function() {document.querySelector(".imagens4").innerHTML = ""}, 900)
          }
        })

        document.getElementById("botao6").addEventListener("click", function() {
          if (document.getElementById("botao6").value == 0) {
            document.getElementById("botao6").value = 1
            document.getElementById("aparecer6").style = "animation-name: subir;animation-duration: 1s; animation-fill-mode: forwards;";
            if (document.getElementById("Termos").value == 1) {
              document.querySelector(".imagens5").innerHTML = '<a href="documentos/termos/colaboração/pdf/termo-1.pdf" target="_blank"><img src="documentos/termos/colaboração/termo-1.jpeg" alt="" class="imagens-D"></a><a href="documentos/termos/colaboração/pdf/termo-2.pdf" target="_blank"><img src="documentos/termos/colaboração/termo-2.jpeg" alt="" class="imagens-D"></a><a href="documentos/termos/colaboração/pdf/termo-3.pdf" target="_blank"><img src="documentos/termos/colaboração/termo-3.jpeg" alt="" class="imagens-D"></a><a href="documentos/termos/colaboração/pdf/termo-4.pdf" target="_blank"><img src="documentos/termos/colaboração/termo-4.jpeg" alt="" class="imagens-D"></a><a href="documentos/termos/colaboração/pdf/termo-5.pdf" target="_blank"><img src="documentos/termos/colaboração/termo-5.jpeg" alt="" class="imagens-D"></a><a href="documentos/termos/colaboração/pdf/termo-6.pdf" target="_blank"><img src="documentos/termos/colaboração/termo-6.jpeg" alt="" class="imagens-D"></a><a href="documentos/termos/colaboração/pdf/termo-7.pdf" target="_blank"><img src="documentos/termos/colaboração/termo-7.jpeg" alt="" class="imagens-D"></a>'
            } else if (document.getElementById("estatuto").value == 1 ) {
              document.querySelector(".imagens5").innerHTML = '<a href="documentos/estatuto/quinta-alteração/pdf/estatuto-1.pdf" target="_blank"><img src="documentos/estatuto/quinta-alteração/estatuto-1.jpeg" alt="" class="imagens-D"></a><a href="documentos/estatuto/quinta-alteração/pdf/estatuto-2.pdf" target="_blank"><img src="documentos/estatuto/quinta-alteração/estatuto-2.jpeg" alt="" class="imagens-D"></a><a href="documentos/estatuto/quinta-alteração/pdf/estatuto-3.pdf" target="_blank"><img src="documentos/estatuto/quinta-alteração/estatuto-3.jpeg" alt="" class="imagens-D"></a><a href="documentos/estatuto/quinta-alteração/pdf/estatuto-4.pdf" target="_blank"><img src="documentos/estatuto/quinta-alteração/estatuto-4.jpeg" alt="" class="imagens-D"></a>'
            } 
          } else {
            document.getElementById("botao6").value = 0
            document.getElementById("aparecer6").style = "animation-name: decer;animation-duration: 1s; animation-fill-mode: forwards;";
            document.querySelectorAll(".imagens-D").forEach((img) => {
              img.style = "animation-name: teste;animation-duration: 1s; animation-fill-mode: forwards;"
            })
            setTimeout( function() {document.querySelector(".imagens5").innerHTML = ""}, 900)
          }
        })
      }
    }
  


document.getElementById("Termos").addEventListener("click", function(click) {

  function aparecer() {
    document.getElementById("arquivos").innerHTML = "<li><button id='botao1' value='0'>Termo de colaboração 013/2023 <img src='assents/icone para baixo.svg' alt='icone para aparecer os documentos' id='aparecer1'> </button><div class='imagens'></div></li><li><button id='botao2' value='0'>Termo Aditivo N° 001 <img src='assents/icone para baixo.svg' alt='icone para aparecer os documentos' id='aparecer2'> </button><div class='imagens1'></div></li><li><button id='botao3' value='0'>Termo de Fomento 042/2024 <img src='assents/icone para baixo.svg' alt='icone para aparecer os documentos' id='aparecer3'> </button><div class='imagens2'></div></li><li><button id='botao4' value='0'>Termo de Fomento 040/2022 <img src='assents/icone para baixo.svg' alt='icone para aparecer os documentos' id='aparecer4'> </button><div class='imagens3'></div></li><li><button id='botao5' value='0'>Termo de Fomento 125/2022 <img src='assents/icone para baixo.svg' alt='icone para aparecer os documentos' id='aparecer5'> </button><div class='imagens4'></div></li><li><button id='botao6' value='0'>Termos de Colaboração <img src='assents/icone para baixo.svg' alt='icone para aparecer os documentos' id='aparecer6'> </button><div class='imagens5'></div></li>"
  }
  function desaparecer() {
    document.getElementById("arquivos").innerHTML = "";
  }

  if (document.getElementById("Termos").value == 0) {
    aparecer();
    console.log(document.getElementById("botao1"))
    document.getElementById("Termos").value = 1
    document.getElementById("estatuto").value = 0
    document.getElementById("Outros").value = 0
    document.getElementById("mostrar1").style = "animation-name: subir;animation-duration: 1s; animation-fill-mode: forwards;";
    if (document.getElementById("estatuto").value == 0) {
      document.getElementById("mostrar2").style = "animation-name: decer;animation-duration: 1s; animation-fill-mode: forwards;";
    }
    if(document.getElementById("Outros").value == 0) {
      document.getElementById("mostrar3").style = "animation-name: decer;animation-duration: 1s; animation-fill-mode: forwards;";
    }
  } else {
    desaparecer()
    document.getElementById("mostrar1").style = "animation-name: decer;animation-duration: 1s; animation-fill-mode: forwards;";
    document.getElementById("Termos").value = 0
  }
  botoes()
})


document.getElementById("estatuto").addEventListener("click", function() {
  function aparecer() {
    document.getElementById("arquivos").innerHTML = "<li><button id='botao1' value='0'>Estatuto Social- Fundação <img src='assents/icone para baixo.svg' alt='icone para aparecer os documentos' id='aparecer1'> </button><div class='imagens'></div></li><li><button id='botao2' value='0'>Estatuto Social- Alteração <img src='assents/icone para baixo.svg' alt='icone para aparecer os documentos' id='aparecer2'> </button><div class='imagens1'></div></li><li><button id='botao3' value='0'>Estatuto Social- Segunda alteração <img src='assents/icone para baixo.svg' alt='icone para aparecer os documentos' id='aparecer3'> </button><div class='imagens2'></div></li><li><button id='botao4' value='0'>Estatuto Social- Terceira alteração  <img src='assents/icone para baixo.svg' alt='icone para aparecer os documentos' id='aparecer4'> </button><div class='imagens3'></div></li><li><button id='botao5' value='0'>Estatuto Social- Quarta alteração <img src='assents/icone para baixo.svg' alt='icone para aparecer os documentos' id='aparecer5'> </button><div class='imagens4'></div></li><li><button id='botao6' value='0'>Estatuto Social- Quinta alteração <img src='assents/icone para baixo.svg' alt='icone para aparecer os documentos' id='aparecer6'> </button><div class='imagens5'></div></li>";
  }

  function desaparecer() {
    document.getElementById("arquivos").innerHTML = "";
  }

  if (document.getElementById("estatuto").value == 0) {
    aparecer();
    document.getElementById("estatuto").value = 1
    document.getElementById("Termos").value = 0
    document.getElementById("Outros").value = 0
    document.getElementById("mostrar2").style = "animation-name: subir;animation-duration: 1s; animation-fill-mode: forwards;";
    
    if (document.getElementById("Termos").value == 0) {
      document.getElementById("mostrar1").style = "animation-name: decer;animation-duration: 1s; animation-fill-mode: forwards;";
    }
    
    if(document.getElementById("Outros").value == 0) {
      document.getElementById("mostrar3").style = "animation-name: decer;animation-duration: 1s; animation-fill-mode: forwards;";
    }
  } else {
    desaparecer()
    document.getElementById("estatuto").value = 0;
      document.getElementById("mostrar2").style = "animation-name: decer;animation-duration: 1s; animation-fill-mode: forwards;";
  }
  botoes()
})


document.getElementById("Outros").addEventListener("click", function() {
  function aparecer() {
    document.getElementById("arquivos").innerHTML = "<li><button id='botao1' value='0'>ATA de Eleição da Diretoria - Gestão 2020/2022 <img src='assents/icone para baixo.svg' alt='icone para aparecer os documentos' id='aparecer1'> </button><div class='imagens'></div></li></ul><li><button id='botao2' value='0'>CEBAS <img src='assents/icone para baixo.svg' alt='icone para aparecer os documentos' id='aparecer2'></button><div class='imagens1'></div></li>";
  }

  function desaparecer() {
    document.getElementById("arquivos").innerHTML = "";
  }

  if (document.getElementById("Outros").value == 0) {
    aparecer();
    document.getElementById("Outros").value = 1
    document.getElementById("Termos").value = 0
    document.getElementById("estatuto").value = 0
    document.getElementById("mostrar3").style = "animation-name: subir;animation-duration: 1s; animation-fill-mode: forwards;";
    if (document.getElementById("Termos").value == 0) {
      document.getElementById("mostrar1").style = "animation-name: decer;animation-duration: 1s; animation-fill-mode: forwards;";
    }
    if (document.getElementById("estatuto").value == 0) {
      document.getElementById("mostrar2").style = "animation-name: decer;animation-duration: 1s; animation-fill-mode: forwards;";
    } 
   } else {
    desaparecer()
    document.getElementById("Outros").value = 0
    document.getElementById("mostrar3").style = "animation-name: decer;animation-duration: 1s; animation-fill-mode: forwards;";
  }
  botoes()
})

