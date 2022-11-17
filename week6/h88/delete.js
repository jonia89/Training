const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: "jonirecipe",

  Key: {
    id: 7,
  },
};

async function deleteRecipe() {
  try {
    await docClient.delete(params).promise();
  } catch (err) {
    console.log("Jotain meni vikaan", err);
    return err;
  }
}

exports.handler = async (event) => {
  console.log("Debug event", event);
  try {
    await deleteRecipe();
    return { body: "Successfully deleted recipe!" };
  } catch (err) {
    console.log("Jotain meni vikaan", err);
    return { error: err };
  }
};
