'use client';

import dynamic from 'next/dynamic';

// Skeletons
const FormSectionSkeleton = dynamic(
  () =>
    import('../sections/form-section/skeleton').then(
      m => m.FormSectionSkeleton
    ),
  { ssr: false }
);

// Lazy-loaded AuditSection
const FormSection = dynamic(
  () => import('../sections/form-section').then(m => m.FormSection),
  { ssr: false, loading: () => <FormSectionSkeleton /> }
);

interface PageProps {
  contactId: string;
}

export const ContactSettingsView = ({ contactId }: PageProps) => {
  return (
    <div className='px-4 pt-2.5 lg:w-2/5'>
      <FormSection contactId={contactId} />
    </div>
  );
};
