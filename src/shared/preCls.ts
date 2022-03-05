export function getPreCls(
  name: string,
  preName?: string
): string {
  return (preName ? preName : 'K4kit') + '_' + name
}