install:
	npm install
start:
	npm run babel-node -- src/bin/gen-diff.js
publish:
	npm publish
test:
	npm test
lint:
	npm run eslint ./
build:
	rm -rf dist
	npm run build
test-coverage:
	npm test -- --coverage