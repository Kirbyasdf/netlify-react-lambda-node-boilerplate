// this uses the callback syntax, however, we encourage you to try the async/await syntax shown in async-dadjoke.js

exports.handler = async event => {
  console.log('queryStringParameters', event.queryStringParameters)
  return {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Hello, World!' })
  }
}
