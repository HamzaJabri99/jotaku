
# Jotaku

Ecommerce web App for selling Anime/manga and games. cosplays/wigs/accessories for men women and kids.


## Stacks

 - [Reactjs](https://reactjs.org/)
 - [React-redux/ redux-toolkit/ redux-persist](https://redux-toolkit.js.org/)
 - [Strapi (headless CMS) with nodejs](https://strapi.io/)
 - [stripe](https://stripe.com/fr-us)
 

### Prerequisites

NPM / Yarn and Node.js installed

### Installing

Installing NPM modules on both client and server folders

Execute these commands from the project directory

```
cd client && npm install
```

```
cd api && npm install
```

### Running the app
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_API_TOKEN` wich you can generate after installing strapi cms.

`REACT_APP_API_URL`: #API end-point default value is http://localhost:1337/api .
`REACT_APP_UPLOADS_URL`: backend http://localhost:1337 

Open a terminal on api directory

```
yarn develop
```

and open another terminal on client directory
```
npm run start
```

Access the web app at http://localhost:3000/





