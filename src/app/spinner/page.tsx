"use client";

import LoadingSpinner from "@/components/shared/LoadingSpinner";

export default function SpinnerPage() {
    return (
        <div className="min-h-screen bg-gray-100!">
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Loading Spinner Test Page</h1>
            <p className="mb-8">The spinner below is rendered inline for testing purposes.</p>
            
            <div className="relative h-[400px] border-2 border-dashed border-gray-300! rounded-xl overflow-hidden">
            <LoadingSpinner />
            </div>
        </div>
        </div>
    );
}
