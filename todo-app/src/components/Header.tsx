import { ReactNode } from 'react'

type HeaderProps = {
    children: ReactNode;
    image: {
        src:string;
        alt:string;
    };
}

const Header = ({image, children}: HeaderProps) => {
  return (
    <div style={{width:'100vw', backgroundColor:'blueviolet', padding:'0rem', margin:'0rem'}}>
        <img src={image.src} alt={image.alt} style={{borderRadius: '10rem', paddingTop:'2vh'}} />
        {children}
    </div>
  )
}

export default Header