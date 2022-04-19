const tagPerso = document.getElementById('perso');          /* variável criada para colocar o id nome nela      */
const tagHumor = document.getElementById('humor');          /* variável criada para colocar o id humor nela     */
const tagImg = document.getElementById('imagem');           /* variável criada para colocar o id imagem nela    */
let tagBtn = document.getElementById('botao');              /* variável criada para colocar o id botao nela     */


tagBtn.addEventListener('click', () =>{                     /*Evento do botao('clicando')                       */
                                                        
    if(tagBtn.value == '1'){                                /* Condição para alterar os valores                 */
        tagImg.src = './img/coringa-euforico.jpg'           /* Troca imagem                                     */
        tagPerso.innerText = '♫ Palhaço ♫'                  /* Altera o Nome                                    */
        tagHumor.innerText = '♥ Euforico ♥'                 /* Altera o Humor                                   */
        tagBtn.value = '2'                                  /* Altera o valor do botão                          */
    } else if(tagBtn.value == '2') {                  
        tagImg.src = './img/Coringa-Depre.jpg'         
        tagPerso.innerText = '► Joker ◄'                         
        tagHumor.innerText = '♠ Deprimido ♠'                    
        tagBtn.value = '3'                           
    } else {                                                    
        tagImg.src = './img/Coringa-Normal.jpeg'       
        tagPerso.innerText = '☺ Coringa ☺'                       
        tagHumor.innerText = '☻ Normal ☻'                       
        tagBtn.value = '1'                           
    }
})

/*ok */