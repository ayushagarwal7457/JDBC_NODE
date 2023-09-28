const httpStatus = require('http-status');
const service = require('../service');

const login = async (req, res, next) => {
    try {
        const {id = null, password = null } = req.query;
        const status = await service.loginDetails(id, password);
        console.log('Status', status);
        if (status) res.status(200).send({ message: 'Login Details Match' });
        else res.status(200).send({ message: 'Login Details Not Match'});
    } catch (err) {
        console.log('Error in Login Controllers', err);
    }
}

const dashBoardDetails = async (req, res, next) => {
    try {
        const { employeeId = null } = req.query;
        const status = await service.dashBoardDetails(employeeId);
        console.log('Status', status);
        if (status) res.status(200).send({ message: 'Login Details Match' });
        else res.status(200).send({ message: 'Login Details Not Match'});
    } catch (err) {
        console.log('Error in Login Controllers', err);
    }
}

const SubmitForm = async (req, res, next) => {
    try {
        console.log(req.body);

        res.status(200).send({ ...req.body });
        // else res.status(200).send({ message: 'Login Details Not Match'});
    } catch (err) {
        console.log('Error in Login Controllers', err);
    }
}

const leaveDetails = async (req, res, next) => {
    try {
        const { employeeId = null } = req.query;
        const status = await service.leaveDetails(employeeId);
        console.log('Status', status);
        if (status) res.status(200).send({ message: 'Login Details Match' });
        else res.status(200).send({ message: 'Login Details Not Match'});
    } catch (err) {
        console.log('Error in Login Controllers', err);
    }
}

module.exports = {
    login,
    dashBoardDetails,
    SubmitForm,
    leaveDetails,
}