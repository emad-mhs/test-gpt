'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// import { useGetSummary } from '@/features/summary/api/use-get-summary';
import { ListChecksIcon } from 'lucide-react';
import { MAIL_STATUSES } from '../modules/secretary/mails/types';
import { useFilters } from '@/hooks/use-filter-param';

export const StatusFilter = () => {
  const { filters, setStatus } = useFilters();

  return (
    <Select
      dir='rtl'
      value={filters.status ?? 'all'}
      onValueChange={setStatus}
      // disabled={isLoadingSummary}
    >
      <SelectTrigger className='lg:w-auto w-full h-9 rounded-md px-3 font-normal bg-white/10 hover:bg-white/20 focus:ring-offset-0 focus:ring-transparent outline-hidden text-muted-foreground focus:bg-white/30 transition'>
        <ListChecksIcon className='size-4 ml-2 text-muted-foreground' />
        <SelectValue placeholder='كل الحالات' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='all'>كل الحالات</SelectItem>
        {MAIL_STATUSES.map(status => (
          <SelectItem key={status.value} value={status.value}>
            {status.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
