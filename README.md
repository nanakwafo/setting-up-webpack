## Steps
1. `run npm init`
2. `npm install  webpack --save-dev`
    
    **Note: Webpack allows us to require javacipt file s to another**
    To install webpack globallly use the command `npm i -g webpack  `
    
    Link globally installed package to your project if you are on mac
    `npm link webpack-cli`

3. Add _webpack.config.js_ file 

    ###### To be able to use mordern javascript like ES6  we need babel run
    
    `npm install --save-dev @babel/core @babel/cli`
     
     `npm install @babel/preset-env --save-dev `  
     `npm install babel-loader --save-dev`   
     
 4. To run  webpack use the command `webpack`
