export const MOCK_GET_USER_FORBIDDEN = {
  message:
    "API rate limit exceeded for 179.133.68.41. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
  documentation_url: 'https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting',
}

export const MOCK_GET_USER_NOT_FOUND = {
  message: 'Not Found',
  documentation_url: 'https://docs.github.com/rest',
  status: '404',
}
