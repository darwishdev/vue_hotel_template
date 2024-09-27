deploy:
	npm run build;\
	rm -rf rha-san.yalabina.com;\
	mv dist rha-san.yalabina.com;\
	scp -r rha-san.yalabina.com abc:src/apps/clients
