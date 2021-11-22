# Challenge 2

[Deploy](https://tour-radar-challenge-2.vercel.app/)

## How to run locally

1. Install the dependencies at the root directory of the monorepo with yarn
2. Create a .env file based on the .env.example file inside the challenge-2 directory
3. Run **yarn start:challenge-2**
4. Enjoy ^^

## Challenge Description

### Scenario

Your task is to implement a stripped down version of a search result page of TourRadar in ReactJS using Typescript.

The initial data is organised as a JSON object and can be fetched from <https://jsonblob.com/api/jsonBlob/892812282795671552> (the API is CORS enabled). It contains 250 fake tour items (no real names, tour images and map images), and each item represents a tour from the database. The data structure contains all required information.

The page should consist out of the following items

- List of tour cards
- Sort by Dropdown with the following items "Total price: Lowest first", "Total price: Highest first", "Duration: Shortest first" and "Duration: Longest first"
- Follow the screenshot from below as close as possible

### Instructions

The layout should be fully responsive, in other word it should be usable on mobile as well. The size of the page and its resources is important, also some page speed relevant techniques like lazy loading of images are welcomed.

Consider the following hints when implementing the task:

- Prefer pure components that are easy to reuse
- For styling elements you can use CSS or CSS-in-JS, as you like
- You can use additional modules/libraries, but be cautious with the resulting bundle size
- Lazy loading of images
