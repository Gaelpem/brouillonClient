import classes from './Contact.module.css';
import Logo from '../component/Logo';
import Navigations from '../component/Navigations';
import Informations from '../component/Informations';
import Formulaire from '../component/Formulaire';
import Footer from '../component/footer/Footer';

const Contact = () => {
  return (
    <div className={classes.container}>

      <header className={classes.header}>

        <div className={classes.link}>
          <Logo />
          <Navigations />
        </div>
      </header>


      <section className={classes.contact}>

      <h1 className={classes.titre}>
                –– Une demande particulière? <span style={{color : 'grey'}}>Parlons-en.</span>
       </h1>

        <Formulaire/>
        
        <div className={classes.information}>
        <Informations/>
        </div>
    
      </section>
      <Footer/>
    </div>
  );
};

export default Contact;
