const fs = require('fs');
const colors = require('colors/safe')

let listarTabla = (base, limite) => {

    if (!Number(base)) {
        reject('el valor introducido no es un número');
        return
    }

    for (let i = 1; i <= limite; i++) {
        console.log(colors.green(`${base} x ${i} = ${base * i}`));
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('el valor introducido no es un número'.red)
            return
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tablaDel${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tablaDel${base}`)
        })
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}