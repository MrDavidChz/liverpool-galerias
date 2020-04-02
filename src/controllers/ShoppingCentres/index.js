import ApiResponser from "../ApiResponser"

class ShoppingCentres extends ApiResponser {
    constructor(){

        super('Shopping Centres');

    }
    index = () =>{

      return this.sendResponse(200, true, 'Datos guardados correctamente',[]);

    }

    create = (data) =>{
        
    }
    
    
    show = (data) =>{

    }
    
    
    edit = (data) =>{

    }    

    delete = (data) =>{

    }     
}

export default new ShoppingCentres;