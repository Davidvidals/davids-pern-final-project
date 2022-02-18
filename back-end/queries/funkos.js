const db = require("../db/dbConfig.js");

//INDEX
const getAllFunkos = async()=>{
    try{
        const allFunkos = await db.any("SELECT * FROM funkos");
        return allFunkos
    }catch(err){
        return err;
    }
}

//SHOW
const getOneFunko = async(id)=>{
    try{
        const funko = await db.one("SELECT * FROM funkos WHERE id=$1", id);
        return funko; 
    }catch(err){
        return err;
    }
}

//CREATE
const createFunko = async(funko)=>{
    try{
        const newFunko = await db.one("INSERT INTO funkos(name, price, edition, image) VALUES ($1,$2,$3,$4) RETURNING *", [funko.name , funko.price,funko.edition, funko.image])
    }catch(err){
        return err;
    }
}

//DELETE
const deleteFunko = async(id)=>{
    try{
        const deletedFunko = await db.one("DELETE FROM funkos WHERE id=$1 RETURNING *", id);
        return deletedFunko;
    }catch(err){
        return err;
    }
}

//UPDATE
const updateFunko = async(id, funko)=>{
    try{
        const updatedFunko = await db.one(
            "UPDATED funkos SET name=$1, price = $2, edition=$3, image=$4 WHERE id = $5 RETURNING *",
            [funko.name, funko.price, funko.edition, funko.image, id]
        );
        return updatedFunko;
    }catch(err){
        return err;
    }
}

module.exports={
    getAllFunkos,
    getOneFunko,
    createFunko,
    deleteFunko,
    updateFunko
}