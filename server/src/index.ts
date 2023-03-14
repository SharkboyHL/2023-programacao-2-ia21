import express from "express"

const PORT = 3000
const app = express()

app.get("/tarefa", (req, res) => res.send("# Buscar dados de todas as tarefas"))
app.get("/tarefa/:id", (req, res) => res.send("# Buscar dados de uma tarefas"))
app.post("/tarefa", (req, res) => res.send("# Inserir uma tarefa"))
app.put("/tarefa", (req, res) => res.send("# Alterar todos os dados de uma tarefa"))
app.patch("/tarefa", (req, res) => res.send("# Alterar dados específicos de uma tarefa"))
app.delete("/tarefa/:id", (req, res) => res.send("# Deletar uma tarefa"))

app.listen(8080, () => console.log(`server is running, on port ${PORT}`))