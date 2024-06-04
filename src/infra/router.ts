import express from "express";
import helmet from "helmet";
import cors from "cors";

export class Router {
    app: express.Express;

    constructor() {
        this.app = express();
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(express.json());

        this.setRoutes();
    }

    private setRoutes() {}

    public startServer(port: number) {
        this.app.listen(port, () => console.log(`Server online: http://localhost:${port}`));
    }
}
