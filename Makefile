install:
	npm install
start:
	npx run babel-node -- src/bin/gen-diff.js
build:
	rm -rf dist
	npm run build
publish:
	npm publish
lint:
	npx eslint .
test:
	npm test
test-coverage:
	npm test -- --coverage
