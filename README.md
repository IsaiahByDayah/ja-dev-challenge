<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">J&A Dev Challenge</h3>

  <p align="center">
    Dev Challenge submission to Joseph & Associates, LLC
    
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#local-dev">Local Development</a></li>
      </ul>
    </li>
    <li>
      <a href="#assumptions">Assumptions and Additional Information</a>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

As part of my application with Joseph & Associates, LLC for the Full Stack Web Developer position, this repo contains my completion of the requested developer challenge to showcase some of my skillsets.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Vite][Vite]][Vite-url]
- [![React][React.js]][React-url]
- [![Typescript][Typescript]][Typescript-url]
- [![TailwindCSS][TailwindCSS]][TailwindCSS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- node ([nvm](https://github.com/nvm-sh/nvm) or similar recommended)
  - Currently using `v22.16.0`

### Installation

1. Clone the repo

```sh
git clone https://github.com/IsaiahByDayah/ja-dev-challenge
```

2. Activate working node version (if applicable)

```sh
nvm use # will check included .nvmrc file, install specified node version (if necessary), and activate it to be the node version used
```

2. Install packages

```sh
npm install
```

### Local Development

Run the app locally with the following:

```sh
npm run dev
```

Visit [localhost:5173](http://localhost:5173/) in a browser to see the project

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ABOUT THE PROJECT -->

## Assumptions and Additional Information

In order to complete the dev challenge in a timely manner, some assuptions had to be made about the UI, UX, and data models used throughout the submission. Some of those assumptions are:

- A project like this may be built with other technology than the sample provided
  - Vite, Typescript, and Tailwindcss were chosen due to time constraints for submission
- The provided screenshot was a sample of the UI at a standard "desktop" screensize
  - UI/UX changes for mobile, tablet, and larger desktop screensizes may vary due to brand decisions and/or design system requirements
- The categories of the "Your Resurces" section should be dynamic and comes from some async source
- The resources of the "Your Resurces" section should be dynamic and comes from some async source
- The above data would be tailored to the current active user where applicable
  - Possibly requiring user authentication and any state management that would go into that
- Various fonts, icons, and colors would be properly supplied during a real project.
  - "Best guess" or close approximations we used during this submission
- Various edge-cases and testing would be implemented before taking a project like this to production
  - Sample unit tests outlined (`src/sanity.test.ts`)
    - Only outlines a sanity unit test. Actual unit testing would likely be much more complex and/or use other testing libraries
  - Integration and E2E testing sample not supplied but would likely be needed before going to production
- Additional team/org code quality checks would be performed before taking a project like this to production
  - Sample CI/CD steps outlined (`.github/workflows/ci.yml`)
- Additional logging, security checks, and performance monitory would be performed before taking a project like this to production
- Additional design & accessibility checks would be performed before taking a project like this to production

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Vite]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white
[Vite-url]: https://vite.dev/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Typescript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[TailwindCSS]: https://img.shields.io/badge/TailwindCSS-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38B2AC
[TailwindCSS-url]: https://tailwindcss.com/
