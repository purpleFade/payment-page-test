import React, { ReactNode } from "react";
import { PaymentPageSprite } from "../../components/icon/svgSprites/paymentPageSprite";
import "./HomePageLayout.scss";

const HomepageLayout: React.FC<{ children: ReactNode }> = (props) => {
  const { children } = props;

  return (
    <div className='homepage'>
      <header className='header'>
        <p className='header__item en'>Eng</p>
        <p className='header__item uk'>Укр</p>
      </header>

      <div className="children">
        <PaymentPageSprite />
        {children}
      </div>

      <footer className='footer'>Powered by <strong>Solid</strong></footer>
    </div>
  );
};

export default HomepageLayout;
