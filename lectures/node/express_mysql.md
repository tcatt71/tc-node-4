# MySQL and Express

## How

In a new project folder, initialize npm to create a package.json file. We’ll need to have **express** and **mysql** npm packages installed. So do that now.

Next, create a file named ‘server.js’ in the root of your project directory. Also, create a new subfolder named ‘routes’, and place a ‘index.js’ file inside.

Our project structure should resemble:

```
> node_modules
> routes
    - index.js
- .gitignore
- package-lock.json
- package.json
- server.js
```

(If you do not have the .gitignore file, create it and add ‘node_modules/’ like we’ve done before.)

Inside of your server.js file, establish your express app:

```
import express from 'express';
import apiRouter from './routes';

const app = express()
app.use(express.json())

app.use(apiRouter)

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ errors: { err: err.message }})
})

app.listen(3001, () => console.log("Server listening on port 3001..."))
```

Above, we establish our express application, use express.json() to parse our incoming request bodies, use our apiRouter module to handle routes, use a custom error handler, and set the app to listen on port 3000.

Now let’s focus on our database query logic. Create a subfolder named ‘db’. Inside of db, create two new subfolders: ‘models’ and ‘queries’.

Add an ‘index.js’ file to your models subfolder. Add an employees.js file to your queries folder.

```
> db
    > models
        - index.js
    > queries
        - employees.js
> node_modules
> routes
    - index.js
- .gitignore
- package-lock.json
- package.json
- server.js
```

We need to create a connection between mysql and our app. Inside of your ‘models/index.js’ file, resemble the following:

```
import mysql from "mysql"
import employees from "../queries/employees"

const mysqlConfig = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "bestbuy"
}

const Connection = mysql.createPool(mysqlConfig);

const Query = (query, values) => {
    return new Promise((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if (err) reject(err)
            resolve(results)
        })
    })
}

export default { Query, employees }
```

At the top, we’ll need to import the mysql module and our query file we will write later. Next, we’ll create an object that contains the hostname, username, password, and database we will be connecting to. We can use the mysql.createPool() method to pass in our mysqlConfig object and establish a connection.

Next, we write the query model that we will be using to create our database queries.

Import our Query function from ‘models/index.js’

```
import { Query } from '../models';
```

Next, let’s start with basic CRUD queries for employees in our bestbuy database.

```
const allEmployees = async () => {
    return Query("SELECT EmployeeID, FirstName, LastName, Title FROM employees");
}

const oneEmployees = async (id) => {
    return Query("SELECT EmployeeID, FirstName, LastName, Title FROM employees", [id]);
}
```

Remember, our Query function takes in a string query and array of values to be used in the database query statement. Here we are creating asynchronous functions that call our Query method with specific queries and values, and return the resolved result from that Promise.

We can use a ‘?’ as a wildcard for our values. Keep in mind that the order of our values inside of the values array parameter, are given to the query string in the order that the symbols appear in the query string.

Let’s continue with writing queries for creating, updating and deleting table data.

```
const addEmployees = async (body) => {
    return Query("INSERT INTO employees SET ?", [body]);
}

const updateEmployees = async (body, id) => {
    return Query("UPDATE employees SET ? WHERE EmployeeID = ?", [body, id]);
}

const removeEmployees = async (id) => {
    return Query("DELETE FROM employees WHERE EmployeeID = ?", [id]);
}
```

Last but not least, we need to export these functions to be used in our apiRouter.

```
export default {
    allEmployees,
    oneEmployee,
    addEmployee,
    updateEmployee,
    removeEmployee
}
```

Now, let’s head back to the ‘routes/index.js’ file. Here is where we will host our api endpoints.

Import express and establish an express.Router().

```
import express from 'express';

const router = express.Router();
```

Create two ‘get’ endpoints for handling ‘/api/employees’ and ‘/api/employees/:id’. The first endpoint will serve all of our employees when requested. The latter will serve a requested employee by id.

```
router.get("/api/employees", (req, res, next) => {
    try {
        res.json("Employees")
    } catch (err) {
        next(err)
    }
})

router.get("/api/employees/:id", (req, res, next) => {
    try {
        res.json("Employee " + id)
    } catch (err) {
        next(err)
    }
})
```

To test, send back “Employees” or “Employees :id”. This way, we can see the request parameter “id” and test that we receive the correct value. If we initialize our server and navigate to both of these endpoints, we should see:

```
Employees
```

AND

```
Employee 12
```

Very good! Now that we know our endpoints are correct, let’s actually use our query function to return our query result as our http response.

We’ll need to import our READ queries from our ‘/db/queries/employees.js’ file. Then refactor your code to call the **allEmployees** and **oneEmployee** functions, and return the data to the client.

```
import { allEmployees, oneEmployee } from '../db/queries/employees"
```

AND

```
router.get("/api/employees", async (req, res, next) => {
    try {
        let data = await allEmployees();
        res.json(data);
    } catch (err) {
        next(err)
    }
})

router.get("/api/employees/:id", (req, res, next) => {
    try {
        let { id } = req.params;
        let data = await oneEmployees(id);
        res.json(data);
    } catch (err) {
        next(err)
    }
})
```

Let’s see if it works! Navigate to “localhost:3000/api/employees” and you should see all of the bestbuy employees.

And navigate to “localhost:3000/api/employees/32768” and you should see Robert Ahlering’s employee data.

## Exercise

We walked through connecting a mysql database to our express application. But we stopped at allEmployees and oneEmployee.

1. Finish creating endpoints and responses for addEmployee, updateEmployee, and removeEmployee queries
2. Create a new file named ‘products.js’ inside of your ‘/db/queries’ subfolder, and create CRUD functions that use the Query model we made to write queries to our database on the **products** table
3. You will need to create api endpoints for these responses as well
   1. Something along these lines of “/api/products…” will do the trick

### BONUS

4.  Create a new file named ‘procedures.js’ inside of your ‘/db/queries’ subfolder, and write two functions that use a stored procedure in the query. 2. You will need to create api endpoints for these responses as well 3. The stored procedures can be any complex query on your database where a sp would be better than a long query

        ```

Click the gif to watch the exercise video

```

```
