// src/components/common/ErrorBoundary.jsx

import React from 'react';

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('[ErrorBoundary caught error]:', error, errorInfo);
    }

    handleReload = () => {
        this.setState({ hasError: false, error: null });
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 text-center">
                    <div className="max-w-md p-6 bg-white dark:bg-[#353535] rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700">
                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-red-100 dark:bg-red-950/40 text-red-500 flex items-center justify-center font-bold text-xl">
                            !
                        </div>
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                            {this.props.fallbackTitle || 'Something went wrong'}
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                            {this.props.fallbackMessage || 'An unexpected error occurred while rendering this page.'}
                        </p>
                        <button
                            type="button"
                            onClick={this.handleReload}
                            className="px-5 py-2.5 bg-[#0a96a4] hover:bg-[#08818d] text-white text-sm font-semibold rounded-xl transition-colors shadow-md"
                        >
                            Refresh Page
                        </button>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
