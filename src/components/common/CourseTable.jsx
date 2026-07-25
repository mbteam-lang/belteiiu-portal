import React from "react";

export default function CourseTable({
  title,
  badge,
  data,
  t,
  headerColor = "#0a96a4",
}) {
  return (
    <div className="bg-white rounded-lg border border-slate-100 shadow-sm overflow-hidden">
      <div
        className="px-5 py-3.5 flex justify-between items-center text-white font-medium"
        style={{ backgroundColor: headerColor }}
      >
        <span className="text-base sm:text-lg">{title}</span>

        <span className="text-xs bg-white/20 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
          {badge}
        </span>
      </div>

      <ul className="divide-y divide-slate-100 px-5">
        {data.map((item, index) => (
          <li
            key={index}
            className="py-4 flex justify-between items-start gap-4"
          >
            <span className="text-slate-700 font-medium">
              {t ? t(item.key) : item.key}
            </span>

            <span className="text-gray-500 bg-slate-50 px-2.5 py-0.5 rounded-lg border border-slate-100 whitespace-nowrap text-xs md:text-sm">
              {t ? t(item.credit) : item.credit}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}