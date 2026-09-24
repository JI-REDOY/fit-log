const Loading = () => {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">

            <div className="h-12 w-12 animate-spin rounded-full border-4 border-[var(--border-color)] border-t-[var(--accent)]"></div>

            <p className="text-sm text-[var(--text-secondary)]">
                Loading workouts…
            </p>

        </div>
    );
};

export default Loading;