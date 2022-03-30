const searcher = document.getElementById('searcher')
const label = document.getElementById('finderID')

let codeEntraceAndRemoveLabel = function(){
    $(function() { //não atualizar a página com o Enter
        $("form").submit(function(){
             return false; 
        });
    });

    $(function() { //transformar a entrada de caracteres em caixa alta
        $('input').keyup(function() {
            this.value = this.value.toLocaleUpperCase();
        });
    });

    //retirar o label "Qual código você deseja locar" quando existir caracteres no input
    label.classList.remove('finderIDclass') 
    label.innerHTML = ''
    
    //detectar quando o Enter for pressionado (sem Jquery)
    /*
    searcher.addEventListener('keyup', function(event){
        let key = (event.keyCode ? event.keyCode : event.which)
        if (key == 13) { // codigo da tecla enter
            console.log('carregou enter o valor digitado foi: ' + this.value);
        }
    })
    */

    //detectar quando o enter for pressionado (Jquery)
    jQuery('#searcher').keypress(function(event){
        let keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){ 
            console.log('You pressed a "enter" key in textbox: ' + this.value);
        }
    });
}

//adicionar label quando input vazio
let verifica = function(){
    if(searcher.value == ''){
        label.classList.add('finderIDclass')
        label.innerHTML = 'Qual código você deseja locar?'
    }
}
searcher.addEventListener('focus', codeEntraceAndRemoveLabel)
searcher.addEventListener('focusout', verifica)
