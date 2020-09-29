import TechStack from '../TechStack';

import styles from '../MyDescription/MyDescription.module.scss';

export default function MyDescription() {
  return (
    <div className={styles.MyDescription}>
      <img src="/have a nice day 1000.png" alt="have a nice day image" />
      <div>
        <h3>About me...</h3>
        <p>
          I am a very curious person, and since I was young I was attracted by
          the world of development, new technologies, and the possibilities that
          this sector offers to develop myself as a person and as a
          professional. One of the aspects of programming that most encouraged
          me to begin was the possibility of making an idea, or a project, a
          reality, with no more need than a computer and an internet connection.
        </p>

        <h3>What do you look for in a company culture?</h3>
        <p>
          I would love to be part of a company that is enthusiastic about its
          project, and that takes great care of its human capital and its
          working environment.
        </p>
      </div>
      <TechStack />
    </div>
  );
}
