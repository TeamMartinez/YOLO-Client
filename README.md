# YOLO-Client
This is the client for the YOLO App.

## Installation 
1. Download Node (v 5+). This should come with `npm`.
1. Run `sudo npm install -g gulp`
1. On the directory, run `npm install`
1. Serve with `gulp`. Default port is `8080`.

## Dev
- `NODE_ENV='production' gulp build` To build min file
- `gulp` to watch and serve the content to local host
- `gulp build` to just build main.js
- `PORT=2000 gulp` to run on any other port

## Technologies
- Semantic-UI (CSS FW)
- React
- React Router
- Redux
- npm (package manager)
-   gulp (task-runner)

## Notes
- fetch might be a good idea for consuming our backend api
- Make your life easier download react and redux chrome exstensions
- For login page protection use `this.props.loggedIn ? this.props.children : <LoginForm />;` in `components/app.jsx`

