const db = require("../db/dbConfig.js");

const getAllFunkos = async()=>{
    try{
        const allFunkos = await db.any("SELECT * FROM funkos");
        return allFunkos;
    } catch(err){
        return err;
    }
}

const getOneFunko = async(id)=>{
    try{
        const funko = await db.one("SELECT * FROM funkos WHERE id=$1", id);
        return funko;
    }catch(err){
        return err;
    }
}

const createFunko = async(funko)=>{
    try{
        const newFunko = await db.one("INSERT INTO funkos(name,price,edition,image,featured) VALUES ($1,$2,$3,$4,$5) RETURNING *", [funko.name,funko.price,funko.edition,funko.image,funko.featured]);
        return newFunko;
    } catch(err){
        return err;
    }
}

const deleteFunko = async(id)=>{
    try{
        const deletedFunko = await db.one("DELETE FROM funkos WHERE id=$1 RETURNING *", id );
        return deletedFunko;
    } catch(err){
        return err;
    }
}

const updateFunko= async(id,funko)=>{
    try{
        const updatedFunko = await db.one(
            "UPDATE funkos SET name=$1, price=$2, edition=$3, image=$4, features=$5 WHERE id=$6 RETURNING *",
            [funko.name, funko.price, funko.edition, funko.image, funko.featured, id]
        );
        return updatedFunko;
    }catch(err){
        return err;
    }
}


module.exports = {
    getAllFunkos,
    getOneFunko,
    createFunko,
    deleteFunko,
    updateFunko
};
