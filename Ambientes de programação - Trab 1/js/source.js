jQuery(document).ready(
    function() {
        
        // btnCalc - Click
        $("#btnCalc").click( function()
        {
            //Criando Variaveis
            var a,b,c,delta,x1,x2,yv,xv,conca;
            
            //pega valores do FORM            
            a = $("#txtA").val();
            b = $("#txtB").val();
            c = $("#txtC").val();
            
            //Calculo do discriminante
            delta = Math.pow(b,2)- 4 * a * c;
            
            //Calculo das raizes
            if(delta>=0){
                x1= (- b - Math.sqrt(delta)) / (2 * a);
                x2= (- b + Math.sqrt(delta)) / (2 * a); 
            }
            else{
                x1="Não Existe!";
                x2="Não Existe!";
            }
            
            //Verifica a concavidade
            if(a>0) conca = "para CIMA";
            if(a<0) conca = "para BAIXO";
            if(a==0) conca = "Não é de 2° grau";
            
            //Calculo do vertice
            xv= -b / (2*a);
            yv= -delta / (4*a);
            vertice = "(" + xv + ";"+ yv+")";
            
            //Exibe Dados
            $("#txtConca").val(conca) ;
            $("#txtDelta").val(delta) ;
            $("#txtX1").val(x1) ;
            $("#txtX2").val(x2) ;
            $("#txtVerti").val(vertice) ;
            
        })
        

    }
)