
# Playwright_Tests: First steps

### Installation
To start the new project we will need to install all the dependencies, as it says, we need to run the next command:
- ***npm init playwright@latest***

**It is important to read the documentation of playwright, for example, to follow the language you will like to use as Javasacript or Typescript, so go on**
  
After that, we will need to install the node dependecies
- ***npm i***

--------------------------------------------------------------------------------------------------------------------------------------------
If you like, you may create a folder for screenshots for your tests, 
  or even playwright can create videos of your tests adding the video configuration in playwright.config.js, no more thant 3 lines of code!
--------------------------------------------------------------------------------------------------------------------------------------------

### Make Playwright easier
Now everything is set up, so if you don't want to write something like this to run one of your tests:
- ***npx playwright test arch-login.spec.js*** For example.
  
You may like to write this in your package.json, in the script section:
- ***"loginTest": "npx playwright test arch-login.spec.js"***
  
And now you can run the command:
- ***npm run loginTest***

Now, you might be new into this, but you can make a self code generate as a plugin, as the previous point, we can set it up like this:
- Inside package.json script: ***"instantAutomation": "npx playwright codegen http://my_url"***
- Run the command: ***npm run instantAutomation***
