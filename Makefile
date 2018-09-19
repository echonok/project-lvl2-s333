install:
	npm install
start:
	npx run babel-node -- src/bin/gen-diff.js
publish:
	npm publish
test:
	npm test
lint:
	npx eslint .
build:
	rm -rf dist
	npm run build
test-coverage:
	npm test -- --coverage
