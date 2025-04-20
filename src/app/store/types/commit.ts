export type Commit<T extends Record<string, (...args: any[]) => any>> = <
    K extends keyof T
>(
    key: K,
    payload: Parameters<T[K]>[1] extends undefined ? never : Parameters<T[K]>[1]
) => ReturnType<T[K]>
