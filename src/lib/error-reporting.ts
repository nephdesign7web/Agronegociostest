type AppErrorContext = Record<string, unknown>;

export function reportAppError(error: unknown, context: AppErrorContext = {}) {
  if (typeof window === "undefined") return;

  console.error("Application error", {
    error,
    route: window.location.pathname,
    ...context,
  });
}
