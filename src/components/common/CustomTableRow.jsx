import React from 'react';

/**
 * CustomTableCell Component
 * Renders a <td> or <th> with customizable background color (bg/colBg/bgColor), text color, colSpan, rowSpan, alignment, and styles.
 */
export function CustomTableCell({
    content,
    text,
    value,
    children,
    bg,
    colBg,
    bgColor,
    textColor,
    color,
    colSpan = 1,
    rowSpan = 1,
    align = 'center',
    className = '',
    style = {},
    isHeader = false,
    onClick,
    ...restProps
}) {
    // Determine cell content
    const cellContent = content ?? text ?? value ?? children;

    // Resolve background style/class
    const backgroundAttr = bg ?? colBg ?? bgColor;
    let bgClasses = '';
    let inlineStyle = { ...style };

    if (backgroundAttr) {
        if (backgroundAttr.startsWith('bg-') || backgroundAttr.includes(' ')) {
            bgClasses = backgroundAttr;
        } else {
            inlineStyle.backgroundColor = backgroundAttr;
        }
    } else {
        bgClasses = 'bg-white dark:bg-[#353535]';
    }

    // Resolve text color
    const colorAttr = textColor ?? color;
    let textClasses = '';
    if (colorAttr) {
        if (colorAttr.startsWith('text-') || colorAttr.includes(' ')) {
            textClasses = colorAttr;
        } else {
            inlineStyle.color = colorAttr;
        }
    } else {
        textClasses = 'text-slate-700 dark:text-slate-200';
    }

    // Text alignment
    const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';

    // Base padding & border styling
    const baseClasses = `px-2 py-2 border-r border-b border-gray-300 dark:border-slate-700 text-xs sm:text-md md:text-lg font-medium align-middle transition-colors ${alignClass} ${bgClasses} ${textClasses} ${className}`;

    const Component = isHeader ? 'th' : 'td';

    return (
        <Component
            colSpan={colSpan}
            rowSpan={rowSpan}
            className={baseClasses}
            style={inlineStyle}
            onClick={onClick}
            {...restProps}
        >
            {cellContent}
        </Component>
    );
}

/**
 * CustomTableRow Component
 * Accepts an array of `cols` (cell options) or `children` (<CustomTableCell /> elements),
 * allowing per-column background color, colSpan, rowSpan, and cell styling.
 */
export default function CustomTableRow({
    cols,
    children,
    className = '',
    hover = true,
    bg = '',
    style = {},
    onClick,
    ...restProps
}) {
    const hoverClass = hover ? 'hover:bg-blue-50/50 dark:hover:bg-slate-700/50 transition-colors' : '';
    const rowClass = `border-b border-gray-300 dark:border-slate-700 ${hoverClass} ${bg} ${className}`.trim();

    return (
        <tr className={rowClass} style={style} onClick={onClick} {...restProps}>
            {cols && Array.isArray(cols) ? (
                cols.map((col, index) => {
                    if (React.isValidElement(col)) {
                        return col;
                    }
                    if (typeof col === 'object' && col !== null) {
                        return <CustomTableCell key={col.key || index} {...col} />;
                    }
                    return <CustomTableCell key={index}>{col}</CustomTableCell>;
                })
            ) : (
                children
            )}
        </tr>
    );
}
