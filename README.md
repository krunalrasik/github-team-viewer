#Github Team Viewer 

Github Team Viewer is an handy application built with Angular.js that helps
you find developers from an organization. In order to use it just search for 
company in the search bar and you will get a list of developers. 

Then, click on any of the image to get detailed information such as email,
website and location. Also, you can check their projects by click on check repos 
button.


## Installation

```sh
git clone git@github.com:vinitkumar/github-team-viewer.git
cd github-team-viewer
npm install
node server.js
```

The app will be running on [http://localhost:5000](http://localhost:5000)

## Background

The app is built with Angular.js and Gitub API. You should take care that github 
doesn't allow more than 60 requests per hour per IP. Since there is not 
oauth implemented in the system as of yet. 








