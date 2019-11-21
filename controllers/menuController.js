const controller = {};
const Adoption = require('../models/Adoption');
const Pet = require('../models/Pet.js')


controller.showAdoptions = async (req, res) =>{
    var array = [];
    const adoptions  = await Adoption.find();
    
    
    for (let index = 0; index < adoptions.length; index++) {
        var json = '';
        json += '{';
        var pet = await Pet.findById(adoptions[index].idPet);
       
        json += '"nombrePet"' + ':"'+pet.nombre+'",';
        json += '"imagenPet"' + ':"'+pet.imagen0+'",';                 
        
        json += '"idAdoption"' +':"'+adoptions[index]._id+'",'+
        '"date"' + ':"'+ adoptions[index].date+'"';
        
        json += '}';
        array.push(JSON.parse(json));
    }

    
    res.send(array);

};

controller.detailAdopt = async (req, res) =>{
    
};


module.exports = controller;