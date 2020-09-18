### Getting Started

`cd lner-react/client`<br>
`npm i && npm start`<br>
`// open new terminal`<br>
`cd lner-react/server`<br>
`npm i && npm run dev`<br>

### Cloudinary account

I have used a Cloudinary API for file uploads. You can sign up for free [here](https://cloudinary.com/console).<br>
Your keys will then need to be plugged into an .env file that you will also need to create under the server folder.

`// server/.env`<br>
`CLOUD_NAME=your_cloud_name`<br>
`API_KEY=your_cloud_key`<br>
`API_SECRET=your_cloud_secret`<br>

### Tests using Jest and ESLint

To run tests that I have created:

`cd lner-react/client`<br>
`npm test`

To run javascript tests using the Airbnb style with ESLint:

`cd lner-react/client`<br>
`npm run lint`
