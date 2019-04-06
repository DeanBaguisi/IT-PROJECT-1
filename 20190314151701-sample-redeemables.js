'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert('redeemables', [
         
{"rdm_id":"1",
 "rdm_name":"Rice",
 "rdm_description":"1 kg Sinandomeng Rice",
 "rdm_category":"rice",
 "rdm_photo":null,
 "unit_price":"50.00",
 "point_cost":"12",
 "rdm_status":"available",
 "createdAt":"2019-03-14 00:00:01",
 "updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"2","rdm_name":"555 Fried Sardines","rdm_description":"Brand: 555\r\nType: Fried Sardines\r\nFlavors: with Tausi, Hot andSpicy\r\nPackage: Canned\r\nWeight: 155g","rdm_category":"canned goods","rdm_photo":null,"unit_price":"25.00","point_cost":"7","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"3","rdm_name":"Argentina Sausage","rdm_description":"Brand: Argentina\r\nType: Fiesta Sausage\r\nFlavor: Original\r\nWeight: 175g","rdm_category":"canned goods","rdm_photo":null,"unit_price":"25.00","point_cost":"7","rdm_status":"unavailable","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"4","rdm_name":"Century Tuna Flakes in Oil","rdm_description":"Brand: Century Tuna\r\nVariety: Flakes in Oil\r\nWeight: 155g\r\nPackage: Canned","rdm_category":"canned goods","rdm_photo":null,"unit_price":"40.00","point_cost":"10","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"5","rdm_name":"Century Corned Tuna","rdm_description":"Brand: Century Tuna\r\nVariety: Corned Tuna\r\nWeight: 85g\r\nPackage: Canned","rdm_category":"canned goods","rdm_photo":null,"unit_price":"40.00","point_cost":"10","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"6","rdm_name":"555 Sardines in Tomato Sauce","rdm_description":"Brand: 555\r\nType: Sardines\r\nVariety: Tomato Sauce\r\nPackage: Canned\r\nWeight: 155g","rdm_category":"canned goods","rdm_photo":null,"unit_price":"20.00","point_cost":"7","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"7","rdm_name":"555 Tuna Afritada","rdm_description":"Brand: 555\r\nType: Tuna\r\nVariety: Afritada\r\nPackage: Canned\r\nWeight: 110g","rdm_category":"canned goods","rdm_photo":null,"unit_price":"20.00","point_cost":"7","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"8","rdm_name":"Argentina Beef Loaf","rdm_description":"Brand: Argentina\r\nType: Beef Loaf\r\nPackage: Canned\r\nWeight: 100g","rdm_category":"canned goods","rdm_photo":null,"unit_price":"40.00","point_cost":"10","rdm_status":"unavailable","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"9","rdm_name":"Crayons","rdm_description":"Brand: Crayola\r\nType: Crayons\r\nPackage: Carton\r\nSize: Regular Size\r\nNumber of Crayons: 8pcs","rdm_category":"office supplies","rdm_photo":null,"unit_price":"30.00","point_cost":"8","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"10","rdm_name":"Pencil","rdm_description":"Brand: Mongol\r\nType: Pencil\r\nNumber: 1,2, 3\r\nSize: Regular\r\nQuatity: 3Pcs.\/Pack","rdm_category":"office supplies","rdm_photo":null,"unit_price":"30.00","point_cost":"10","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"11","rdm_name":"Diamond Bond Paper","rdm_description":"Brand: Diamond\r\nSize : 8.5 x 13\r\nSubstance 16\r\n500 sheets","rdm_category":"office supplies","rdm_photo":null,"unit_price":"250.00","point_cost":"50","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"12","rdm_name":"Pilot Fine Permanent Marker","rdm_description":"Brand : Pilot\r\nColor : Red, Black, Blue","rdm_category":"office supplies","rdm_photo":null,"unit_price":"100.00","point_cost":"20","rdm_status":"unavailable","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"13","rdm_name":"555 Beef Loaf","rdm_description":"Brand: 555\nType: Beef Loaf\nPackage: Canned\nWeight: 150g","rdm_category":"canned goods","rdm_photo":"","unit_price":"20.00","point_cost":"5","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"14","rdm_name":"Argentina Beef Loaf","rdm_description":"Brand: Argentina\nType: Beef Loaf\nPackage : Canned\nWeight: 100g","rdm_category":"canned goods","rdm_photo":"","unit_price":"25.00","point_cost":"4","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"15","rdm_name":"Argentina Meat Loaf","rdm_description":"Brand: Argentina\nType: Meat Loaf\nPackage: Canned\nWeight: 100g","rdm_category":"canned goods","rdm_photo":"","unit_price":"25.00","point_cost":"4","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"16","rdm_name":"Purefoods Star Corned Beef","rdm_description":"Brand: Purefoods\nType: Corned Beef\nVariety: Star Corned Beef\nPackage: Canned\nWeight: 150g","rdm_category":"canned goods","rdm_photo":"","unit_price":"40.00","point_cost":"7","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"17","rdm_name":"Argentina Meat Loaf Tocino","rdm_description":"Brand: Argentina\nType: Meat Loaf\nVariety: Tocino Style\nPackage: Canned\nWeight: 170g","rdm_category":"canned goods","rdm_photo":"","unit_price":"30.00","point_cost":"5","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"18","rdm_name":"555 Tuna Adobo","rdm_description":"Brand: 555\nType: Tuna\nVariety: Adobo\nPackage: Canned\nWeight: 110g","rdm_category":"canned goods","rdm_photo":"","unit_price":"25.00","point_cost":"4","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"19","rdm_name":"555 Tuna Afritada","rdm_description":"Brand: 555\nType: Tuna\nVariety: Afritada\nPackage: Canned\nWeight: 110g","rdm_category":"canned goods","rdm_photo":"","unit_price":"25.00","point_cost":"4","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"20","rdm_name":"555 Tuna Bicol Express","rdm_description":"Brand: 555\nType: Tuna\nVariety: Bicol express\nPackage: Canned\nWeight: 155g","rdm_category":"canned goods","rdm_photo":"","unit_price":"30.00","point_cost":"5","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"21","rdm_name":"555 Tuna Caldereta","rdm_description":"Brand: 555\nType: Tuna\nVariety: Caldereta\nPackage: Canned\nWeight: \/110g","rdm_category":"canned goods","rdm_photo":"","unit_price":"25.00","point_cost":"4","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"22","rdm_name":"555 Tuna Lechon Paksiw","rdm_description":"Brand: 555\nType: Tuna\nVariety: Lechon paksiw\nPackage: Canned\nWeight: 155g","rdm_category":"canned goods","rdm_photo":"","unit_price":"30.00","point_cost":"5","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"23","rdm_name":"Century Corned Tuna","rdm_description":"Brand: Century Tuna\nVariety: Corned Tuna\nWeight: 85g\nPackage: Canned","rdm_category":"canned goods","rdm_photo":"","unit_price":"35.00","point_cost":"6","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"24","rdm_name":"Wow Ulam Adobo","rdm_description":"Brand: Wow Ulam\nType: Chopped Luncheon Meat And Sausages\nFlavors: Adobo\nPackage: Canned\nWeight: 155g","rdm_category":"canned goods","rdm_photo":"","unit_price":"25.00","point_cost":"4","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"25","rdm_name":"Quick Chow Pancit Canton","rdm_description":"Brand: Quickchow\nType: Pancit Canton and Instant Noodles\nFlavor: Toyomansi\nPackage: Pouch\nPackage: 55g","rdm_category":"canned goods","rdm_photo":"","unit_price":"10.00","point_cost":"2","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"26","rdm_name":"Argentina Liver Spread","rdm_description":"Brand: Argentina\nType: Liver Spread\nFlavor: Original\nPackage: Canned\nWeight: 85g","rdm_category":"canned goods","rdm_photo":"","unit_price":"35.00","point_cost":"6","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"27","rdm_name":"Argentina Meat Loaf Embutido","rdm_description":"Brand: Argentina\nType: Meat Loaf\nVariety: Embutido Style\nPackage: Canned\nWeight: 170g","rdm_category":"canned goods","rdm_photo":"","unit_price":"35.00","point_cost":"6","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"28","rdm_name":"Century Bangus Sisig","rdm_description":"Brand: Century Tuna\nType: Bangus Sisig\nPackage: Canned\nWeight: 150g","rdm_category":"canned goods","rdm_photo":"","unit_price":"45.00","point_cost":"9","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"29","rdm_name":"Century Tuna Adobo","rdm_description":"Brand: Century Tuna\nVariety: Adobo\nWeight: 155g\nPackage: Canned","rdm_category":"canned goods","rdm_photo":"","unit_price":"40.00","point_cost":"7","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"30","rdm_name":"Century Tuna Afritada","rdm_description":"Brand: Century Tuna\nVariety: Afritada\nWeight: 155g\nPackage: Canned","rdm_category":"canned goods","rdm_photo":"","unit_price":"40.00","point_cost":"7","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"31","rdm_name":"Century Tuna Caldereta","rdm_description":"Brand: Century Tuna\nVariety: Caldereta\nWeight: 155g\nPackage: Canned","rdm_category":"canned goods","rdm_photo":"","unit_price":"40.00","point_cost":"7","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"32","rdm_name":"Century Tuna Mechado","rdm_description":"Brand: Century Tuna\nVariety: Mechado\nWeight: 155g\nPackage: Canned","rdm_category":"canned goods","rdm_photo":"","unit_price":"45.00","point_cost":"7","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"33","rdm_name":"Lucky 7 Carne Norte","rdm_description":"Brand: Lucky 7\nType: Carne Norte\nVariety\/Flavor: Regular\nPackage: Canned\nWeight: 150g","rdm_category":"canned goods","rdm_photo":"","unit_price":"25.00","point_cost":"5","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"34","rdm_name":"Mountain Dew Soda","rdm_description":"Mountain Dew\nType: Regular Soda\nPackage: Can\nWeight: 330m","rdm_category":"canned goods","rdm_photo":"","unit_price":"35.00","point_cost":"6","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"35","rdm_name":"Purefoods Chinese-style Luncheon Meat","rdm_description":"Brand: Purefoods\nVariety: Chinese Style Luncheon Meat\nWeight: 100g\nPackage: Canned","rdm_category":"canned goods","rdm_photo":"","unit_price":"35.00","point_cost":"6","rdm_status":"available","createdAt":"2019-03-14 00:00:01","updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"36",
 "rdm_name":"Brgy. Business Clearance",
 "rdm_description":"The barangay business clearance is obtained from the barangay where the intended business or activity is located or conducted",
 "rdm_category":"services",
 "rdm_photo":null,
 "unit_price":"50.00",
 "point_cost":"12",
 "rdm_status":"available",
 "createdAt":"2019-03-14 00:00:01",
 "updatedAt":"2019-03-14 00:00:02"},

