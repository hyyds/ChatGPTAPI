## Usage

Local Start
```shell
npm i

npm run start
```

Cloud Server

```shell
cd docker

IF
// Mac(Intel) and window
docker image build ./ -t chatgpt:latest

Else
// Mac(M1)
docker image build --platform linux/amd64 ./ -t chatgpt:latest

// Export Docker Images
docker save -0 chatgpt:latest

// Images Upload Cloud Service
scp -r chatgpt.tar root@xxx:~/

// Import Docker Images
docker load < chatgpt.tar

// Start ChaGPTAPI Imagrs
cd docker && docker compose up -d

```

then you can browse on  [http://127.0.0.1:8080/doc.html](http://jd-bus.icu/doc.html)

![img](/img.png)
