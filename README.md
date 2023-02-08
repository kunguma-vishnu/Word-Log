# Word-Log
Log of words

# Software Requirements
- NodeJS (v18.13.0)
- NPM (v8.19.3)

# Getting started with Project (Setup)
1. Create Remote Git Repository.
2. Initialize Local Repository.

    *Initialize Node project:*

    `npm init`

    *Initialize Git Project:*

    `git init`

3. Connect Remote repository with Local:

    `git remote add origin <git-url>`

4. Setting up Express + Typescript:

    `npm install express typescript @types/express`

5. Create tsconfig.json file with following code: 

    ```
    {
        "compilerOptions": {
            "esModuleInterop": true,
            "module": "commonjs",
            "target": "es6",
            "outDir": "build",
            "rootDir": "src",
            "strict": true
        }
    }
    ```

6. Create /src folder and index.ts file.
7. To convert ts files to js

    `npx tsc`

    *Converted files are present in /build folder.*
8. Running the application:

    `node build/index.js`

    *Application by default will run on http://localhost:3000*
