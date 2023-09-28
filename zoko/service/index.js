const model = require('../model');

const loginDetails = async (id, password) => {
    const { databaseId = null, databasePassword = null } = await model.getIdPassword(id);
    if (databaseId === null || databasePassword === null) return false;
    if (id === databaseId && password === databasePassword ) return true;
    return false;
}

const dashBoardDetails = async (employeeId) => {
    const data = await model.getDashBoardDetails(employeeId);
    return data;
}
const SubmitForm = async (employeeId) => {
    const { databaseId = null, databasePassword = null } = await model.postSubmitForm(employeeId);
    // if (databaseId === null || databasePassword === null) return false;
    // if (id === databaseId && password === databasePassword ) return true;
     return false;
}

const leaveDetails = async (employeeId) => {
    const data = await model.getleaveDetails(employeeId);
    return data;
}
module.exports = {
    loginDetails,
    dashBoardDetails,
    SubmitForm,
    leaveDetails,
}
