<!-- 
1.Create Dockefile -> it's configuration file
1.1 - FROM X => take the base image as X

1.2 - COPY index1.js index2.js -> take the copy of index1.js source code copy from local pc and copy this to docker(inside the container) in index2.js (we can give path also)



All this command are layers and internally docker cache the layers
 -->


 <!-- 
 
 After all config build the image 
 
 docker build -t my-appname .
  -->