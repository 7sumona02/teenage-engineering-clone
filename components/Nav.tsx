import React from 'react'

const Nav = () => {
  return (
    <div>
        <div className='flex gap-14 px-20 pt-1'>
        <NavItem 
          title="teenage engineering" 
          subtitle="2025 january" 
          image="" 
          width="10vw"
        />
        <NavItem 
          title="products" 
          subtitle="audio & synthesizers wireless speakers designs" 
          width="8vw"
        />
        <NavItem 
          title="store" 
          subtitle="view cart checkout" 
          image="/images/dazai.jpg" 
          width="5vw"
        />
        <NavItem 
          title="now" 
          subtitle="newsletter instagram ems" 
          image="/images/dazai.jpg" 
          width="5vw"
        />
        <NavItem 
          title="support" 
          subtitle="guides downloads support portal" 
          image="/images/dazai.jpg" 
          width="6vw"
        />
        <span className='mt-2 text-[8px] w-[7.5vw] leading-[10px] tracking-wide'>
            <span className="text-zinc-400">10代工学は未来の製品と</span>
            <span className="text-zinc-400">コミュニケーションを生</span>
            <span className="text-zinc-400">み出すスタジオです。</span>
            <span className="text-zinc-400">私たちのミッションは</span>
            <span className="text-zinc-400">先端工学を用いて上質で</span>
            <span className="text-zinc-400">機能的なデザインの</span>
            <span className="text-zinc-400">製品を作り出すことです。</span>
            <span className="text-zinc-400">是非、新たなスタイルで</span>
            <span className="text-zinc-400">音楽をお楽しみください。</span>
        </span>

        <img src='/images/logo.jpg' className='size-24 mt-2' />
        </div>
    </div>
  )
}

interface NavItemProps {
    title: string;
    subtitle: string;
    image?: string;
    width?: string; 
  }

const NavItem: React.FC<NavItemProps> = ({ title, subtitle, image, width }) => {
    return (
      <div className='flex items-start gap-4'>
        {image && <img src={image} alt={title} className='w-14 mt-2' />} {/* Conditional rendering of the image */}
        <div>
          <div className='w-[2vw] text-2xl font-sans font-extralight text-first tracking-wide'>
            {title.split('\n').map((line, index) => (
              <div key={index}>{line}</div> // Split title into lines if needed
            ))}
          </div>
          <div className={`mt-2 text-xs font-sans font-extralight text-first leading-[14px]`} style={{ width }}>
          {subtitle}
          </div>
        </div>
      </div>
    );
  };

export default Nav