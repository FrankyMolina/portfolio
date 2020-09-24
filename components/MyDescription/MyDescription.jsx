import TechStack from '../TechStack';

import styles from '../MyDescription/MyDescription.module.scss';

const techs = [
  'React.js',
  'Next.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'HTML5',
  'CSS3',
  'Sass',
  'JavaScript',
  'Git',
];

export default function MyDescription() {
  return (
    <div className={styles.MyDescription}>
      <img src="/have a nice day 1000.png" alt="have a nice day image" />
      <div>
        <p>
          Ea voluptate tempor cillum ad. Elit quis ut reprehenderit non dolore
          laborum non id do nostrud. Veniam culpa deserunt cupidatat dolore
          labore nostrud sunt esse in. Aute sunt minim commodo aliqua labore
          nisi.
        </p>

        <TechStack techs={techs} />
      </div>
    </div>
  );
}
