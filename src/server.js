import { Model, createServer } from "miragejs"
import { json } from "react-router-dom";
import { easyVisaObj } from "./data/places";

export default function mockApi() {
    createServer({
        models: {
            easyVisa: Model
        },
        seeds(server) {
            server.create("easyVisa", easyVisaObj);
        },
        routes() {
            this.get("/easyvisa", (schema) => (
                easyVisaObj
            ),
                { timing: 4000 }
            )

            // this.post('/todos', (schema, request) => {
            //     let newTodo = JSON.parse(request.requestBody);
            //     return schema.todos.create(newTodo);
            // })
        },
    })
}