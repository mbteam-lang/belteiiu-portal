
export const formatFontSize = (size) => {
    const sizes = {
        small: '12px',
        medium: '16px',
        large: '20px',
        xlarge: '24px',
    };

    return sizes[size] || '16px';
};