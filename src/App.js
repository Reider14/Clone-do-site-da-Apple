import './App.css';
import {
  Header, 
  TextHeader,
  ItemHeader,
  OptionsProductsApple,
  ItemOptionProductApple,
  TextOptionProductApple,
  SpanNewOptionProductApple,
  ApplePromoBlock,
  BannerArea,
  LineButtom,
  PurchaseButtom,
  BannerIphone16Pro,
  SpaceBanners,
  BannerIphone16,
  SpaceBanners2,
  LogoIpaidAir,
  BannerIpadAir
} from './AppStyled'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faApple} from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faBagShopping, faChevronRight} from '@fortawesome/free-solid-svg-icons';

import macbookair_light_ from './assets/images/Store Educacional/macbookair_light_.png';
import macbook_pro_light from './assets/images/Store Educacional/macbook_pro_light.png';
import imac_light from './assets/images/Store Educacional/imac_light.png';
import mac_mini_light from './assets/images/Store Educacional/mac_mini_light.png';
import mac_studio_light from './assets/images/Store Educacional/mac_studio_light.png';
import mac_pro_light from './assets/images/Store Educacional/mac_pro_light.png';
import mac_compare_light from './assets/images/Store Educacional/mac_compare_light.png';
import displays_light from './assets/images/Store Educacional/displays_light.png';
import mac_accessories_light from './assets/images/Store Educacional/mac_accessories_light.png';
import mac_os_light from './assets/images/Store Educacional/mac_os_light.png';
import mac_shop_light from './assets/images/Store Educacional/mac_shop_light.png';
import iphone16pro from './assets/images/iphone16pro.jpg';
import iphone16 from './assets/images/iphone16.jpg';
import logoIpadAir from './assets/images/logoIpadAir.png';
import ipadAir from './assets/images/ipadAir.jpg';
import apple_intelligence_headline from './assets/images/apple_intelligence_headline.png';

