const { response } = require("express");
const Liste = require("../models/liste");

exports.findAll = (request, response) => {
    // fonction récupère les to-do listes avec une requêtte SQL => model
    Liste.getAll((error, listes) => {
        if (error) {
            response.send(error.message);
        }

        console.log("liste ", listes);

        response.render("home.ejs", { listes });
    });

}; 

exports.findOne = (request, response) => {
    const { id } = request.params;

    Liste.getOne(id, (error, result) => {
        if (error) {
            response.send(error.message)
        }

        console.log(result);
        response.render("to_do_liste.ejs", { result });   
    })
    
};  


exports.addOne = (request, response) => {
    Liste.create(request.body, (error, result) => {
        if (error) {
            response.send(error.message);
        }

        response.send("ça fonctionne");
    })
}