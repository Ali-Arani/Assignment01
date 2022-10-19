atlasDB="mongodb+srv://dbuser:xh18KWDMtXZDMw3s@cluster1.x4anyjk.mongodb.net/?retryWrites=true&w=majority"

let mongoose=require('mongoose');

module.exports=function(){

    //conect to database

    mongoose.connect(atlasDB);

    let mongodb=mongoose.connection;
    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open',()=>{
        console.log('****mongodb is conected');
    });
    return mongodb;
}