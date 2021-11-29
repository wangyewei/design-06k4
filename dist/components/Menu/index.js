import KMenu from './KMenu';
import KSubMenu from './KSubMenu';
import KmenuItem from './KMenuItem';
var TransMenu = KMenu;
TransMenu.Item = KmenuItem;
TransMenu.SubMenu = KSubMenu;
export default TransMenu;
