import app from "./app.js";

app.listen(process.env.PORT, ()=> { //to access port number from config.env
    console.log(`server running on port ${process.env.PORT}`);
    
})