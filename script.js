const searcher = document.getElementById('searcher')
const label = document.getElementById('finderID')
const ul = document.getElementById('locList')
const response = document.getElementById('response')
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
    
    searcher.addEventListener('keyup', function(event){
        let key = (event.keyCode ? event.keyCode : event.which)
        if (key == 13) { // codigo da tecla enter
            console.log('carregou enter o valor digitado foi: ' + this.value);
            liTag = Array()
            liTagName = document.getElementsByTagName('li')
            for(i = 0; i < liTagName.length; i++){
                liTag.push(liTagName[i])
            }
            for(i = 0; i < liTag.length; i++){
                const listagID = liTag[i].id = 'li' + [i]
                const oldLI = document.getElementById(listagID)
                oldLI.remove()
            }
            console.log(liTag)
            let inptValue = this.value
            if(inptValue.includes('DZ') ||inptValue.includes('AL') || inptValue.includes('RE') || inptValue.includes('AT') || inptValue.includes('R') || inptValue.includes('CXT')){       
                tractor = true
                if(tractor){
                    response.innerHTML = '#'+ inptValue + ' possivelmente corresponde à <b>Tratores</b>'
                    let li = document.createElement('li')
                    let t = document.createTextNode('N(1-46)')
                    li.appendChild(t)
                    document.getElementById("locList").appendChild(li);
                }
                if(tractor){
                    let li = document.createElement('li')
                    let t = document.createTextNode('J(1-46)')
                    li.appendChild(t)
                    document.getElementById("locList").appendChild(li);
                }
            }else if(inptValue.includes('HXE') ||inptValue.includes('AXE') || inptValue.includes('AZ') || inptValue.includes('H')){
                COMBINEDHarvester = true
                if(COMBINEDHarvester){
                    response.innerHTML = '#'+ inptValue + ' possivelmente corresponde à <b>Colheitadeira</b>'
                    let li = document.createElement('li')
                    let t = document.createTextNode('Q(1-46)')
                    li.appendChild(t)
                    document.getElementById("locList").appendChild(li);
                }
                if(COMBINEDHarvester){
                    let li = document.createElement('li')
                    let t = document.createTextNode('R(1-46)')
                    li.appendChild(t)
                    document.getElementById("locList").appendChild(li);
                }
                if(COMBINEDHarvester){
                    let li = document.createElement('li')
                    let t = document.createTextNode('S(1-46)')
                    li.appendChild(t)
                    document.getElementById("locList").appendChild(li);
                }
            }
            else if(inptValue.includes('CB115') ||inptValue.includes('CB015') || inptValue.includes('DE') || inptValue.includes('GX')){
                harvester = true
                if(harvester){
                    response.innerHTML = '#'+ inptValue + ' possivelmente corresponde à <b>Cana</b>'
                    let li = document.createElement('li')
                    let t = document.createTextNode('J(1-46)')
                    li.appendChild(t)
                    document.getElementById("locList").appendChild(li);
                }
                if(harvester){
                    let li = document.createElement('li')
                    let t = document.createTextNode('(K-46)')
                    li.appendChild(t)
                    document.getElementById("locList").appendChild(li);
                }
                if(harvester){
                    let li = document.createElement('li')
                    let t = document.createTextNode('N(1-46)')
                    li.appendChild(t)
                    document.getElementById("locList").appendChild(li);
                }
                if(harvester){
                    let li = document.createElement('li')
                    let t = document.createTextNode('M(1-46)')
                    li.appendChild(t)
                    document.getElementById("locList").appendChild(li);
                }
                if(harvester){
                    let li = document.createElement('li')
                    let t = document.createTextNode('Q(1-46)')
                    li.appendChild(t)
                    document.getElementById("locList").appendChild(li);
                }
            }else if(inptValue.includes('AX') ||inptValue.includes('CQ') || inptValue.includes('DQ')){
                planter = true
                if(planter){
                    response.innerHTML = '#'+ inptValue + ' possivelmente corresponde à <b>Plantadeira</b>'
                    let li = document.createElement('li')
                    let t = document.createTextNode('L(1-46)')
                    li.appendChild(t)
                    document.getElementById("locList").appendChild(li);
                }
            }else{
                alert('CÓDIGO NÃO CADASTRADO')
            }
        }
    })
}


//detectar quando o enter for pressionado (Jquery)
/*
    jQuery('#searcher').keypress(function(event){
        let keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){ 
        
        }
    });
*/


//adicionar label quando input vazio
let verifica = function(){
    if(searcher.value == ''){
        label.classList.add('finderIDclass')
        label.innerHTML = 'Qual código você deseja locar?'
    }
}
searcher.addEventListener('focus', codeEntraceAndRemoveLabel)
searcher.addEventListener('focusout', verifica)

