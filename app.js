const express = require('express')
const mongoclient = require('mongodb').MongoClient
var cors = require('cors')
const path = require('path')
const qr = require('qrcode')

const app = new express()
app.set('view engine','ejs')
app.use(cors())


// var mc = new mongoclient('mongodb://localhost:27017')
// var db

// mc.connect(function(err,server){
//     if(err) throw err
//     db=server.db("GPSC")
// })

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

app.use("/static",express.static('static'))

app.get("/", async(req,res)=>{
    res.render('index')
})

app.get("/contact", async(req,res)=>{
    res.render('contact')
})

app.get("/about", async(req,res)=>{
    res.render('about')
})

app.get("/disclaimer", async(req,res)=>{
    res.render('disc')
})
app.get("/disclosure", async(req,res)=>{
    res.render('mdisclosure')
})
app.get("/tnc", async(req,res)=>{
    res.render('tnc')
})
app.get("/feePolicy", async(req,res)=>{
    res.render('fpolicy')
})

app.get("/feePayment", async(req,res)=>{
    res.render('feePayment')
})

app.get("/staffs", async(req,res)=>{
    res.render('staffs')
})

app.get("/gallery", async(req,res)=>{
    res.render('gallery')
})

app.get("/schoolLife", async(req,res)=>{
    res.render('schoollife')
})

app.post("/getQR", async(req,res)=>{
    console.log(req.body)
 
        const url = "upi://pay?pn=UPAYI&pa=9937210111@axl&cu=INR&am="+req.body.amount;
    
        // If the input is null return "Empty Data" error
        if (url.length === 0) res.send("Empty Data!");
        
        // Let us convert the input stored in the url and return it as a representation of the QR Code image contained in the Data URI(Uniform Resource Identifier)
        // It shall be returned as a png image format
        // In case of an error, it will save the error inside the "err" variable and display it
        
        qr.toDataURL(url, (err, src) => {
            if (err) res.send("Error occured");
            console.log(src)
          
            // Let us return the QR code image as our response and set it to be the source used in the webpage
            res.send(src);
        });
    
   // res.render('feePayment')
})


app.listen(8000||process.env.PORT,()=>{console.log("App is listening on the Port")})
