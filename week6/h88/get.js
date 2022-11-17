const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: "jonirecipe",
  Key: {
    id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
  },
};

async function getRecipe() {
  try {
    const data = await docClient.get(params).promise();
    return data;
  } catch (err) {
    console.log("Jotain meni vikaan", err);
    return err;
  }
}

exports.handler = async (event, context) => {
  console.log("Debug event", event, context);
  try {
    const data = await getRecipe();
    return { body: JSON.stringify(data.Item) };
  } catch (err) {
    console.log("Jotain meni vikaan", err);
    return { error: err };
  }
};
console.log(params);
