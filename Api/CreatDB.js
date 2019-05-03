//importer mongoose librairie
var mongoose = require('mongoose');
//importer models files
var ConducteurSchema = require("./models/Conducteur");
var EntrepriseSchema = require("./models/Entreprise");
var PersonneSchema = require("./models/Personne");
var PersonnelSchema = require("./models/Personnel");
var RoleSchema = require("./models/Role");
var VehiculeSchema = require("./models/Vehicule");
var AffectationSchema = require("./models/Affectation");
var AdminSchema = require("./models/Admin");



//connect's mongoose function
mongoose.connect("mongodb://localhost:27017/Tracking");

mongoose.connection.on("connected", function () {



    /*EntrepriseSchema.findOne({ _id: "5b5afc7602c1241b904d5ed8" }, function (err, x) {
        x.nom = "kaka";
        x.save(function (err) {
            console.log(" updated");
        });
    });


    EntrepriseSchema.remove({ _id: "5b69a569bb748a2118ae4990" }
        , function (err) {

            if (err) return handleError(err);
            console.log("supp");
        });
  
    //*********Create Entreprise***********
    obj2 = new EntrepriseSchema({
        nom: "Huwaei$",
        tel: "0533676390",
        adresse: "Rabat, Agdal",
    });
    obj2.save(function (err) {
        console.log("entreprise est ajouté");
    });
    
  
    //*********Create Personne***********
    obj1 = new PersonneSchema({
        nom: "Bouziane",
        prenom: "nasr",
        date_naissance: "12/09/1996",
        tel: "0621381353",
        adresse: "Rabat",
        mail: "nasar.bouziane@gmail.com"
    });

    obj1.save(function (err) {
        console.log("Personne est ajouté");
    });
    //*********Create Personnel***********
    obj30 = new PersonnelSchema({
        nom: "Bouziane",
        prenom: "nasr",
        date_naissance: "12/09/1996",
        tel: "0621381353",
        adresse: "Rabat",
        mail: "nasar.bouziane@gmail.com",
        date_embauche: "12/09/1996",
        salaire: "10000",
        login: "nasr",
        password: "nasr"
    });

    obj30.save(function (err) {
        console.log("Personnel est ajouté");
    });
    //*********Create Role***********
    obj3 = new RoleSchema({
        entreprise: obj2,
        personnel: obj30,
        libelle: "admin"
    });

    obj3.save(function (err) {
        console.log("Role est ajouté");
    });

    //*********Create Vehicule***********
    obj4 = new VehiculeSchema({
        type: "Peugeot",
        matricule: "12ED331",
        entreprise:"nasr",
        device: "1",
        type_moteur: "0",
        kilometrage: "21888",
        Vidange_precedent:"12/09/1996",
        Vidange_suivant: "13/09/1996"
    });

    obj4.save(function (err) {
        console.log("Vehicule est ajouté");
    });
    
    
    //*********Create Conducteur***********
    obj6 = new ConducteurSchema({
        nom: "Bouziane",
        prenom: "nasr",
        date_naissance: "12/09/1996",
        tel: "0621381353",
        adresse: "Rabat",
        mail: "conducteur",
        type_permis: "A"
        
    });

    obj6.save(function (err) {
        console.log("Conducteur est ajouté");
    });
    
    
    //*********Create Affectation***********
    obj10 = new AffectationSchema({
        conducteur: "hatim",
        vehicule: "0533676390",
        date_debut: "01/01/2018",
        date_fin: "01/01/2019" 
    });
    obj10.save(function (err) {
        console.log("Affectation est ajouté");
    });    */
    //*********Create Admin***********
    obj10 = new AdminSchema({
        nom: "n",
        prenom: "n",
        login: "n",
        password: "$2a$08$AaHYt7l9bzR9b.MF7AR.3uw14SXAl1MLqjkgdDedDJEQzyCgMr0NC"
    });
    obj10.save(function (err) {
        console.log("Admin est ajouté");
    });

});




