const Users = require('../../../models').Users;
const File = require('../../../models').File;
const Area = require('../../../models').Area;
const Position = require('../../../models').Position;


const postUsersController = async (name, lastName, email, birthDate, address, CompanyId, image, dni, tel, role,  PositionId, AreaId, dateOfAdmission, cuil, cbu) => {
    let newUser = await Users.create({
        name,
        lastName,
        email,
        birthDate,
        address,
        image,
        dni,
        tel,
        role,
        CompanyId,
    })

    // await newUser.setCompany(CompanyId) 
    const idNewUser = newUser.id;
    
    const e = await File.create({
        dateOfAdmission,
        cuil,
        cbu,
        PositionId ,
        AreaId,
        UserId : idNewUser
    })

    return {message: e}
    
}


  


module.exports = postUsersController;