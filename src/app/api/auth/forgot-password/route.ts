import { NextResponse } from 'next/server';
import { updatePassword, findUserByUsernameOrEmail, findUserByMobile } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { identifier, newPassword } = await req.json();

    if (!identifier || !newPassword) {
      return NextResponse.json(
        { error: 'Mobile number/Username and new password are required.' },
        { status: 400 }
      );
    }

    const cleanIdentifier = identifier.trim();

    // Verify account exists first
    let user = findUserByUsernameOrEmail(cleanIdentifier);
    if (!user) {
      user = findUserByMobile(cleanIdentifier);
    }

    if (!user) {
      return NextResponse.json(
        { error: `No account found for "${cleanIdentifier}". Please Sign Up first!` },
        { status: 404 }
      );
    }

    // Update password in SQL DB
    const success = updatePassword(cleanIdentifier, newPassword);

    if (!success) {
      return NextResponse.json(
        { error: 'Failed to update password. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Password updated successfully! You can now Sign In with your new password.',
      user: {
        username: user.username,
        mobile: user.mobile,
        email: user.email || ''
      }
    });

  } catch (error: any) {
    console.error('Forgot password error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
