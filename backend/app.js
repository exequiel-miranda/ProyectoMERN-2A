// Importo todo lo de la libreria de Express
import express from "express";
import productsRoutes from "./src/routes/products.js";
import customersRoutes from "./src/routes/customers.js";
import employeeRoutes from "./src/routes/employees.js";
import branchesRoutes from "./src/routes/branches.js";
import registerEmployessRoutes from "./src/routes/registerEmployees.js";
import cookieParser from "cookie-parser";
import loginRoutes from "./src/routes/login.js";
import logoutRoutes from "./src/routes/logout.js";
import registerClientRoutes from "./src/routes/registerClients.js";
import recoveryPasswordRoutes from "./src/routes/recoveryPassword.js";
import providersRoutes from "./src/routes/providers.js";
import { validateAuthToken } from "./src/middlewares/validateAuthToken.js";
import cors from "cors";
import faqsRoutes from "./src/routes/faqs.js";

// Creo una constante que es igual a la libreria que importé
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    // Permitir envío de cookies y credenciales
    credentials: true,
  })
);

//Que acepte datos en json
app.use(express.json());
//Que postman acepte guardar cookies
app.use(cookieParser());

// Definir las rutas de las funciones que tendrá la página web
app.use(
  "/api/products",
  validateAuthToken(["admin", "employee"]),
  productsRoutes
);
app.use("/api/customers", customersRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/branches", branchesRoutes);

app.use(
  "/api/registerEmployees",
  validateAuthToken(["admin"]),
  registerEmployessRoutes
);
app.use("/api/login", loginRoutes);
app.use("/api/logout", logoutRoutes);
app.use("/api/registerClients", registerClientRoutes);
app.use("/api/recoveryPassword", recoveryPasswordRoutes);
app.use("/api/providers", validateAuthToken(["admin"]), providersRoutes);

app.use("/api/faqs", faqsRoutes);

// Exporto la constante para poder usar express en otros archivos
export default app;
