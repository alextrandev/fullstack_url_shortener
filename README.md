# fullstack_url_shortener

Shorten url using unelma.io api
_Shorted URL will expired after 1 year_

## Tech stack

- React/vite/js
- Axios
- Material UI
- Unelma API

## To run project after cloning

### Install node module

```shell
npm install
```

### Install material UI dependency

```shell
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

### Install axios

```shell
npm install axios
```

### Install dotenv

```shell
npm install dotenv --save
```

### Create .env file to store your api key

- Go to [unelma.io](https://unelma.io/) and sign up
- Go to account settings and create a new api key, copy the key
- Create a ".env" file inside the root of the folder
- In the .env file, write this line and put the key inside the quote

```env
VITE_UNELMA_API_TOKEN=""
```

### Start the project

```shell
npm run dev
```
