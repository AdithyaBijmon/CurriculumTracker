// var facModel = require('./facModel')

// var createFacControllerFn = async(req,res)=>{
//     try{
//        const body = req.body;
//        const facModelData = new facModel()
//        facModelData.username = body.username
//        facModelData.password = body.password
//        facModelData.email = body.email
//        await facModelData.save()

//        res.status(200).send({
//         "status" : true,"message" : "Faculty created successfully"
//        });
//     }
//     catch(error)
//     {
//         res.status(400).send(error);
//     }
// }