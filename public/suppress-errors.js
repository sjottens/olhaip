// Suppress startTime errors from Next.js web vitals
(function() {
    const originalError = console.error;
    const originalWarn = console.warn;

    console.error = function(...args) {
        if (args.some(arg => String(arg).includes('startTime'))) {
            return;
        }
        return originalError.apply(console, args);
    };

    console.warn = function(...args) {
        if (args.some(arg => String(arg).includes('startTime'))) {
            return;
        }
        return originalWarn.apply(console, args);
    };

    window.addEventListener('error', function(e) {
        if (e.message && e.message.includes('startTime')) {
            e.preventDefault();
            return true;
        }
    }, true);
})();