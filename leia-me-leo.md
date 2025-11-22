Etapas para upar na vps

1- logue no tobaXterm

2- Zip o projeto com ".zip" (sem a node_modules)

3- Remova os arquivos da pasta /root/neonhost (menos a node_modules)

4- upe o zip na pasta /root/neonhost

5- execute "unzip <nomedozip>.zip"

6- execute "npm i"

7- execute "npm run build"

8- execute "pm2 restart 0"