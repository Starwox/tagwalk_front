import './Footer.css';
import Input from '../Input/Input';

function Footer() {
  return (
    <footer className='Footer'>
        <div className='footer-gap'>
            <div>
                <h4>Purchase the latest report</h4>
                <img src="https://cdn.tag-walk.com/custom,fit_cover,width_1152,height_702/previewcatwalkreportss24tagwalk1111-405b9656.png" alt="Catwalk report spring/summer 24" />
            </div>
            <div>
                <h4>Main sections</h4>
                <ul>
                    <li>
                        <a href="#">womenswear</a>
                    </li>
                    <li>
                        <a href="#">menswear</a>
                    </li>
                    <li>
                        <a href="#">couture</a>
                    </li>
                    <li>
                        <a href="#">Models</a>
                    </li>
                    <li>
                        <a href="#/">Trends</a>
                    </li>
                    <li>
                        <a href="#">News</a>
                    </li>
                    <li>
                        <a href="#">Reports</a>
                    </li>
                    <li>
                        <a href="#">Street</a>
                    </li>
                    <li>
                        <a href="#">Tagbook</a>
                    </li>
                    <li>
                        <a href="#">Press</a>
                    </li>
                </ul>
            </div>
            <div>
                <h4>Resource</h4>
                <ul>
                    <li>
                        <a href="#">Legal</a>
                    </li>
                    <li>
                        <a href="#">Terms and conditions</a>
                    </li>
                    <li>
                        <a href="#">Cookies policy</a>
                    </li>
                    <li>
                        <a href="#">Data privacy policy</a>
                    </li>
                </ul>
            </div>
        <div>
            <h4>Contact us</h4>
            <ul>
                <li>
                    <a href="#">Join our team</a>
                </li>
                <li>
                    <a href="#">Brand visibility</a>
                </li>
            </ul>
        </div>
        </div>
        <div className='footer-gap'>
            <div>
                <h4>Subscribe to our newsletter</h4>
                <div className="newsletter-form">
                    <form className="single-input-form">
                        <Input
                        type={'email'}
                        placeholder={"Enter your email here"}
                        name={"email"}
                        showBtn={true}
                        />
                    </form>
                    <p>By subscribing, you agree to receive our newsletters. For more information, see our
                    <a href="/en/page/data-privacy-policy">privacy policy</a>.
                </p>
            </div>        
            </div>
            <div className="stores">
                <h4>Download the app</h4>
                <div className='d-flex flex-column'>
                    <img src="https://cdn.tag-walk.com/assets/google-play-badge.png" alt="Get it on Google Play" />
                    <img src="https://cdn.tag-walk.com/assets/app-store-badge.svg" alt="Download on the App Store" />
                </div>
            </div>
            <div className="socials">
                <h4>Follow us</h4>
                <div>
                <a href="https://www.facebook.com/tagwalk/" target="_blank">
                    <img src="https://cdn.tag-walk.com/assets/facebook-icon.png" alt="Follow Tagwalk on Facebook" />
                </a>
                <a href="https://www.tiktok.com/@tagwalk" target="_blank">
                    <img src="https://cdn.tag-walk.com/assets/tik-tok-icon.png" alt="Follow Tagwalk on TikTok" />
                </a>
                <a href="https://www.instagram.com/tagwalk/" target="_blank">
                    <img src="https://cdn.tag-walk.com/assets/instagram-icon.png" alt="Follow Tagwalk on Instagram" />
                </a>
                <a href="https://fr.linkedin.com/company/tag-walk" target="_blank">
                    <img src="https://cdn.tag-walk.com/assets/linked-in-icon.png" alt="Follow Tagwalk on LinkedIn" />
                </a>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
