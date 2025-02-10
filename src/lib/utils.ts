/**
 * Combines multiple class names into a single string, filtering out nullish values.
 * @param classes - Array of class names (strings, undefined, or null).
 * @returns A concatenated string of class names.
 */
export function cn(...classes: Array<string | undefined | null>) {
    return classes.filter(Boolean).join(' ');
  }