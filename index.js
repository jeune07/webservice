const express =require("express");
const app =express();
const controller =require("./controllers/friendsControllers");


const PORT = process.env.PORT || 3000; 
app.use("/",require("./routes/friendsRoutes"))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});