{"rdm_id":"37",
 "rdm_name":"Barangay Clearance",
 "rdm_description":"Barangay Clearance are issued by the barangay depending on the purpose of the client",
 "rdm_category":"services",
 "rdm_photo":null,
 "unit_price":"30",
 "point_cost":"8",
 "rdm_status":"available",
 "createdAt":"2019-03-14 00:00:01",
 "updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"38",
 "rdm_name":"Barangay Certification",
 "rdm_description":"Barangay Certification are issued by the barangay depending on the purpose of the client",
 "rdm_category":"services",
 "rdm_photo":null,
 "unit_price":"30.00",
 "point_cost":"8",
 "rdm_status":"available",
 "createdAt":"2019-03-14 00:00:01",
 "updatedAt":"2019-03-14 00:00:02"},

{"rdm_id":"39",
 "rdm_name":"Use of Barangay Properties: Use of Tables",
 "rdm_description":"The Barangay will charge reasonable fee for the use of the Barangay Properties such as Tables and Chairs. A corresponding barangay ordinance is the basis -BARANGAY ORDINANCE NO.2, SERIES OF 2014\n",
 "rdm_category":"services",
 "rdm_photo":null,
 "unit_price": "10",
 "point_cost": "4",
 "rdm_status":"available",
 "createdAt":"2019-03-14 00:00:01",
 "updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"40",
 "rdm_name":"Use of Barangay Properties: Use of Chairs",
 "rdm_description":"The Barangay will charge reasonable fee for the use of the Barangay Properties such as Tables and Chairs. A corresponding barangay ordinance is the basis -BARANGAY ORDINANCE NO.2, SERIES OF 2014\n",
 "rdm_category":"services",
 "rdm_photo":null,
 "unit_price": "5",
 "point_cost": "2",
 "rdm_status":"available",
 "createdAt":"2019-03-14 00:00:01",
 "updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"41",
 "rdm_name":"Environmental Services",
 "rdm_description":"Promotion of general hygiene and sanitation, solid waste collection or grabage collection and cleanliness and beautification",
 "rdm_category":"services",
 "rdm_photo":null,
 "unit_price":"150",
 "point_cost":"32",
 "rdm_status":"available",
 "createdAt":"2019-03-14 00:00:01",
 "updatedAt":"2019-03-14 00:00:02"},
         
{"rdm_id":"42",
 "rdm_name":"Katarungang Pambarangay",
 "rdm_description":"Promotion of equity, indisrimination and justice",
 "rdm_category":"services",
 "rdm_photo":null,
 "unit_price":"150",
 "point_cost":"32",
 "rdm_status":"available",
 "createdAt":"2019-03-14 00:00:01",
 "updatedAt":"2019-03-14 00:00:02"}
         
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
