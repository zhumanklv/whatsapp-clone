import './Icon.css'


const Icon = ({src, alt, width, height, borderRadiusFalse}) => {
    return <div style={{width: width, height: height, maxHeight: height, borderRadius: borderRadiusFalse ? '0' : '50%', overflow: 'hidden'}}>
        <img src={src} alt={alt} className='icon' style={{maxWidth: width, maxHeight: height}}/>
    </div>
}

export default Icon;