const home =(req, res) => {
    res.send("Welcome to friends API")}

const fara =(req, res) => {
    res.send("Fara Joseph");
}

const gary =(req, res) => {
    res.send("Gary Joseph");
}

const jule =(req, res) => {
    res.send("Jule Cesar");
}


module.exports={
    home,
    fara,
    gary,
    jule
}