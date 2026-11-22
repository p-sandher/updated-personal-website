import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Have questions or want to collaborate?<br className='sm:block hidden' />
        I&apos;m just a message away—reach out to me!
      </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
}
