import React, { useState, useEffect, useRef } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useAdmission } from '@/hooks/useAdmission';
import usePageTitle from '@/hooks/usePageTitle';

export default function Admission() {
  const [expandedId, setExpandedId] = useState(null);
  const contentRefs = useRef({});
  usePageTitle('ការចុះឈ្មោះ', 'Admission');
  const { admission, loading } = useAdmission();

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };
  return (
    <div className="bg-[#F5F5F5] dark:bg-[#282828] min-h-screen select-none transition-colors duration-200">
      <div className="h-5" />
      <section className="max-w-7xl m-auto md:px-5 px-2">
        {
          admission?.map((items) => {
            const isOpen = expandedId === items.id;

            return (
              <div key={items.id} className="mb-2">
                <div
                  onClick={() => toggleExpand(items.id)}
                  className="cursor-pointer flex-col p-3 shadow rounded-md w-full bg-white dark:bg-[#353535] border border-gray-100 dark:border-slate-700 text-gray-800 dark:text-slate-200"
                >
                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <h1 className="text-[#0a96a4] dark:text-cyan-400 md:text-lg text-md font-semibold">
                      {items.degrees}
                    </h1>

                    <div className="text-[#0a96a4] dark:text-cyan-400">
                      {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </div>
                  </div>

                  {/* Expand Content */}
                  <div
                    ref={(el) => (contentRefs.current[items.id] = el)}
                    style={{
                      height: isOpen
                        ? contentRefs.current[items.id]?.scrollHeight + 'px'
                        : '0px',
                      transition: 'height 0.35s ease',
                      overflow: 'hidden',
                    }}
                    className="text-gray-800 dark:text-white text-left whitespace-pre-wrap break-words leading-relaxed mt-2"
                    dangerouslySetInnerHTML={{ __html: items.remark }}
                  />
                </div>
              </div>
            );
          })
        }
      </section>
      <div className="h-24" />
    </div>
  );
}