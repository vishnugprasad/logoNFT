const MetadataSet = require("../Metadata");
module.exports = (req,res)=>{
    const {id}= req.query;
    res.json(JSON.parse(JSON.stringify(MetadataSet[id])));
}