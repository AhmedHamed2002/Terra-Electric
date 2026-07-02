import { Zap } from "lucide-react";

export default function LoadingSpinner() {
    return (
        <div
        suppressHydrationWarning
        dir="auto"
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/95 backdrop-blur-xl"
        >
        <div className="relative flex flex-col items-center gap-10">

            {/* Background ambient glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#0ea5e9]/20 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#13526c]/30 blur-[80px] rounded-full animate-pulse [animation-delay:700ms]" />

            {/* Spinner rings + center icon */}
            <div className="relative flex items-center justify-center">
            {/* Outer slow dashed orbit ring */}
            <div className="absolute w-36 h-36 border border-dashed border-[#0ea5e9]/90 rounded-full animate-[spin_12s_linear_infinite]" />

            {/* Middle ring with electric blue sweep */}
            <div className="absolute w-28 h-28 border-2px border-transparent border-t-[#0ea5e9] border-r-[#0ea5e9]/70 rounded-full animate-[spin_1.8s_linear_infinite]" />

            {/* Inner counter-spin ring */}
            <div className="absolute w-20 h-20 border border-[#87bcf5fa] border-b-[#0ea5e9] rounded-full animate-[spin_2.5s_linear_infinite_reverse]" />

            {/* Orbiting dot — electric bolt */}
            <div className="absolute w-28 h-28 animate-[spin_1.8s_linear_infinite]">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#0ea5e9] rounded-full shadow-[0_0_12px_#0ea5e9]" />
            </div>

            {/* Center icon box */}
            <div className="relative z-50 w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-tr from-[#0ea5e9]/5 to-transparent" />
                <Zap className="w-7 h-7 text-[#0ea5e9] animate-pulse" strokeWidth={1.5} />
            </div>
            </div>

            {/* Branding */}
            <div className="flex flex-col items-center gap-3 mt-6">
            <div className="flex items-center gap-2.5">
                <h2
                style={{ fontFamily: "serif" }}
                className="text-2xl sm:text-3xl font-bold tracking-widest uppercase text-[#0d1b2a]"
                >
                Terra Electric
                </h2>
            </div>

            {/* Animated loading dots tagline */}
            <div className="flex items-center gap-2">
                <p className="text-[8px] sm:text-xs font-medium tracking-[0.35em] uppercase text-[#0ea5e9]/80">
                Direct Access
                </p>
                <div className="flex gap-1">
                <span className="w-1 h-1 rounded-full bg-[#0ea5e9] animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1 h-1 rounded-full bg-[#0ea5e9] animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1 h-1 rounded-full bg-[#0ea5e9] animate-bounce" />
                </div>
                <p className="text-[8px] sm:text-xs font-medium tracking-[0.35em] uppercase text-[#0ea5e9]/80">
                Unwavering Excellence
                </p>
            </div>

            {/* Thin progress bar */}
            <div className="w-40 sm:w-52 h-[2px] bg-gray-200 rounded-full overflow-hidden mt-1">
                <div className="h-full bg-linear-to-r from-transparent via-[#0ea5e9] to-transparent rounded-full animate-[shimmer_1.6s_ease-in-out_infinite]" style={{ backgroundSize: "200% 100%" }} />
            </div>
            </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
            @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
            }
        `}} />
        </div>
    );
}
