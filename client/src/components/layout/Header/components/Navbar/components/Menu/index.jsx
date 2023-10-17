import { Item, Link, Dropdown } from './components';

const Menu = ({ children }) => {
  return <ul>{children}</ul>;
};

Menu.Item = Item;
Menu.Link = Link;
Menu.Dropdown = Dropdown;

export default Menu;
