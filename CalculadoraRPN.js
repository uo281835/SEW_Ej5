class Stack{

    constructor(){
        this.pila = new Array();
    }
    push(i){
        this.pila.push(i);
    }
    pop(){
        return this.pila.pop();
    }
    length(){
        return this.pila.length;
    }
    toString(){
        var result="";
        for(var v in this.pila){
            result+=this.pila[v]+"";
            result+="\n";
        }
        return result;
    }
}
class CalculadoraRPN{

    
    constructor(){
        this.pila = new Stack();
        this.actual =0;
        this.toggled = false;
        document.addEventListener('keydown', (event) => {
            var keyName = event.key;
            var valor = keyName;
            if(valor == 'm')
                this.multiplicar();
            else if(valor == 'd')
                this.dividir();
            else if(valor == 'r')
                this.raiz();
            else if(valor == '=')
                this.enter();
            else if(valor =='c')
                this.reset();
            else if(valor == 'o')
                this.trueReset();
            else if(valor == "Enter")
                this.evaluar();
            else if(valor == 'p')
                this.porcentaje();
            else if(valor =='c')
                this.reset();
            else if(valor == 'o')
                this.trueReset();
            else if(valor!="Enter"&&valor!="r"&&
                (Number(valor)!==NaN || valor =='+'|| valor =='-'|| valor =='.'))
                    this.add(valor);
                
          });
       
    }
    almacenado=0;
    visualizar(){
        var result=this.actual;
        document.getElementsByName('Actual')[0].value= result;
        document.getElementsByName('output')[0].value= this.pila.toString();
    }
    multiplicar(){
        var a=this.pila.pop();
        var b=this.pila.pop();
        this.pila.push(a*b);
        this.visualizar();
    }
    dividir(){
        var a=this.pila.pop();
        var b=this.pila.pop();
        this.pila.push(b/a);
        this.visualizar();
    }
    sumar(){
        var a=this.pila.pop();
        var b=this.pila.pop();
        this.pila.push(a+b);
        this.visualizar();
    }
    restar(){
        var a=this.pila.pop();
        var b=this.pila.pop();
        this.pila.push(b-a);
        this.visualizar();
    }

    sin(){
        var a = this.pila.pop();
        if(this.toggled)
            this.pila.push(Math.asin(a));
        else
            this.pila.push(Math.sin(a));
    }
    cos(){
        var a = this.pila.pop();
        if(this.toggled)
            this.pila.push(Math.acos(a));
        else
            this.pila.push(Math.cos(a));
    }
    tan(){
        var a = this.pila.pop();
        if(this.toggled)
        this.pila.push(Math.atan(a));
    else
        this.pila.push(Math.tan(a));
    }
    toggle(){
        this.toggled= !this.toggled;
    }
    add(i){
        if(this.actual!=0)
            this.actual *=10;
        this.actual+=i; 
        this.visualizar();
    }
    add2(i){
        add(i);
        add(i);
    }
    remove(){
        var almacenado = document.getElementsByName('output')[0].value;
        almacenado="";
        document.getElementsByName('output')[0].value= almacenado;
        this.visualizar();
    }
    enter(){
        this.pila.push(this.actual);
        this.actual=0;
        this.visualizar();
    }
   


}

calculadora = new CalculadoraRPN();


  onkeydown= (event)=> {if (event.code == '1') {
    calculadora.add(1);
 }};