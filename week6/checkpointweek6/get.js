const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: "Checkpoint6JoniDynamoDB",
};

async function listReviews() {
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
    const data = await listReviews();
    return { body: JSON(data.Items) };
  } catch (err) {
    console.log("Jotain meni vikaan", err);
    return { error: err };
  }
};
