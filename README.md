## Github Battle

First project by using React tylermcginnis.com <a href="https://tylermcginnis.com/" target="_blank">tylermcginnis.com</a>:
<br>
developed a simple React app for comparing popular github profiles sorted by stars.

---

### To run the application

[Project Repo](https://github.com/markchen555/Github-Battle)

1. Fork a copy from my github or download the repository on your computer, unzip it and open `index.html` in your browser to see the working tests. See detail for part 1 in `../index.html`. See detail for part 2 in `../views/js/main.js`.

2. Compile or Compile and Watch
- Compile: `npm run create` (compile and save to your current work).
- Compile and Watch: `npm run start` (compile and watch but will not save to your current work).

3. To inspect the site on your phone, you can run a local server:

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```
4. Open a browser and visit localhost:8080.
5. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely:

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```
6. Copy the public URL ngrok gives you to test!

Other options:
use create-react-app
`npm install -g create-react-app`
`cd my-app/`
`npm start`
Then open `http://localhost:3000` to see your app.
When you're ready to delploy to production, create a minifield bundle with `npm run build`.

---

### Hosting

- Enter `npm run create` to create current version of code.
- Enter `npm run start` to watch and run current version of code.
- Enter `npm run build` to set NODE_ENV to production and uglify index_bundle into dist folder.
- Enter `npm run firebase-init` to initialize firebase with account and project.
- Enter `npm run deploy` to deploy the project and hosting.  

---

### Github Battle Site Info

uses `Webpack` and `Babel` to compile `JSX` to `JavaScript` and hotloading uses `React Router V4` for routing URLs uses `Axios` npm module to hit github's API for user profiles.


---

### NPM

Dependencies:
- `react`
- `react-dom`
- `react-router-dom`
- `prop-types`
- `axios`
- `query-string`

devDependencies:
- `babel-core`
- `babel-loader`
- `babel-preset-env`
- `babel-preset-react`
- `css-loader`
- `html-webpack-plugin`
- `prop`
- `style-loader`
- `webpack`
- `webpack-dev-server`
- `firebase-tools`

set up command: `npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react css-loader style-loader html-webpack-plugin webpack webpack-dev-server`


---

### Reference

- [Ngrok Local Web Server](https://ngrok.com/docs)

---

### License

The project is licensed under the [MIT license](license.txt).
