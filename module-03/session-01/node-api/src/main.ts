//pake nama index.ts pun gapapa
import http, {IncomingMessage, ServerResponse} from "http";

const PORT = 8080;  
//port itu kita yang menentukan kita mau jalan dimana
//satu port buat satu service. ga boleh frontend sama kayak backend
//angkanya terserah kita tapi kak bryan biasanya 8080 for backend, 3000 for frontend. (biasanya 8000 keataas kosong katanya kak bryan).

const app = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    //ini if you use method GET di localhost 8080, maka akan ngebaca code dibawah ini
    if (req.url === "/api" && req.method === "GET"){
        res.writeHead(200, {"content-type": "application/json"});

        res.write(JSON.stringify({ message : "Hello from Node.js API!"}));
        res.end();
    }
});
//req = kirim request ke api
//res = response untuk pengirim request

//to help "Listen" ada yang kerja di port kita ga
//kalo gaada app.listen, appnya gaakan jalan. it needs to always be working.
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});