<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">empora_repo</h3>


---

<p align="center"> This is a code sample providing a simple csv input of raw addresses used to interact with SmartySDK to get formatted results.
    <br> 
</p>

## 📝 Table of Contents

- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)
- [Additional Notes](#acknowledgement)

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them.

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running.

This project is using the latest version of Node v20.5.1.  Please ensure you install this version (older versions are not guaranteed).  I recommend using Homebrew to install and details can be found here https://docs.brew.sh/Installation and using the node version manager (NVM).  NVM installation and usage can be found here https://formulae.brew.sh/formula/nvm

Install the correct Node version

```
nvm install 20.5.1
```

Navigate to the root folder of this repository and install all npm packages used in this project 

```
npm install
```

Add local api keys for SmartySDK
This application is built for illustration purposes and the secrets are not fully decoupled.  You will need to update two keys in the following file with the necessary `authId` and `authtoken` to interact with the Smarty API
```
./src/api/apiKeys.js
```

## 🔧 Running the tests <a name = "tests"></a>

Each module is functional in nature, and should have a corresponding test that can be executed.  

### And coding style tests

Execute the test suite by running the following (an optional argument can be provided to run a specific test suite, just provide the file path after the test command).  Additionally, you can run a test watch if iterating on the code.

```
npm run test
npm run test-watch
```

## 🎈 Usage <a name="usage"></a>

In order to use the application, you'll need to provide a local file as specified in the assignment instructions (.csv with expected headers).  There is a sample file provided that can be used.

The file is provided to the application via command line arguments.  Here's a sample to run locally, but you can overwrite the file path with a local file.  The application will not run successfully if you fail to provide a valid filepath.

```
node src/index.js src/sample_data/sampleInput.csv
```

## ⛏️ Built Using <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- Andrew Burns

## 🎉 Additional Notes <a name = "acknowledgement"></a>

- This code sample is not meant to be exhaustive of production levels of rigor.  As noted, the apiKeys are not abstracted into some sort of environment variables, or secret store.  Further, there is not a sense of different environments that are configured (something I'd be doing if this were needed in the real world)
- Most of the code is test driven, but due to the nature of this project and the purpose, there are some edge cases (for example, I mocked the entire module that interacts with SmartySDK api's).  Typically, I'd spend more time isolating failure cases that are reliant on a 3rd party interaction
- There's a lot of discussion about how the data returned from Smarty could be modelled, but I took a relatively simple approach at first, constructing a simpler response object that fit the needs of the console UI.  It is flexible enough to change rather easily, but this exercise didn't warrant the over-engineering

- Assumptions 
  - File format, headers, and data itegrity are assumed.  In normal situations, I would spend much more time sanitizing the input to ensure proper handling.  Additionally, a file header is expected in the file (parsing starts at the 2nd row).  This is easily configured, but I wanted to call it out.
  - smarty api response - Additionally, I simplified the problem by only considering the first lookup result (it is possible to have multiple candidates).  As such, I checked for the existence of results, and picked the first one if it existed.  I am aware of the maxCandidates property in the request, but for now it's omitted.

- Overall, I enjoyed this exercise.  It's not a perfect representation of my skills, but I do believe it gives an accurate insight into how I approach technical challenges.
