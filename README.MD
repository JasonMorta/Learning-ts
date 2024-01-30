
# TypeScript Configuration and Build Process


# Section 1
## Create a TypeScript Configuration File for Your Project
When setting up a TypeScript project, it's crucial to 
create a tsconfig.json file to manage compilation settings. 
Follow these steps:

1. **Open Terminal:**
   Open your terminal or command prompt.

2. **Navigate to Your Project Directory:**
   Use the `cd` command to navigate to your TypeScript 
   project's root/parent directory.
  ```node
   cd path/to/your/project
  ```
3. **Run the TypeScript Compiler Initialization:**
   Use the following command to run the TypeScript
  Compiler initialization process. It will prompt you 
  with questions to generate a basic tsconfig.json file.
```node
  tsc --init
```

4. **Edit tsconfig.json (Optional):**
The generated tsconfig.json file will contain default settings. 
Open the file with a text editor to customize it based on your 
project's needs. For example, you might want to set the outDir 
(output directory) and rootDir (root directory for source files).
```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",        // You will need to create this folder in your project
    "rootDir": "./src",       // You will need to create this folder in your project
    // ... other compiler options
  },
  // ... other configuration options
}
```
Save your changes.

5. **Verify Configuration:**
Ensure that your tsconfig.json file is correctly configured for your 
project structure and requirements.

# Section 2
## Managing Multiple TS Projects
If your workspace includes multiple TS projects, 
ensure each project has its own tsconfig.json file 
with distinct output directories. This approach prevents 
conflicts when running multiple projects within the same 
main folder.

## Compile a TypeScript File
To manually compile a TypeScript file, execute the 
following command in your terminal in the project directory: 

```node  
  tsc <file-name>.ts
```
❗Running only ` tsc ` without any arguments will compile all .ts file in the current directory.❗

## Auto-Compile a TypeScript File
Enable automatic compilation of a TypeScript file with 
the following command:
```node  
  tsc <file-name>.ts -w
```
- **-w or --watch:** This flag puts the TypeScript compiler 
in watch mode, monitoring the specified file for changes.
- If you make changes to the TypeScript file (<file-name>.ts) 
and save those changes, the TypeScript compiler detects the 
modification.
- Upon detecting changes, the compiler automatically recompiles 
the modified TypeScript file without the need for manual intervention.

---------------------------------------------------------------------------------
## Auto-Run Compiled JavaScript Files(Optional)
If you want to automatically run compiled JavaScript files after each compilation, we need to install a node module to achieve this functionality.

1. **Initialize a Node.js Project:**
- Open your terminal or command prompt.
- Navigate to your project's root directory using the cd command.
- Run the following command to initialize a new Node.js project. Follow the prompts or press Enter to accept the default values.
```node  
npm init

```
This command will generate a package.json file.

2. **Install TypeScript as a Dependency:**
- Install TypeScript as a development dependency by running the following command:
```node
npm install --save-dev typescript
```

3. **Configure package.json for Automatic Compilation**
To streamline your build process, update the package.json 
file with the following scripts:
```json  
"scripts": {
  "compile": "tsc",
  "start": "node dist/<entry-file>.js",  // Adjust <entry-file> to your actual entry file
  "build": "npm run compile && npm start"
},
```
Replace <entry-file> with the actual entry file of your application.

Optionally, if you have a bundling step, add a "bundle-js" script with your bundling command:
```json  
"scripts": {
  "compile": "tsc",
  "bundle-js": "your-bundling-command",
  "start": "node dist/<entry-file>.js",
  "build": "npm run compile && npm run bundle-js && npm start"
},
```
Replace "your-bundling-command" with the actual command you use to bundle your JavaScript files.

4. **Run npm Build:**
- Now, you can run the build command:
```node
npm run build
```
This command executes the compilation script and any additional
bundling steps defined in your package.json file.

--------------------------------------------------------------------------

## Automatically compile/build your TypeScript files
To automatically compile your TypeScript files whenever 
changes are made, you can use a tool like **tsc-watch** or 
the **-w** (watch) flag provided by TypeScript itself. 
Here's how you can modify your package.json script to 
include automatic compilation:

## Install tsc-watch:
Install **tsc-watch** as a development dependency by running 
the following command in your terminal:
```node
npm install --save-dev tsc-watch
```

## Update package.json Scripts:
Update the **scripts** section in your **package.json** file 
to use **tsc-watch** for automatic compilation. Modify the "scripts" 
section like this:
```json
"scripts": {
  "compile": "tsc",
  "watch": "tsc-watch --onSuccess \"node <file-name>.js\"",
  "build": "npm run compile && npm run bundle-js",
},
```
Make sure to replace **<file-name>** with the actual name of your entry file.

## Run the Watch Command:
Start the TypeScript compiler in watch mode by running:
```node
npm run watch
```
This command will watch for changes in your TypeScript files and 
automatically trigger compilation. Upon successful compilation, 
it will run the specified command (in this case, **node <file-name>.js**).

## Run the Build Command:
Now, you can run your build script as before:
```node
npm run build
```

This script will first compile TypeScript files, and if successful, 
it will bundle the JavaScript files 
using your specified bundling command.

With these modifications, your TypeScript files will be automatically 
compiled whenever changes are detected, providing a smoother development 
experience. Adjust the script to fit the specifics of your project as needed.