# Contributing

- Check project and component development status on the [Projects pages](https://github.com/stasson/vue-mdc-adapter/projects)

- To contribute, follow github [fork & pull request](https://guides.github.com/activities/forking/) workflow 

- please check Contributing Guidelines on the project the wiki 
@ https://github.com/stasson/vue-mdc-adapter/wiki/Contributing


## Development Setup

> probably better to align on node 6.11 & npm 3.10.10.
```shell
nvm install 6.11.0
nvm alias default 6.11.0
```

> get the repo and start the development server
```shell
git clone https://github.com/stasson/vue-mdc-adapter.git
cd vue-mdc-adapter
npm install
npm run dev
```

> before submitting for review, verify your code is working and the production build is fine
```shell
# verify production build

# ./dist build ( for npm umd distribution and unpkg cdn disribution)
npm run build-dist

# ./docs build (for preview site)
npm run build-docs

# or build all with 
npm run build
```

