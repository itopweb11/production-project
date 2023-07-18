type Mods = Record<string, boolean | string>
export function classNames(cls: string, mods: Mods, addilition: string[]): string {
    return [
        cls,
        ...addilition,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ')
}