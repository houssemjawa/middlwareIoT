# middelwareIoT
## Description
This Project is an application for a Middlware IoT
## Requires
* **Node Package Manager** **NPM**
* **Node.js**
* **node-red**
* **MongoDB**
You can install node-red with npm by using this command
```
$ npm install -g node-red
```
* **node-red-node-mongodb** You can install this node manualy using palette manager : Manage palette -> install
* An MQTT brocker : **Mosquitto**
## Used Nodes
* **TCP** to connect to a sensor and get value ( If you don't have an access to a sensor you can replace this node with a **function** that returnes a random value)
* **mongo-db out** configure correctly connection with your mongodb server
* **mqtt out** configure correctly connection with your mqtt brocker
* **debug** (optional)
## Install and run
You can clone or download this project and run it with this commands :
```
$ cd middlwareIoT
$ node index.js
```
