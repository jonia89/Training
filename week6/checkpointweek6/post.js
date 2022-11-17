const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
const Filter = require("bad-words");
const filter = new Filter();

async function postReview(movie) {
  try {
    await docClient
      .put({
        TableName: "Checkpoint6JoniDynamoDB",

        Item: movie,
      })
      .promise();
  } catch (err) {
    console.log("Something went wrong", err);
    return err;
  }
}

exports.handler = async (event) => {
  console.log("Debug event", event);
  const movie = filter.clean(event.body);
  const review = JSON.parse(movie);
  if ("movieTitle" in review && "review" in review)
    try {
      await postReview(movieReview);
      return { body: "Successfully posted review!" };
    } catch (err) {
      console.log("Something went wrong", err);
      return { error: err };
    }
  else {
    throw Error(500);
  }
};
