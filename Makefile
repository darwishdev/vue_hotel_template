deploy:
	npm run build;\
	rm -rf rhss.rhactushotel.com;\
	mv dist rhss.rhactushotel.com;\
	scp -r rhss.rhactushotel.com abc:src/apps/clients
