
function handler(event) {
  const request = event.request
  const host = event.request.headers.host.value

  if (host === 'www.example.com') {
    const response = {
      statusCode: 302,
      statusDescription: 'Found',
      headers: {
        location: { value: 'https://example.com' + event.request.uri }
      }
    }

    return response
  }

  if (request.uri.startsWith('/api')) {
    request.uri = request.uri.substring(4)
    return request
  }

  return request
}
