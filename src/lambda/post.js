export async function handler(event, context) {
  const reqBody = JSON.parse(event.body).input;

  const resData = "hello " + reqBody;

  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ data: resData }),
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
}