function App() {
  return (
    <div>
      <Header>
        <ItemHeader>
        <FontAwesomeIcon icon={faApple} style={{color: '#f5f5f7', fontSize: '18px', opacity:'.8', cursor: 'pointer'}}></FontAwesomeIcon>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Store</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Mac</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>IPad</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>IPhone</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Watch</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Vision</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>AirPods</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>TV & Home</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Entertainment</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Accessories</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Support</TextHeader>
        </ItemHeader>

        <ItemHeader>
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: '#f5f5f7', fontSize: '15px', opacity: '.8', cursor: 'pointer'}}></FontAwesomeIcon>
        </ItemHeader>

        <ItemHeader>
          <FontAwesomeIcon icon={faBagShopping} style={{color: '#f5f5f7', fontSize: '15px', opacity: '.8', cursor: 'pointer', marginTop:'-2px'}}></FontAwesomeIcon>
        </ItemHeader  >
      </Header>

      <OptionsProductsApple>
        <ItemOptionProductApple>
          <img src={macbookair_light_} alt='imacAir'></img>
          <TextOptionProductApple>MacBook Air</TextOptionProductApple>
          <SpanNewOptionProductApple>New</SpanNewOptionProductApple>
        </ItemOptionProductApple>

        <ItemOptionProductApple>
          <img src={macbook_pro_light} alt='imacPro'></img>
          <TextOptionProductApple>MacBook Pro</TextOptionProductApple>
          <SpanNewOptionProductApple>New</SpanNewOptionProductApple>
        </ItemOptionProductApple>

        <ItemOptionProductApple>
          <img src={imac_light} alt='imacPro'></img>
          <TextOptionProductApple>iMac de 24 pol.</TextOptionProductApple>
        </ItemOptionProductApple>

        <ItemOptionProductApple>
          <img src={mac_mini_light} width={27} style={{marginTop: '-29px'}} alt='imacDisplay'></img>
          <TextOptionProductApple>Mac mini</TextOptionProductApple>
        </ItemOptionProductApple>

        <ItemOptionProductApple>
          <img src={mac_studio_light} width={37} style={{marginTop: '-19px'}}alt='imacDisplay'></img>
          <TextOptionProductApple>Mac Studio</TextOptionProductApple>
        </ItemOptionProductApple>

        <ItemOptionProductApple>
          <img src={mac_pro_light} alt='imacDisplay'></img>
          <TextOptionProductApple>Mac Pro</TextOptionProductApple>
        </ItemOptionProductApple>

        <ItemOptionProductApple>
          <img src={mac_compare_light} alt='imacDisplay'></img>
          <TextOptionProductApple>Compare</TextOptionProductApple>
        </ItemOptionProductApple>

        <ItemOptionProductApple>
          <img src={displays_light} alt='imacDisplay'></img>
          <TextOptionProductApple>Display</TextOptionProductApple>
        </ItemOptionProductApple>

        <ItemOptionProductApple>
          <img src={mac_accessories_light} alt='imacDisplay'></img>
          <TextOptionProductApple>Accessories</TextOptionProductApple>
        </ItemOptionProductApple>

        <ItemOptionProductApple>
          <img src={mac_os_light} alt='imacDisplay'></img>
          <TextOptionProductApple>Montery</TextOptionProductApple>
        </ItemOptionProductApple>

        <ItemOptionProductApple>
          <img src={mac_shop_light} alt='imacDisplay'></img>
          <TextOptionProductApple>Compare Mac</TextOptionProductApple>
        </ItemOptionProductApple>
      </OptionsProductsApple>

      <ApplePromoBlock>
        <p>Economize na compra do MacBook Air e do MacBook Pro 13 de polegadas na Apple Store Educational. <a href='https://apple.com.br'> Comprar <FontAwesomeIcon icon={faChevronRight} style={{fontSize: '9px'}}></FontAwesomeIcon></a></p>
      </ApplePromoBlock>

      <BannerArea> 
        <h1>iPhone 16 Pro</h1>
        <p>Hello, Apple Inteligence.</p>
        <LineButtom>
        <PurchaseButtom>Learn More</PurchaseButtom>        
        <PurchaseButtom style={{background: 'white', color: "#0071e3"}} >Buy</PurchaseButtom>
        </LineButtom>

        <BannerIphone16Pro>
          <img src={iphone16pro} width={'1482px'} height={'600px'} alt='iphone16pro'></img>
        </BannerIphone16Pro> 
      </BannerArea>

      <SpaceBanners></SpaceBanners>

      <BannerArea> 
        <h1>iPhone 16</h1>
        <p>Hello, Apple Inteligence.</p>
        <LineButtom>
        <PurchaseButtom>Learn More</PurchaseButtom>        
        <PurchaseButtom style={{background: 'white', color: "#0071e3"}} >Buy</PurchaseButtom>
        </LineButtom>

        <BannerIphone16>
          <img src={iphone16} width={'1482px'} height={'600px'} alt='iphone16pro'></img>
        </BannerIphone16> 
      </BannerArea>

      <SpaceBanners2></SpaceBanners2>

      <BannerArea>
        <LogoIpaidAir>
          <img src={logoIpadAir} width={220} alt='logoIpadAir'></img>
        </LogoIpaidAir>

        <p style={{marginTop: '8px', color: 'black'}}>Two sizes. Faster chip. Does it all.</p>
        <LineButtom style={{marginTop: -10}}>
        <PurchaseButtom>Learn More</PurchaseButtom>        
        <PurchaseButtom style={{background: 'white', color: "#0071e3"}} >Buy</PurchaseButtom>
        </LineButtom>

        <BannerIpadAir>
          <img src={ipadAir}alt='ipadAir' height={550} width={1482} ></img>
        </BannerIpadAir>

        <img src={apple_intelligence_headline} width={350} style={{marginTop: -140}}alt='AppleInteligence'></img>
      </BannerArea>
      
      
    </div>
  );
}

export default App;
