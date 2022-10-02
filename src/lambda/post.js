exports.handler = async (event)=> {
  const reqBody = JSON.parse(event.body).input;
  const resData = "hello " + reqBody;
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ data: resData }),
    };
  } catch (err) {
    console.error(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ ERROR: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
}
