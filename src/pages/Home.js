import hero from '../assets/portfolio-pic.png'

export default function Home () {
    const profImg = hero
    
    return(
        <div className="home-box">
            <div className="hero-img-box">
                <img className="hero-img" src={profImg} alt="artist girl"></img>
            </div>
            <div className="about-box">
                <h1 className="hero-text">Hello there,</h1>
                <p className="about-text">My name is Esme, and I'm an aspiring graphic artist. I love to draw, and my favorite thing to use is my digital sketch pad. I have an entrepreneurial spirit and decided to offer commissions, as well as sell merch of some of my favorite pieces. Check it out <span><a className='inline-navLink' href="/merch">here</a> </span></p>
            </div>
        </div>
    )
}