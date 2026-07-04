import express from 'express';


const app = express();

const PORT = 4000

app.get('/', (req , res) => {
    res.send('Server started.');
});

app.listen(PORT, (req,res) => {
    console.log(`Server ruunning on PORT : ${PORT}`);
    
});


