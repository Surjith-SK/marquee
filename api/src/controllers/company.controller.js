/**
 * File: src/controllers/company.controller.js
 * Description: Controller to handle company api's.
 * Date: 24/Jul/2022
 * Author: Surjith S K
 */
const axios = require('axios');

const db = require("../models");
const Company = db.company;
const Op = db.Sequelize.Op;


// ==> Receives the response from zauba api and transforms the result into json format:
exports.searchCompany = async (req, res) => {
    const { search } = req.query;
    const body = 'search=' + search + '&filter=company';
    var config = {
        method: 'post',
        url: 'https://www.zaubacorp.com/custom-search',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: body
    };
    axios(config)
        .then((response) => {
            // console.log(response)
            let data = response.data;
            let clean_data = data.replace(/\n/g, "").replace(/\t/g, "").replace(/\\/g, "").replaceAll('<div class="show" align="left" id="', "");;
            let companiesOnly = clean_data.split("company/").map((item) => item.replace(/>.*/, "")).slice(1);
            let companies = companiesOnly.map((item) => {
                return { 'company_name': item.split('/')[0].replace("\"","").split('-').join(' '), 'company_id': item.split('/')[1].replace("\"","") }
            })
            res.status(200).send({
                data: companies,
                error: false
            });
        })
        .catch((error) => {
            res.status(500).send({
                data: 'Something went wrong',
                error: true
            });
        });
};

// ==> Save the company to local db:
exports.addCompany = async (req, res) => {
    const { company_name, company_id } = req.body;
    const [company] = await Company.upsert({
        company_id: company_id,
        company_name: company_name
      });
    res.status(201).send({
        error: false,
        data: { company_id, company_name, isNewRecord: +company.dataValues.createdAt == +company.dataValues.updatedAt },
    });
};

// ==> list all companies from local db
exports.listAllCompany = async (req, res) => {
    let response = await Company.findAndCountAll();
    res.status(200).send({
        data: response.rows,
        error: false
    });
};


const getPagination = (page, size) => {
    const limit = size ? +size : 5;
    const offset = page ? page * limit : 0;
    return { limit, offset };
};

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: companies } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
    return { totalItems, companies, totalPages, currentPage, error: false };
};
//TODO Frontend - backend works perfectly
exports.listPaginationCompany = async (req, res) => {
    const { page, size, company_name } = req.query;
    console.log('req',req.query)
    var condition = company_name ? { company_name: { [Op.like]: `%${company_name.toUpperCase()}%` } } : null;
    console.log(condition);
    const { limit, offset } = getPagination(page, size);
    Company.findAndCountAll({ where: condition, limit, offset })
        .then(data => {
            const response = getPagingData(data, page, limit);
            console.log(response);
            res.send(response);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving companies."
            });
        });
}
