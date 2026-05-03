exports.handler = async function() {
  try {
    const res = await fetch('https://lekhoa-kts.medium.com/feed');
    const xml = await res.text();
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Access-Control-Allow-Origin': '*'
      },
      body: xml
    };
  } catch(e) {
    return { statusCode: 500, body: 'Error: ' + e.message };
  }
};
