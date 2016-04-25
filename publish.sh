rm -rf ../tyler-markvluwer.github.io/*
cp -r * ../tyler-markvluwer.github.io/
cd ../tyler-markvluwer.github.io/
git add .
git add --all
git commit -m "auto update"
git push origin master
cd -