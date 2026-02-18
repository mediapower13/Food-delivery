import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/layout/Footer";

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
    // Set authentication state
    localStorage.setItem('isAuthenticated', 'true');
    // Redirect to home
    navigate('/');
  };

  return (
    <>
      <div className="min-h-screen bg-white md:bg-transparent">
        <div className="bg-white rounded-none shadow-none border-0 overflow-hidden">
          <div className="grid md:grid-cols-2 md:min-h-screen">
            <div className="hidden md:block relative min-h-[420px]">
            <img
              src="/images/img1.png"
              alt="Sign up"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-brandOrange/60" />
            <div className="relative h-full flex flex-col items-center justify-center text-center p-10 text-white">
              <div className="text-4xl font-extrabold">Chuks Kitchen</div>
              <p className="mt-3 max-w-sm text-white/95">
                Your journey to delicious, authentic Nigerian meals starts here.
                Sign up or log in to order your favorites today!
              </p>
            </div>
          </div>

          <div className="px-6 py-8 md:p-8 md:p-10 md:min-h-0 md:flex md:flex-col md:justify-center">
            <div className="text-center">
              <div className="text-brandOrange font-semibold italic text-2xl">
                Chuks Kitchen
              </div>
              <h1 className="mt-2 text-2xl font-bold text-textDark">Create Your Account</h1>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <div className="text-sm font-medium text-textDark/80">Email</div>
                <div className="mt-2 flex items-center gap-2 border border-black/10 rounded-btn px-3 h-11">
                  <span className="text-textDark/40">✉</span>
                  <input
                    className="w-full outline-none text-sm"
                    placeholder="name@gmail.com"
                  />
                </div>
              </div>

              <div>
                <div className="text-sm font-medium text-textDark/80">Phone number</div>
                <div className="mt-2 flex items-center gap-2 border border-black/10 rounded-btn px-3 h-11">
                  <span className="text-textDark/40">📞</span>
                  <input
                    className="w-full outline-none text-sm"
                    placeholder="8123340690"
                  />
                </div>
              </div>

              <div>
                <div className="text-sm font-medium text-textDark/80">Password</div>
                <div className="mt-2 flex items-center gap-2 border border-black/10 rounded-btn px-3 h-11">
                  <span className="text-textDark/40">🔒</span>
                  <input
                    className="w-full outline-none text-sm"
                    type="password"
                    placeholder="QWE123#"
                  />
                  <button className="text-textDark/40" aria-label="toggle password">
                    👁
                  </button>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium text-textDark/80">Confirm password</div>
                <div className="mt-2 flex items-center gap-2 border border-black/10 rounded-btn px-3 h-11">
                  <span className="text-textDark/40">🔒</span>
                  <input
                    className="w-full outline-none text-sm"
                    type="password"
                    placeholder="QWE123#"
                  />
                  <button className="text-textDark/40" aria-label="toggle password">
                    👁
                  </button>
                </div>
              </div>

              <label className="flex items-start gap-2 text-xs text-textDark/60">
                <input type="checkbox" className="mt-0.5 accent-brandOrange" defaultChecked />
                <span>
                  I agree to the{' '}
                  <span className="text-brandBlue">Terms &amp; Conditions</span> and{' '}
                  <span className="text-brandBlue">Privacy Policy</span>
                </span>
              </label>

              <button
                onClick={handleSignup}
                className="inline-flex w-full h-12 items-center justify-center rounded-btn bg-brandOrange text-white font-semibold"
              >
                Continue
              </button>

              <div className="text-center text-xs text-textDark/50">Or continue with</div>

              <button className="w-full h-12 rounded-btn border border-black/10 flex items-center justify-center gap-2 text-sm">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
                  <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
                  <path d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707 0-.593.102-1.17.282-1.709V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.335z" fill="#FBBC05"/>
                  <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>
              <button className="w-full h-12 rounded-btn border border-black/10 flex items-center justify-center gap-2 text-sm">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.475 9.682c-.033 3.264 2.853 4.348 2.888 4.364-.024.075-.451 1.543-1.488 3.055-.896 1.307-1.826 2.61-3.292 2.636-1.438.026-1.9-.853-3.543-.853-1.644 0-2.158.827-3.518.879-1.412.052-2.489-1.411-3.393-2.713C.02 14.386-1.308 9.493.837 6.256c1.067-1.61 2.972-2.63 5.04-2.655 1.574-.026 3.06.894 4.017.894.958 0 2.753-1.106 4.64-.943.79.033 3.01.319 4.436 2.406-.115.071-2.648 1.547-2.623 4.614l.128.11z" fill="#000"/>
                  <path d="M11.665 2.732c.748-.905 1.252-2.163 1.115-3.417-1.077.044-2.38.718-3.152 1.621-.693.805-1.299 2.092-1.137 3.329 1.203.093 2.433-.612 3.174-1.533z" fill="#000"/>
                </svg>
                Continue with Apple
              </button>

              <div className="text-center text-sm text-textDark/60">
                Already have an account?{' '}
                <Link to="/login" className="text-brandBlue">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hidden md:block">
      <Footer noMargin={true} />
    </div>
    </>
  );
}
