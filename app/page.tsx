import FooterNav from "./components/footerNav";
import HeaderNav from "./components/headerNav";
import classes from "./ui/landing.module.css";
import { inter } from "./ui/fonts";

export default function Home() {
  return (
    <div className="root">
      <div className={classes.landingPage}>
        <div className={classes.background}>
          {/* <div className={classes.blur}>
          </div> */}
          {/* <div className={classes.slash}></div> */}
        </div>
        <HeaderNav />
        <div className={classes.heroSection}>
          <div className={classes.landingContent}>
            <h1 className={`${classes.title} ${inter.className}`}>Find prefiltered contacts that are tailored to your needs</h1>
            <p className={classes.description}>Helping travel companies filter and find booking clients</p>
            <a href="/signup" className={`${classes.button} ${classes.signUpButton}`}>Start my 30-day free trial now</a>
          </div>
          <img className={classes.heroImage} alt="landing img" loading="eager" src="hero.png" />
        </div>
        <FooterNav />
      </div>
    </div>
  );
}
