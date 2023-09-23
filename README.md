## Description

This repository contains the **frontend** code for the Technology Associate Programme 2023 Assignment by GDS Central. For the backend code, please check the other repository.

The problem selected is **Problem 2: [Snippet Sharing Service]**

The assignment was initiated on 22 September 2023 3:19:30pm with a dealine of 72 hours (ResponseID: 650d4002c7baae00125f3be1)

## Prerequisites

- node >= v18.18.0
- yarn >= 1.22.19

## Code architecture

The code follows a standard React project architecture grouping files by `features` which typically correspond to a backend resource. There is only one feature in this project `features/snippets`.

- `components` holds all React components that contain main business logic
- `pages` contains pages corresponding to elements used in the `BrowserRouter` offered by `react-router-dom`
- `containers` holds wrapper elments
- `services` contains the code that interacts with the backend API
- `types` contains type or declaration files to be used

Under `src`

- `common` folder contains reusable components across different features, though not as applicable in this project
- `utils` folder contains utility services and functions that can be re-used across differnet features

## Technologies used

Below are some of the technologies I decided to use for the project with a short writeup as a justification

- **[ReactJS](https://react.dev/)**

  - ReactJS is used due to it's declarative nature which allows for quick and rapid UI development. It also has the largest community and most plugins available, so that I can re-use libraries to solve existing problems.

- **[TailwindCSS](https://tailwindcss.com/) + [Flowbite](https://flowbite.com/)**

  - TailwindCSS is used as the styling library of choice due to high customizability and ease of use. Flowbite is used as a component library as it provides many commonly used and well-styled components, which saves time compared to building on your own.

- **[Tanstack Query](https://tanstack.com/query/latest)**

  - Tanstack Query is used as the state management tool of choice in this project. It allows for caching and easy refetching, and also is more elegant solution compared to standard `useState` and `useEffect` way of doing things as it exposes statuses and error in it's `useQuery` hook.

- **[React Router](https://reactrouter.com/en/main)**

  - React Router is used as the client-side routing solution in this project due to it being the most popular and widely-used framework, it is easier to debug and find solutions for problems.

- **[Vite](https://vitejs.dev/)**

  - Vite is used as the development environment and bundler of choice in this project, it provides much quicker build times compared to `create-react-app` and also provides templates which can be extended and used easily. It also includes other features to improve developer experience such as Hot Module Reloading.

- **[Vercel](https://vercel.com/)**

  - Vercel is used as the fronted hosting solution in this project as it free and quick to setup, it can automatically build and deploy vite projects. Furthermore, it integrates easily with Githubs CI workflow, it automatically deploys previews on pull-requests and merges to `master`.

- **Other libraries**
  - `date-fns` for date utilities
  - `react-hook-form` for form handling
  - `axios` for data fetching
  - `react-toastify` for toast notifications

## Caveats/Improvements

Due to the time and resource constraints of completing the assignment. There were some additional tasks or features that were under consideration that were skipped.

- **UI/UX and Responsiveness**
  - The main issue I ran into was that Flowbite components were not very feature-rich or supported much customization at all. Additionally since it was not as widely-used, documentation was sparse or outdated.
  - The table used in the main page perhaps is not very elegant and there also some issues with responsive design. It was also hard to integrate sorting and pagination due to lack of documentation on doing so with the library.
  - The `Pagination` component is not easily configured and does not expose some useful props, it might have been better to use better supported libraries such as AntD or MaterialUI instead.
- **Unit, Integration and E2E testing**
  - Testing using Vitest/Cypress

## Setup

Firstly, install the dependencies

```bash
$ yarn install
```

You can run the app using the following command

```bash
$ yarn dev
```

If the app has successfully started, you will see a line like so in the terminal

```
VITE v4.4.9  ready in 928 ms
```

You can now access the backend server at [`http://localhost:5173/`](http://localhost:5173/)

## Author

- [Goh Chen Kang, Sean](mailto:gohcksean@gmail.com)
