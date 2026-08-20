'use client';

import React, { useState } from 'react';
import { useAuth, AuthTab } from '@/context/AuthContext';
import { X, User, Phone, Lock, Mail, Eye, EyeOff, Sparkles, LogIn, UserPlus, KeyRound, AlertCircle, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AuthModal() {
  const {
    isAuthModalOpen,
    closeAuthModal,
    authTab,
    setAuthTab,
    authPrompt,
    login,
    signup,
    forgotPassword
  } = useAuth();

  // Sign In state
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Sign Up state
  const [signupMobile, setSignupMobile] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');

  // Forgot Password state
  const [forgotIdentifier, setForgotIdentifier] = useState('');
  const [forgotNewPassword, setForgotNewPassword] = useState('');
  const [forgotConfirmPassword, setForgotConfirmPassword] = useState('');

  // UI state
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [needsSignupPrompt, setNeedsSignupPrompt] = useState(false);

  if (!isAuthModalOpen) return null;

  const triggerConfetti = () => {
    try {
      confetti({ particleCount: 70, spread: 60 });
    } catch (e) {
      console.error(e);
    }
  };

  const resetErrors = () => {
    setErrorMsg('');
    setSuccessMsg('');
    setNeedsSignupPrompt(false);
  };

  const handleSwitchTab = (tab: AuthTab) => {
    resetErrors();
    setAuthTab(tab);
  };

  const handleSignInSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    resetErrors();
    if (!loginIdentifier || !loginPassword) {
      setErrorMsg('Please enter both username/email and password.');
      return;
    }

    setLoading(true);
    const res = await login(loginIdentifier, loginPassword);
    setLoading(false);

    if (!res.success) {
      setErrorMsg(res.error || 'Failed to sign in.');
      if (res.needsSignup) {
        setNeedsSignupPrompt(true);
      }
    } else {
      triggerConfetti();
    }
  };

  const handleSignUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    resetErrors();

    if (!signupMobile || !signupUsername || !signupPassword) {
      setErrorMsg('Mobile number, username, and password are required.');
      return;
    }

    if (signupMobile.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (signupPassword.length < 4) {
      setErrorMsg('Password should be at least 4 characters.');
      return;
    }

    setLoading(true);
    const res = await signup(signupMobile, signupUsername, signupPassword, signupEmail);
    setLoading(false);

    if (!res.success) {
      setErrorMsg(res.error || 'Signup failed.');
    } else {
      triggerConfetti();
    }
  };

  const handleForgotPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    resetErrors();

    if (!forgotIdentifier || !forgotNewPassword) {
      setErrorMsg('Mobile number/username and new password are required.');
      return;
    }

    if (forgotNewPassword !== forgotConfirmPassword) {
      setErrorMsg('Passwords do not match. Please verify both fields.');
      return;
    }

    setLoading(true);
    const res = await forgotPassword(forgotIdentifier, forgotNewPassword);
    setLoading(false);

    if (!res.success) {
      setErrorMsg(res.error || 'Password reset failed.');
    } else {
      setSuccessMsg('Password updated successfully! You can now Sign In.');
      triggerConfetti();
    }
  };

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto p-4 sm:p-6 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={closeAuthModal}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-[#FFFDF9] rounded-3xl shadow-2xl overflow-hidden border border-[#D4AF37]/40 z-10 my-auto animate-scaleUp">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#8E2020] via-[#C95B4A] to-[#8E2020] text-white p-6 text-center relative shadow-md">
          <button
            onClick={closeAuthModal}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#F8F1E7] mx-auto mb-2 ring-1 ring-[#D4AF37]/50 shadow-md">
            <img src="/images/snd-logo.png" alt="SND logo" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-xl font-serif font-bold tracking-tight">SND Account</h2>
          <p className="text-xs text-rose-100 flex items-center justify-center gap-1 mt-0.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{authPrompt || 'Handcrafted Elegance, Timeless Artistry'}</span>
          </p>

          {/* Navigation Tabs */}
          <div className="flex bg-black/20 p-1 rounded-full mt-4 text-xs font-semibold border border-white/20">
            <button
              onClick={() => handleSwitchTab('signin')}
              className={`flex-1 py-1.5 rounded-full transition-all flex items-center justify-center gap-1 ${
                authTab === 'signin' ? 'bg-white text-[#8E2020] shadow-sm font-bold' : 'text-white/80 hover:text-white'
              }`}
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Sign In</span>
            </button>
            <button
              onClick={() => handleSwitchTab('signup')}
              className={`flex-1 py-1.5 rounded-full transition-all flex items-center justify-center gap-1 ${
                authTab === 'signup' ? 'bg-white text-[#8E2020] shadow-sm font-bold' : 'text-white/80 hover:text-white'
              }`}
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Sign Up</span>
            </button>
            <button
              onClick={() => handleSwitchTab('forgot')}
              className={`flex-1 py-1.5 rounded-full transition-all flex items-center justify-center gap-1 ${
                authTab === 'forgot' ? 'bg-white text-[#8E2020] shadow-sm font-bold' : 'text-white/80 hover:text-white'
              }`}
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 space-y-4">
          
          {/* Global Alert Banners */}
          {errorMsg && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-xs p-3 rounded-xl flex flex-col gap-2">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="font-medium">{errorMsg}</span>
              </div>
              {needsSignupPrompt && (
                <button
                  onClick={() => handleSwitchTab('signup')}
                  className="bg-[#C95B4A] text-white font-bold py-1.5 px-3 rounded-lg text-xs hover:bg-[#8E2020] transition-colors self-start mt-1"
                >
                  Click Here to Create an Account (Sign Up) →
                </button>
              )}
            </div>
          )}

          {successMsg && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs p-3 rounded-xl flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* TAB 1: SIGN IN FORM */}
          {authTab === 'signin' && (
            <form onSubmit={handleSignInSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-[#2D2727] block mb-1">Username, Mobile or Email</label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. sana_craft or 9892590046"
                    value={loginIdentifier}
                    onChange={(e) => setLoginIdentifier(e.target.value)}
                    className="w-full text-xs pl-9 pr-3 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C95B4A] bg-white font-medium"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold text-[#2D2727]">Password</label>
                  <button
                    type="button"
                    onClick={() => handleSwitchTab('forgot')}
                    className="text-[11px] text-[#C95B4A] hover:underline font-semibold"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Enter your password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full text-xs pl-9 pr-10 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C95B4A] bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#C95B4A] hover:bg-[#8E2020] text-white font-bold py-3.5 rounded-xl text-xs shadow-md flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <span>Checking SQL Database...</span>
                ) : (
                  <>
                    <LogIn className="w-4 h-4" />
                    <span>Sign In to Account</span>
                  </>
                )}
              </button>

              <div className="text-center pt-2">
                <p className="text-xs text-gray-500">
                  New to sanaCraft?{' '}
                  <button
                    type="button"
                    onClick={() => handleSwitchTab('signup')}
                    className="text-[#8E2020] font-bold hover:underline"
                  >
                    Create a New Account
                  </button>
                </p>
              </div>
            </form>
          )}

          {/* TAB 2: SIGN UP FORM */}
          {authTab === 'signup' && (
            <form onSubmit={handleSignUpSubmit} className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-[#2D2727] block mb-1">Mobile Number (Required) *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9892590046"
                    value={signupMobile}
                    onChange={(e) => setSignupMobile(e.target.value)}
                    className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C95B4A] bg-white font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#2D2727] block mb-1">Create Username *</label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. sana_lover99"
                    value={signupUsername}
                    onChange={(e) => setSignupUsername(e.target.value)}
                    className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C95B4A] bg-white font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#2D2727] block mb-1">Email Address (Optional)</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="e.g. dayalkarmanish123@gmail.com"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C95B4A] bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#2D2727] block mb-1">Create Password *</label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Choose a strong password"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    className="w-full text-xs pl-9 pr-10 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C95B4A] bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#C95B4A] hover:bg-[#8E2020] text-white font-bold py-3.5 rounded-xl text-xs shadow-md flex items-center justify-center gap-2 transition-all disabled:opacity-50 mt-2"
              >
                {loading ? (
                  <span>Saving to SQL Database...</span>
                ) : (
                  <>
                    <UserPlus className="w-4 h-4" />
                    <span>Create Account & Save to Database</span>
                  </>
                )}
              </button>

              <div className="text-center pt-1">
                <p className="text-xs text-gray-500">
                  Already registered?{' '}
                  <button
                    type="button"
                    onClick={() => handleSwitchTab('signin')}
                    className="text-[#8E2020] font-bold hover:underline"
                  >
                    Sign In Here
                  </button>
                </p>
              </div>
            </form>
          )}

          {/* TAB 3: FORGOT PASSWORD FORM */}
          {authTab === 'forgot' && (
            <form onSubmit={handleForgotPasswordSubmit} className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-[#2D2727] block mb-1">Registered Mobile or Username *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your mobile (e.g. 9892590046)"
                    value={forgotIdentifier}
                    onChange={(e) => setForgotIdentifier(e.target.value)}
                    className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C95B4A] bg-white font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#2D2727] block mb-1">New Password *</label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Enter new password"
                    value={forgotNewPassword}
                    onChange={(e) => setForgotNewPassword(e.target.value)}
                    className="w-full text-xs pl-9 pr-10 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C95B4A] bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#2D2727] block mb-1">Confirm New Password *</label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Re-enter new password"
                    value={forgotConfirmPassword}
                    onChange={(e) => setForgotConfirmPassword(e.target.value)}
                    className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C95B4A] bg-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#C95B4A] hover:bg-[#8E2020] text-white font-bold py-3.5 rounded-xl text-xs shadow-md flex items-center justify-center gap-2 transition-all disabled:opacity-50 mt-2"
              >
                {loading ? (
                  <span>Updating SQL Database...</span>
                ) : (
                  <>
                    <KeyRound className="w-4 h-4" />
                    <span>Reset & Update Password</span>
                  </>
                )}
              </button>

              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={() => handleSwitchTab('signin')}
                  className="text-xs text-gray-500 hover:text-[#8E2020] font-medium"
                >
                  ← Back to Sign In
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
