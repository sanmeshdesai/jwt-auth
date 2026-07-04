import app from './app.js';
import env from './config/env.js';
import connectDB from './config/db.js';



const startServer = async() => {
    try {
        await connectDB();

        app.listen(env.port, (req,res) => {
            console.log(`Server ruunning on PORT : ${env.port}`);
        });
        
    } catch(error) {
        console.error(error);
        process.exit(1);
        
    }
};

startServer();



    


