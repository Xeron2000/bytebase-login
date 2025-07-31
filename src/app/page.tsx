import LoginIllustration from "@/components/LoginIllustration";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gradient-to-b">
      {/* Left side with illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-login-gradient items-center justify-center text-white relative">
        <LoginIllustration />
      </div>

      {/* Right side with login form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8">
        <LoginForm />
        
        {/* Footer */}
        <footer className="absolute bottom-8 text-center text-gray-500 text-sm">
          <div className="mb-2 flex flex-wrap justify-center gap-x-4 gap-y-2">
            <a href="#" className="hover:underline">English</a>
            <a href="#" className="hover:underline">简体中文</a>
            <a href="#" className="hover:underline">Español</a>
            <a href="#" className="hover:underline">日本語</a>
            <a href="#" className="hover:underline">Tiếng việt</a>
          </div>
          <p>© 2025 Bytebase. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}

