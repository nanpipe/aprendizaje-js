const usuarios = [
    { nombre: "Juan", edad: 25, activo: true },
    { nombre: "María", edad: 17, activo: false },
    { nombre: "Carlos", edad: 30, activo: true },
    { nombre: "Sofia", edad: 16, activo: true }
];

//V1
const validarUsuarios = (array, callback) => {
    const usuariosAMostrar = callback(array)

    if (usuariosAMostrar) {
        usuariosAMostrar.forEach((usuario) => {
            console.log(`nombre: ${usuario.nombre}, estado: ${usuario.activo ? 'Válido' : 'Invalido'}`)
        })
    }
    else console.log(`No hay usuarios para mostrar`)

}

const validarUsuariosArray = (array, callback) => {
    return callback(array).map((usuario) => ({
        nombre: usuario.nombre,
        estado: usuario.activo ? 'Válido' : 'Inválido'
    }));
};



const mayorA18 = (usuarios) => {
    return usuarios.filter((usuario) => usuario.edad > 18)
}

const usuariosActivos = (usuarios) => {
    return usuarios.filter((usuario) => usuario.activo)
}
const nombreMas4Caracteres = (usuarios) => {
    return usuarios.filter((usuario) => usuario.nombre.length > 4)
}


console.log(`Usuarios Mayores a 18`)
validarUsuarios(usuarios, mayorA18)
console.log(`Usuarios Activos`)
validarUsuarios(usuarios, usuariosActivos)
console.log(`Usuarios con nombres mayores a 4 caracteres`)
validarUsuarios(usuarios, nombreMas4Caracteres)