import { NextResponse } from 'next/server';
import { findUserByMobile, findUserByUsernameOrEmail, createUser } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { mobile, username, password, email } = await req.json();

    if (!mobile || !username || !password) {
      return NextResponse.json(
        { error: 'Mobile number, username, and password are required.' },
        { status: 400 }
      );
    }

    const cleanMobile = mobile.trim();
    const cleanUsername = username.trim();

    // Check if mobile number exists
    const existingMobile = findUserByMobile(cleanMobile);
    if (existingMobile) {
      return NextResponse.json(
        { error: 'Mobile number is already registered. Please Sign In!' },
        { status: 400 }
      );
    }

    // Check if username/email exists
    const existingUsername = findUserByUsernameOrEmail(cleanUsername);
    if (existingUsername) {
      return NextResponse.json(
        { error: 'Username is already taken. Please choose another username.' },
        { status: 400 }
      );
    }

    if (email && email.trim()) {
      const existingEmail = findUserByUsernameOrEmail(email.trim());
      if (existingEmail) {
        return NextResponse.json(
          { error: 'Email ID is already registered. Please Sign In!' },
          { status: 400 }
        );
      }
    }

    // Insert user into SQL DB
    createUser({
      mobile: cleanMobile,
      username: cleanUsername,
      password: password, // In production hash with bcrypt/argon2
      email: email ? email.trim() : undefined
    });

    return NextResponse.json({
      success: true,
      message: 'Account created successfully in SQL database!',
      user: {
        username: cleanUsername,
        mobile: cleanMobile,
        email: email ? email.trim() : undefined
      }
    });

  } catch (error: any) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
