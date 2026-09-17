import React from 'react';
import type { Metadata } from 'next';
import AuditContainer from '@/components/audit/AuditContainer';

export const metadata: Metadata = {
  title: 'The EQ Audit — SoulfulI Self-Discovery Mirror',
  description:
    'A quiet 48-question reflective self-discovery experience mapping six core dimensions of emotional awareness, regulation, and intentional communication.',
};

export default function EqAuditPage() {
  return (
    <div className="w-full min-h-screen bg-surface px-6 lg:px-16 pt-8 pb-24">
      <div className="max-w-[1240px] mx-auto">
        <AuditContainer />
      </div>
    </div>
  );
}
