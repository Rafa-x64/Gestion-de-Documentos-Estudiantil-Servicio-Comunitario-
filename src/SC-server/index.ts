import http from "http"

const PORT = 3000

const server = http.createServer((req, res) => { 
    if (req.url === "/health" && req.method === "GET") { 
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            status: 'online',
            project: 'Servicio Comunitario',
            timestamp: new Date().toISOString()
        }));
        return;
    }

    res.writeHead(404);
    res.end();
})

server.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}/health`);
});