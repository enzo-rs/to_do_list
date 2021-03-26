const { response, request } = require("express");
const Liste = require("../models/liste");

exports.findAll = (request, response) => {
    // fonction récupère les to-do listes avec une requêtte SQL => model
    Liste.getAll((error, listes) => {
        if (error) {
            response.send(error.message);
        }

        response.render("home.ejs", { listes });
    });

}; 

exports.findOne = (request, response) => {
    const { id } = request.params;

    Liste.getOne(id, (error, result) => {
        if (error) {
            response.send(error.message)
        }

        response.render("to_do_liste.ejs", { result });   
    })
    
};  


exports.addOne = (request, response) => {
    Liste.create(request.body, (error, result) => {
        if (error) {
            response.send(error.message);
        }

        response.redirect("/");
    })
}


exports.findTask = (request, response) => {
    const { id_tasks } = request.params;

    Liste.getTask(id_tasks, (error, result) => {
        if (error) {
            response.send(error.message);
        }
        
        let task =  result[0];
        response.render("tasks.ejs", { task });
    })
}


exports.changeOne = (request, response) => {

    const { id_tasks } = request.params;
    const { id } = request.params;
    Liste.putDescription(id_tasks, request.body["name"], (error, result) => {
        if (error) {
            response.send(error.message);
        }

        console.log(request);
        
        response.redirect(`/task/${id_tasks}`);

    })
}