const mongoose=require('mongoose');
const artSchema=new mongoose.Schema({
    name:{type:String,require:true},
    artistId:{type:String,require:true},
    imageUrl:{type:String,require:true},
    description:{type:String,require:true},
    price:{type:Number,require:true},
    ownerId:{type:String,require:true}
});
const artModel=mongoose.model("art",artSchema);
module.exports=artModel;