const express =require("express");
const app =express();

const PORT = process.env.PORT || 3000; 

app.get("/", (req, res) => {
    res.send("Welcome to friends API");
});
app.get("/fara", (req, res) => {
    res.send("Fara Joseph");
});
app.get("/gary", (req, res) => {
    res.send("Gary Joseph");
});

app.get("/jule", (req, res) => {
    res.send("Jule Cesar");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});