import { Rocket } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3 py-2 px-4 ">
      <div className="relative">
        <div className="absolute -bottom-1 -right-1 w-6 h-3 bg-blue-500 rounded-full blur-sm opacity-60"></div>
        <Rocket
          className="w-7 h-7 text-slate-800 relative z-10"
          strokeWidth={2}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-slate-500 font-medium tracking-wider uppercase -mb-1">
          launch your
        </span>
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl font-extrabold tracking-tight text-slate-800">
            MVP
          </span>
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 to-blue-600 text-transparent bg-clip-text">
            FAST
          </span>
        </div>
      </div>
    </div>
  );
}
