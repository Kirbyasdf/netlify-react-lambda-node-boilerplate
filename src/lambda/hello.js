// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

exports.handler = async (event, context) => {

	console.log("HELLO NETLIFY FUNCTION HIT")
	try{

	
		return {
			statusCode: 200,
			body: JSON.stringify({ message: "Goodbye Cruel World", success: true }),	
		} 
	}
		catch (err) {
		console.log(err)
		return { statusCode: 500, ERROR: err.toString() };
	}
}
