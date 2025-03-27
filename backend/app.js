// Importo todo lo de la libreria de Express
import express from "express";
import productsRoutes from "./src/routes/products.js";
import customersRoutes from "./src/routes/customers.js";
import employeeRoutes from "./src/routes/employees.js";
import branchesRoutes from "./src/routes/branches.js";
import registerEmployessRoutes from "./src/routes/registerEmployees.js"
import cookieParser from "cookie-parser"

// Creo una constante que es igual a la libreria que importé
const app = express();

//Que acepte datos en json
app.use(express.json());
//Que postman acepte guardar cookies
app.use(cookieParser())

// Definir las rutas de las funciones que tendrá la página web
app.use("/api/products", productsRoutes);
app.use("/api/customers",customersRoutes);
app.use("/api/employee",employeeRoutes);
app.use("/api/branches",branchesRoutes);
app.use("/api/registerEmployees", registerEmployessRoutes)




// Exporto la constante para poder usar express en otros archivos
export default app;
