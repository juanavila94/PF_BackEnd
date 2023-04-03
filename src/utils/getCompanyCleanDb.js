const getCompanyCleanDb = (object) => {
    return {
            id: object.id,
            name: object.name,
            cuit: object.cuit,
            industry: object.industry,
            location: object.location,
            numberEmployees: object.numberEmployees,
            tel: object.tel,
            email: object.email,
            paymentDay: object.paymentDay
        }
    };

module.exports = getCompanyCleanDb;