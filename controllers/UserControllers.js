const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const models = require('../models');

exports.singin = async(req,res,next)=>{
    try{
        const user = await models.user.findOne({where: {email: req.body.email}});
        if(user){
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if(passwordIsValid){
                const token = jwt.sign({
                    id: user.id,
                    name: user.username,
                    email: user.email,
                    rol: user.rol
                },'config.secret',{
                    expiresIn: 86400,
                }
                );
                res.status(200).send({
                    auth: true,
                    accessToken: token,
                    // user: user
                })

            }else {           
                //error en la autenticación
                res.status(401).json({
                    error: 'Error en el ususario o contraseña'
                })
            }
        }else{
            //error en la autenticación
            res.status(404).json({
                error: 'Error en el ususario o contraseña'
            })
        }
    }catch(error){
        res.status(500).send({
            message: 'Error ->' + error
        })
        next(error);
    }
};

exports.register = async(req,res,next)=>{
    try{


    }catch(error){

    }
};

exports.listar = async(req,res,next)=>{
    try{


    }catch(error){

    }
};