const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: "jonirecipe",
};

async function listItems() {
  try {
    const data = await docClient.scan(params).promise();
    return data;
  } catch (err) {
    console.log("Jotain meni vikaan", err);
    return err;
  }
}

exports.handler = async (event, context) => {
  console.log("Debug event", event, context);
  try {
    const data = await listItems();
    return { body: JSON.stringify(data.Items) };
  } catch (err) {
    console.log("Jotain meni vikaan", err);
    return { error: err };
  }
};
