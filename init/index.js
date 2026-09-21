const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const { init } = require("../models/user.js");
main()
.then(()=>{
    console.log("connection successfull");
})
.catch((err)=>{
    console.log(err);
}) 

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');

}

const initDB = async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({
        ...obj,
        owner:"6aae1335d2c74afa1ac84c40",
    }))
    await Listing.insertMany(initData.data);
    console.log("data was insert");

}
initDB();