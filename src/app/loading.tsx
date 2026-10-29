import React from 'react';

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none" aria-hidden="true">
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-secondary to-transparent animate-pulse" />
    </div>
  );
}

