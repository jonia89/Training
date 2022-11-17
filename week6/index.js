const moment = require("moment");
exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: `Today is: ${moment().format("MMM Do YY")}`,
  };
  return response;
};
