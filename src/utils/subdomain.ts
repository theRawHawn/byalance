/**
 * Helper to determine if the user is visiting via the dedicated procurement subdomain.
 * Matches `procure.byalance.in`, `import.byalance.in`, `source.byalance.in`, or `procure.localhost`.
 */
export function isProcureSubdomain(): boolean {
  if (typeof window === 'undefined') return false;
  const hostname = window.location.hostname.toLowerCase();
  return (
    hostname.startsWith('procure.') ||
    hostname.startsWith('import.') ||
    hostname.startsWith('source.') ||
    hostname.includes('procure-byalance') ||
    hostname.includes('byalance-procure')
  );
}
