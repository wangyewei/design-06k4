import RowLayout, { Content, Footer, Header } from './KLayout'

export type { BasicProps as LayoutProps } from './KLayout'

type RowLayoutType = typeof RowLayout

interface LayoutType extends RowLayoutType {
  Header: typeof Header,
  Footer: typeof Footer,
  Content: typeof Content,
}

const KLayout = RowLayout as LayoutType

KLayout.Header = Header
KLayout.Footer = Footer
KLayout.Content = Content

export default KLayout