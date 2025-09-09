const greet = (message, cb) => {
    console.log(message);
    cb();
}

const sayBye = () => {
    console.log("oke bye");
}

greet("hallo", sayBye);