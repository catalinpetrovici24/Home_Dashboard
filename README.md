# Home Dashboard

- Dashboard for home

- Features
	-	users can sign up, log in, log out
	-  users can do CRUD operations

-   Backend Framework
	-	Node.js with Typescript

-   Frontend
	-	React with Typescript
	
-   Database
	-	Redis
	- PostgreSQL

#### TODO

- [ ] Refactor
- [ ] backend validation - [Zod](https://www.npmjs.com/package/zod)
- [ ] backend error handling
- [ ] frontend validation - [Zod](https://www.npmjs.com/package/zod), [Yup](https://www.npmjs.com/package/yup)
- [ ] secure on local - [Https in docker](https://github.com/vishalraj82/https-in-docker), [https-localhost](https://github.com/daquinoaldo/https-localhost), [letsencrypt](https://letsencrypt.org/docs/certificates-for-localhost/)
- [ ] PWA - [PWA Vite Plugin](https://vite-pwa-org.netlify.app/)
- [ ] DOCKER dev/prod - [node](https://www.youtube.com/watch?v=gm_L69NHuHM), [react](https://www.youtube.com/watch?v=3xDAU5cvi5E), [Prod](https://www.youtube.com/watch?v=jotpVtFwYBk)
- [ ] logs - Winston/Bunyan/Morgan
- [ ] config
- [ ] Health Checks and Graceful Shutdown - (express)[https://expressjs.com/en/advanced/healthcheck-graceful-shutdown.html]


### Migrate to Next.js

- code splitting by default
- image optimization "<Image>"

#### ENV

express.env: 
	NODE_ENV=test
	PORT_SERVER=test
	HOST_SERVER=test
	HOST_NODERED=test
	HOST_CLIENT=test
	PORT_CLIENT=test
	REDIS_SERVER=test
	REDIS_PORT=test
	POSTGRE_SERVER=test
	POSTGRE_PORT=test

postgre.env:
	POSTGRES_USER=test
	POSTGRES_PASSWORD=test

redis.env
	REDIS_HOST_PASSWORD=test