
# MetMuseum Gallery
A simple Angular application which showcases artefacts from the Metropolitan Museum of Art.
This is powered by The Metropolitan Museum of Art Collection API.

The project uses Angular 15 & makes use of Standalone Components. This choice was purely based on preference as I just wanted to try it out.

## Demo
A demo is available at: [metmuseum.kanishka.io](https://metmuseum.kanishka.io)

## Table of Contents:
- [Setup](#setup)
- [Configuration](#configuration)
- [CI/CD](#cicd)

## Setup
- Download or clone the repository
- Run `npm install` or `yarn install`
- Run `ng serve` & the app will be available at http://localhost:4200/

## Configuration
There are several configuration options through the env files. If running locally, change `src\environments\environment.ts`
-  departmentsSliceLimit: Controls the number of collections/departments fetched.
-  objectsSliceLimit: Controls the number of object IDs used to fetch artefacts. Limits the number of artworks shown per collection.
-  searchSliceLimit: Controls the number of object IDs used to fetch search results.
-  searchDebounceTime: Debounce time on search box value changes. 

## CI/CD
Deployed on Cloudflare Pages & set to be automatically deployed on changes to `main`


