import React from 'react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'The EQ Audit — Soulfuli Self-Discovery Mirror',
  description:
    'A quiet 48-question reflective self-discovery experience mapping six core dimensions of emotional awareness, regulation, and intentional communication.',
};

// Dynamically import the heavy interactive audit component.
// ssr:false keeps all client-side state off the server bundle,
// preventing a large JS chunk from blocking navigation to this page.
const AuditContainer = dynamic(
  () => import('@/components/audit/AuditContainer'),
  {
    ssr: false,
    loading: () => (
      <div className="max-w-3xl mx-auto py-20 flex flex-col items-center gap-6 text-center">
        <div className="w-10 h-10 rounded-full border-2 border-primary border-t-transparent animate-spin" aria-hidden="true" />
        <p className="font-sans text-sm text-on-surface-variant">Preparing your reflection space&hellip;</p>
      </div>
    ),
  }
);

export default function EqAuditPage() {
  return (
    <div className="w-full min-h-screen bg-surface px-6 lg:px-16 pt-8 pb-24">
      <div className="max-w-[1240px] mx-auto">
        <AuditContainer />
      </div>
    </div>
  );
}
