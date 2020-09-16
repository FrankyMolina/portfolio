import styles from './ContactInfo.module.scss';

export default function ContactInfo({ customClass }) {
  return (
    <div className={customClass || styles.contact}>
      <div>
        <p>
          <a
            href="https://www.linkedin.com/in/franciscojaviermolinatorrejon/"
            target="_blank"
          >
            <img src="./linkedin logo.png" alt="linkedin logo" />

            {customClass
              ? 'https://www.linkedin.com/in/franciscojaviermolinatorrejon/'
              : 'LinkdIn'}
          </a>
        </p>
      </div>

      <div>
        <p>
          <a href="mailto:fjmolinatorrejon@gmail.com">
            <img src="./gmail logo.png" alt="gmail logo" />
            {customClass ? 'fjmolinatorrejon@gmail.com' : 'Gmail'}
          </a>
        </p>
      </div>

      <div>
        <p>
          <a href="https://github.com/FrankyMolina" target="_blank">
            <img src="./github logo.png" alt="github logo" />
            {customClass ? 'https://github.com/FrankyMolina' : 'Github'}
          </a>
        </p>
      </div>
    </div>
  );
}
