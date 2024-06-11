import mongoose,{ mongo } from "mongoose";



async function conectaNaDataBase()  {
    mongoose.connect("mongodb+srv://annasoaresbb:an123@cluster0.puelmsf.mongodb.net/livraria?retryWrites=true&w=majority");
    return mongoose.connection;
};

export default conectaNaDataBase;
