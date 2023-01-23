import { HeaderContainer } from './styles';

import { useContext } from 'react';

import { OrdersContext } from '../../providers/OrdersProvider';

import { GrLocation } from 'react-icons/gr';
import { IoIosCart } from 'react-icons/io';

import logo from '../../assets/logo.png';

export const Header = () => {
  const { cart } = useContext(OrdersContext);

  const isCartEmpty = cart.length === 0;
  return (
    <HeaderContainer>
      <a href="/">
        <img src={logo} alt="Logo - Coffee Delivery" />
      </a>
      <div>
        <div>
          <GrLocation />
          <span>Itajubá, MG</span>
        </div>
        <a href="/order" title="Acessar o Carrinho">
          <IoIosCart />
          {!isCartEmpty && <span>{cart.length}</span>}
        </a>
      </div>
    </HeaderContainer>
  );
};
