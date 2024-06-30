<p align="center">
  <a href="https://eip-marvel-app.web.app/"
    ><img
      src="https://eip-marvel-app.web.app/project-landing-page.gif"
      alt="EIP Studios"
     />
  </a>
</p>



# Marvel App Backend
This in a small [endpoint](https://eip-marvel-app.herokuapp.com/) to interact with the Marvel API and serve with data to [web page](https://eip-marvel-app.web.app/).

## Built with
* [Node.Js](https://nodejs.org/en/docs/) - JavaScript runtime environment
* [Express](https://www.mongodb.com/atlas) - Node.js Framework!
* [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) - Dependencies handler
  
  

## Frontend Side
If you are interested in the frontend side part of this project you can find the repository [here](https://github.com/ycabrera90/MarvelApp.git).

## Clone and run app
These instructions will allow you to obtain a copy of the project on your local machine for development and test purposes.
Look the [**deployment**](https://eip-marvel-app.herokuapp.com/) so you can see the final result.


#### Pre-requirements
For run this project you must have installed the following packages in your local machine

* [NodeJs](https://nodejs.org/en/) 
* [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

#### Clone and serve
For clone and serve the project you need open a terminal, go to the folder which you want to work and put the follows commands
```
git clone https://github.com/ycabrera90/MarvelApp-bkEnd.git

cd MarvelApp-bkEnd

npm install
```

After that you have to create a file called **nodemon.json** with the follow structure:
```
{
  "env": {
    "PRIVATE_KEY": "<your Marvel api private key>",
    "PUBLIC_KEY": "<your Marvel api public key>",
  }
}
```

You can get the **Marvel api private key** and **Marvel api public key** in you account of [Developer Marvel](https://developer.marvel.com/account).

#### Serve the app.
For serve the app you need to run the following command:
```
npm run dev
```

Then you can open your browser and go to the following [link](http://localhost:5000).

## Authors
* [**Yosniel Cabrera**](https://yosniel-dev.com) - *React Developer* 
  
## License
This project is **public** and only for academic purposes.

## Read More 🎁
* You can find the documentation of the APIS in the following [link](https://developer.marvel.com/).

<br>

[⬆ Back to top](#marvel-app-backend)<br>
  
---
yosniel.ch@gmail.com

