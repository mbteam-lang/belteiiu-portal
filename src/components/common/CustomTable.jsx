import React from 'react';
import CustomTableRow, { CustomTableCell } from './CustomTableRow';

/**
 * CustomTable Component
 * Flexible table wrapper component accepting data array with per-row/column configurations,
 * header configurations, or direct children.
 */
export default function CustomTable({
    headers,
    rows,
    data,
    renderRow,
    children,
    className = '',
    tableClassName = '',
    headerBg = 'bg-[#151B74] dark:bg-[#282828] text-white',
    border = true,
    shadow = true,
    rounded = true,
    ...restProps
}) {
    const containerClasses = `overflow-x-auto bg-white dark:bg-[#353535] ${
        rounded ? 'rounded-lg' : ''
    } ${shadow ? 'shadow-sm' : ''} ${
        border ? 'border border-gray-300 dark:border-slate-700' : ''
    } ${className}`.trim();

    const tableClasses = `w-full border-collapse border border-gray-300 dark:border-slate-700 text-center ${tableClassName}`.trim();

    return (
        <div className={containerClasses} {...restProps}>
            <table className={tableClasses}>
                {headers && (
                    <thead>
                        {Array.isArray(headers[0]) ? (
                            // Multi-row headers
                            headers.map((headerRow, rowIndex) => (
                                <CustomTableRow key={rowIndex} hover={false}>
                                    {headerRow.map((head, colIndex) => {
                                        if (React.isValidElement(head)) return head;
                                        const headObj = typeof head === 'object' ? head : { content: head };
                                        return (
                                            <CustomTableCell
                                                key={headObj.key || colIndex}
                                                isHeader
                                                bg={headObj.bg || headerBg}
                                                textColor={headObj.textColor || 'text-[#151B74] dark:text-cyan-300'}
                                                {...headObj}
                                            />
                                        );
                                    })}
                                </CustomTableRow>
                            ))
                        ) : (
                            // Single-row headers
                            <CustomTableRow hover={false}>
                                {headers.map((head, colIndex) => {
                                    if (React.isValidElement(head)) return head;
                                    const headObj = typeof head === 'object' ? head : { content: head };
                                    return (
                                        <CustomTableCell
                                            key={headObj.key || colIndex}
                                            isHeader
                                            bg={headObj.bg || headerBg}
                                            textColor={headObj.textColor || 'text-[#151B74] dark:text-cyan-300'}
                                            {...headObj}
                                        />
                                    );
                                })}
                            </CustomTableRow>
                        )}
                    </thead>
                )}

                <tbody>
                    {/* Scenario 1: Using renderRow prop with data */}
                    {data && renderRow
                        ? data.map((item, index) => renderRow(item, index))
                        : null}

                    {/* Scenario 2: Using rows array (array of row objects or arrays) */}
                    {rows && !renderRow
                        ? rows.map((row, index) => {
                              if (React.isValidElement(row)) return row;
                              const rowObj = Array.isArray(row) ? { cols: row } : row;
                              return <CustomTableRow key={rowObj.key || index} {...rowObj} />;
                          })
                        : null}

                    {/* Scenario 3: Custom children */}
                    {!data && !rows ? children : null}
                </tbody>
            </table>
        </div>
    );
}
