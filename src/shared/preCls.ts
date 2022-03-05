export function getPreCls(
  name: string,
  preName?: string
): string {
  return (preName ? preName : 'k4kit') + '_' + name
}