import React from "react";

export function BackgroundBlobs() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-blue-500/20 dark:bg-blue-600/10 rounded-full blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-500/20 dark:bg-indigo-600/10 rounded-full blur-[80px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen"></div>
      <div className="absolute top-[40%] left-[60%] w-[400px] h-[400px] bg-cyan-500/20 dark:bg-cyan-600/10 rounded-full blur-[90px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen"></div>
    </div>
  );
}
