import LoginIllustration from "@/components/LoginIllustration";
import LoginForm from "@/components/LoginForm";
import LanguageSelector from "@/components/LanguageSelector";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      {/* Left side with illustration */}
      <div className="hidden lg:flex lg:w-3/5 bg-login-gradient items-center justify-center p-12 text-white relative">
        <LoginIllustration />
      </div>

      {/* Right side with login form */}
      <div className="w-full lg:w-2/5 flex flex-col items-center justify-center p-8 bg-white">
        <LoginForm />
        
        {/* Footer */}
        <footer className="absolute bottom-8 text-center text-gray-500 text-sm">
          <div className="mb-2">
            <LanguageSelector />
          </div>
          <p>© 2025 Bytebase. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
