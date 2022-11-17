const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

async function addRecipe(recipe) {
  try {
    await docClient
      .put({
        TableName: "jonirecipe",
        /* Item properties will depend on your application concerns */
        Item: recipe,
      })
      .promise();
  } catch (err) {
    console.log("Jotain meni vikaan", err);
    return err;
  }
}

exports.handler = async (event) => {
  console.log("Debug event", event);
  const recipe = JSON.parse(event.body);
  recipe.id = new Date().getTime();
  try {
    await addRecipe(recipe);
    return { body: "Successfully created item!" };
  } catch (err) {
    console.log("Jotain meni vikaan", err);
    return { error: err };
  }
};
