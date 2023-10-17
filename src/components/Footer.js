import tram from '../img/tram.png'
function Footer() {
    return(
        <div className="footer">
           
            <img className='footer__img' src={tram} alt="tram" /> 
            <a href="#input">New Search</a>
            <div className="footer__footnotes">
                <p>Sample project not for commercial use. Utilizing nativia API.</p>
                <small>made and designed by <strong>maria sidko</strong></small>
            </div>
        </div>
    )
};
export default Footer;
