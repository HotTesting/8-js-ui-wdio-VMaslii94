export class Header{
headerCart:HeaderCart

get container(){
    return $('#header')
}
constructor(){
    this.headerCart = new HeaderCart(() => this.container)
}



}

class HeaderCart {
    header

    get container(){
        return this.header().$('#cart')
    }
    constructor(header) {
        this.header = header
    }
    getQuantity():number{
      
        let quantity= this.container.$('.quantity').getText();
       return parseInt(quantity)
    }
        
}

  //Option 2:
//   export class Header2{
//     headerCart:HeaderCart
    
//     get container(){
//         return $('#header')
//     }
//     getQuantity():number{
//         let quantity= this.container.$('#cart .quantity').getText()
//         return parseInt(quantity)
//      }

// } 