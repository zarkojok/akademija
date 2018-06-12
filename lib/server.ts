
import app from "./app";             //moze umjesto app appp1 ili bilo koje 2. ime jer uzima default-ni export

const port: number = 3000;

app.listen(port, () => {                                      //kad se startuje izvrsi ovo sljedece   - ovo je pokretanje servera
    console.log(__dirname);                                   //trenutno mjesto izvrsavanja naseg koda
    console.log(`Server is running on port ${port}`);         //kod ovih apostrofa moze promjenljiva unutra
});