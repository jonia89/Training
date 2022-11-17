const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: "jonirecipe",
  /* Item properties will depend on your application concerns */
  Item: {
    favorite: true,
  },
};

async function toggleFavorite(id) {
  try {
    await docClient.put(params).promise();
  } catch (err) {
    return err;
  }
}

exports.handler = async (event) => {
  console.log("Debug event", event);
  try {
    await toggleFavorite(id);
    return { body: "Successfully toggled favorite recipe!" };
  } catch (err) {
    return { error: err };
  }
};
