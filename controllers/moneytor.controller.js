const db = require("../models");
const Persons = db.persons;
const Addresses = db.addresses;
const Phones = db.phones;
const Emails = db.emails;

const Op = db.Sequelize.Op;
const axios = require('axios');
const { addresses } = require("../models");

exports.create = async () => {
    var resultData =[];
    for(let j=0;j < 100;j++){
        var config = {
            method: 'get',
            url: 'https://randomuser.me/api/',
            headers: { }
        };
        
        var response = await axios(config)
        var data= response.data.results



        for(let i=0; i < data.length;i++){
            let d= data[i]
            var searchByUUID =await Persons.findOrCreate({where: 
                {  
                    uuid: d.login.uuid
                }, defaults: {
                    uuid: d.login.uuid ,
                    first_name: d.name.first,
                    last_name: d.name.last,
                    dob:d.dob.date
                }})

            if(searchByUUID[1] === true) {    
                var newPerson = searchByUUID[0]
                var resultDataItems ={};
                if(newPerson.person_id > 0){
                    //Address
                    var newAddress = await Addresses.create({
                        street_number:d.location.street.name,
                        city:d.location.city,
                        person_id:newPerson.person_id
                    });

                    //email
                    var newEmail = await Emails.create({
                        email:d.email,
                        person_id:newPerson.person_id
                    });

                    //phone
                    var newPhone = await Phones.create({
                        phone_no:d.phone,
                        person_id:newPerson.person_id
                    });

                    var newCell = await Phones.create({
                        phone_no:d.cell,
                        person_id:newPerson.person_id
                    });

                    resultDataItems={
                    person:{
                            uuid: d.login.uuid ,
                            first_name: d.name.first,
                            last_name: d.name.last,
                            dob:d.dob.date
                        },
                        address:{
                            street_number:d.location.street.name,
                            city:d.location.city,
                            person_id:newPerson.person_id   
                        },
                        email:{
                            email:d.email,
                            person_id:newPerson.person_id
                        },
                        phone:{
                            phone_no:d.phone,
                            person_id:newPerson.person_id
                        },
                        cell:{
                            phone_no:d.cell,
                            person_id:newPerson.person_id
                        }
                    }
                    
                    resultData.push(resultDataItems)
                }
            }
        }
    }
    return resultData;
};