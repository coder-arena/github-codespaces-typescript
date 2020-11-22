import express from "express"

const app = express()
const port = 3000

app.get("/", (req: express.Request, resp: express.Response) => {
    resp.json({"message": "Subscribe to the channel."})
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
