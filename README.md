# Introduction
Testing Project

# Getting Started

1.	Installation process
-  nodejs (version >=14.7.0)

2. Prerequisites
- Window OS (for batch file)


# Build and Test

## With cmd

1. From the root of client folder

- Install Dependency:

```bash
     yarn install
```

- Start for development:

```bash
     yarn start:dev
```

- Build for production
```bash
     yarn build
```
- Requirement action:
       Add input file and edit its path as last argument in run.bat file
     + The ```input file``` must be everywhere inside ./dist
     + Change ```input file path``` in the last argument of run script in run.bat
- run 

```bash
     yarn start
```

- test 

```bash
     yarn test
```

## With batch file
1. Run ```build.bat``` file to build
2. Add input file and edit its path as last argument in run.bat file
- The ```input file``` must be everywhere inside ./dist
- Change ```input file path```in the last argument of run script in run.bat

3. Run ```run.bat``` file to run project

# Structure
```bash
          
```
#NOTE 

- About the input file, I only hanlde one case : a json file inside a folder, and the folder must be inside ./dist
Example: The input.json file is inside data folder, data folder is inside ./dist. The agrugment in script would be data/input.json
# Work Flow

# Contribute

