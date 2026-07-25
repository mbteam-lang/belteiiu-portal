import React, { useState, useEffect, useRef } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useAdmission } from '@/hooks/useAdmission';
import usePageTitle from '@/hooks/usePageTitle';

export default function Admission() {
  const [expandedId, setExpandedId] = useState(null);
  const contentRefs = useRef({});
  usePageTitle('ការចុះឈ្មោះ' , 'Admission');
  const { admission, loading } = useAdmission();

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };
  return (
    <div className="bg-[#F5F5F5] min-h-screen select-none">
      <div className="h-5" />
      <section className="max-w-7xl m-auto md:px-5 px-2">
        {loading ? (
          Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="mb-2 animate-pulse">
              <div className="p-3 shadow rounded-md bg-white flex justify-between items-center">
                <div className="h-5 bg-gray-200 rounded w-1/3" />
                <div className="w-6 h-6 bg-gray-200 rounded-full" />
              </div>
            </div>
          ))
        ) : (
          admission?.map((items) => {
            const isOpen = expandedId === items.id;

            return (
              <div key={items.id} className="mb-2">
                <div
                  onClick={() => toggleExpand(items.id)}
                  className="cursor-pointer flex-col p-3 shadow rounded-md w-full bg-white text-gray-800"
                >
                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <h1 className="text-[#0a96a4] md:text-lg text-md">
                      {items.degrees}
                    </h1>

                    <div className="text-[#0a96a4]">
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
                    className="text-gray-800 text-left whitespace-pre-wrap break-words leading-relaxed mt-2"
                    dangerouslySetInnerHTML={{ __html: items.remark }}
                  />
                </div>
              </div>
            );
          })
        )}
      </section>
      <div className="h-24" />
    </div>
  );
}