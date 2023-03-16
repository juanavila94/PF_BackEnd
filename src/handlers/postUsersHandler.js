
const postUsersController = require('../controllers/postUsersController');



const postUsersHandler = async (req, res) => {

    const { name, lastName, email, birthDate, address, image, dni, tel, role, CompanyId} = req.body;

    try {
        const newUser = await postUsersController(name, lastName, email, birthDate, address, image, dni, tel, role, CompanyId)
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = postUsersHandler;