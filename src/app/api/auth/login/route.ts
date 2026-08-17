import { NextResponse } from 'next/server';
import { findUserByUsernameOrEmail, findUserByMobile } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { usernameOrEmail, password } = await req.json();

    if (!usernameOrEmail || !password) {
      return NextResponse.json(
        { error: 'Username/Email and password are required.' },
        { status: 400 }
      );
    }

    const identifier = usernameOrEmail.trim();

    // Check by username or email first, then mobile number
    let user = findUserByUsernameOrEmail(identifier);
    if (!user) {
      user = findUserByMobile(identifier);
    }

    // Direct Login Check: If user is not found in database, inform to Sign Up first!
    if (!user) {
      return NextResponse.json(
        {
          error: `No account found for "${identifier}". Please Sign Up to create your account!`,
          needsSignup: true
        },
        { status: 404 }
      );
    }

    // Verify Password
    if (user.password !== password) {
      return NextResponse.json(
        { error: 'Incorrect password. Please try again or reset your password.' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Sign in successful!',
      user: {
        username: user.username,
        mobile: user.mobile,
        email: user.email || ''
      }
    });

  } catch (error: any) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
