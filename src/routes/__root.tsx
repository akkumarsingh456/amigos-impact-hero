import { createRootRoute, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --brand-red: #E63946;
          --brand-orange: #F77F00;
          --brand-teal: #06A77D;
          --brand-blue: #1976D2;
          --brand-purple: #7209B7;
          --brand-green: #4CAF50;
          --brand-gold: #FFA500;
          --ink: #0D1B2A;
          --secondary: #F0F4F8;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: var(--ink);
          background: white;
        }

        /* Hero intro animations */
        @keyframes hero-bg {
          0% { opacity: 1; }
          90% { opacity: 1; }
          100% { opacity: 1; }
        }

        @keyframes hero-fade-out {
          0% { opacity: 1; }
          100% { opacity: 0; pointer-events: none; }
        }

        @keyframes rise-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-pop {
          0% {
            opacity: 0;
            transform: scale(0.85) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes slide-b {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-l {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-r {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-t {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }

        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(15px) rotate(3deg); }
        }

        @keyframes drift {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -20px) rotate(2deg); }
          66% { transform: translate(-20px, 10px) rotate(-2deg); }
        }

        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes particle {
          to {
            opacity: 0;
            transform: translateY(-100vh) translateX(100px);
          }
        }

        @keyframes line-grow {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(230, 57, 70, 0.6);
          }
          50% {
            box-shadow: 0 0 40px rgba(230, 57, 70, 0.9), 0 0 60px rgba(247, 127, 0, 0.5);
          }
        }

        /* Tailwind utility classes */
        .animate-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }

        /* Smooth transitions */
        a, button {
          transition: all 0.3s ease;
        }

        /* Selection */
        ::selection {
          background: var(--brand-red);
          color: white;
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }

        ::-webkit-scrollbar-track {
          background: var(--secondary);
        }

        ::-webkit-scrollbar-thumb {
          background: var(--brand-blue);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: var(--brand-red);
        }
      `}</style>
    </>
  ),
});
