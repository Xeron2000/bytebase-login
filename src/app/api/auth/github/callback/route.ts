import { NextResponse } from 'next/server';


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'No code provided' }, { status: 400 });
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      return NextResponse.json({ error: tokenData.error_description }, { status: 400 });
    }

    const accessToken = tokenData.access_token;

    // Use access token to get user info
    const userResponse = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });

    const userData = await userResponse.json();

    // For now, we'll just return the user data.
    // In a real app, you'd create a session, set a cookie, etc.
    // And then redirect to a dashboard page.
    
    // Redirecting back to the home page with user data (for demo purposes)
    const url = new URL('/', request.url);
    url.searchParams.set('login_success', 'true');
    url.searchParams.set('name', userData.name || userData.login);
    url.searchParams.set('avatar_url', userData.avatar_url);

    return NextResponse.redirect(url);

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}