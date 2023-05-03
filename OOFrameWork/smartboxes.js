

class SmartBox {
    Box
    constructor( what, inner ){
        this.Box = document.createElement( what )
        this.Box.innerHTML = inner
        this.Box.className = 'oo' + this.Box.tagName
    }
    SetClassName(name){
        this.Box.className = name
    }
    
}

class ActionBox extends SmartBox{
    constructor( what, inner, action ){
        super( what, inner )
        this.Box.onclick = action
        return this.Box
    }
}

class UpDownBox extends SmartBox{
    constructor(inner, Action){
        super('button', inner)
        this.Box.onclick = Action
        this.Box.style.borderRadius = "90%"
        return this.Box
    }
}

class NumberBox extends SmartBox{
    Number
    constructor( what, number ){
        super(what, number)
        this.Number = number
    }
    GetBox() { return this.Box }
    Up(){
        this.Number++
        this.Box.innerHTML = this.Number
    }
    Down(){
        this.Number--
        this.Box.innerHTML = this.Number
    }
}






