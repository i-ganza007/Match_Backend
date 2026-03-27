import * as cookie from 'cookie';

export function extractTokenFromSocket(client: any): string | null {
  // 1. Try handshake auth
  let authToken =
    client.handshake.auth?.user_token ||
    client.handshake.auth?.token ||
    client.handshake.auth?.jwt;
  if (typeof authToken === 'string' && authToken.length > 0) {
    return authToken;
  }

  // 2. Try query params
  authToken = client.handshake.query?.user_token || client.handshake.query?.token;
  if (typeof authToken === 'string' && authToken.length > 0) {
    return authToken;
  }

  // 3. Try headers (authorization, user_token, token)
  const headers = client.handshake.headers || {};
  // Authorization header (Bearer ...)
  if (typeof headers.authorization === 'string' && headers.authorization.length > 0) {
    return headers.authorization.replace(/^Bearer\s+/i, '');
  }
  // user_token or token header (case-insensitive)
  for (const key of Object.keys(headers)) {
    if (key.toLowerCase() === 'user_token' || key.toLowerCase() === 'token') {
      const val = headers[key];
      if (typeof val === 'string' && val.length > 0) {
        return val;
      }
    }
  }

  // 4. Try cookies
  const cookieHeader = headers.cookie;
  if (cookieHeader) {
    const cookies = cookie.parse(cookieHeader);
    if (cookies['user_token']) return cookies['user_token'];
  }

  return null;
}
