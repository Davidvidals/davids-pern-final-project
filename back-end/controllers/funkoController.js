
const express =require('express');
const funkos = express.Router();
const {getAllFunkos, getOneFunko, createFunko, deleteFunko, updateFunko}= require('../queries/funkos.js')


//INDEX
funkos.get('/', async (req,res)=>{ 
    try{
        const allFunkos = await getAllFunkos();
        if(allFunkos[0]){
            res.status(200).json(allFunkos);
            // console.log(allSnacks)
        } else{
            res.status(500).json({err:'server error'})
        }        
    }catch(err){
        console.log(err)
    }
})

//SHOW ask why the returning object chnage their syntax rules
funkos.get('/:id', async (req,res)=>{
    const {id} = req.params;
    try{
        const funko = await getOneFunko(id);
        if(funko.id){
            res.status(200).json(funko);
        } else{
            res.status(404).json({error: "not found"})
        }
    } catch(err){
        console.log(err)
    }
})
//POST/CREATE
funkos.post('/',async(req,res)=>{
    let {body} =req;
    try{
        const createdFunko = await createFunko(body);
        if(createdFunko.id){
            res.status(200).json(createdFunko);
        } else {
            res.status(500).json({error:"creation error"})
        }
    }catch{
        console.log(err)
    }
})


//DELETE 
funkos.delete("/:id",async (req,res)=>{
    const {id} = req.params
    try{
        const deletedFunko = await  deleteFunko(id);
        if(deletedFunko.id){
            res.status(200).json(deletedFunko)
        } else{
            res.status(404).json(deletedFunko)
        }
    } catch(err){
        console.log(err)
    }
})

//UPDATE

funkos.put("/:id", async(req,res)=>{
    const {id} = req.params;
    let {body} = req;
    const updatedFunko = await updateFunko(id,body);
    if(updatedFunko.id){
        res.status(200).json(updatedFunko);
    } else {
        res.status(404).json({error: 'funko not found'})
    }
})


module.exports = funkos;