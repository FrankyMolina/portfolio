import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import projectsInfo from '../../constants/projectsInfo.json';

import styles from '../../styles/[id].module.scss';

export default function Project() {
  const router = useRouter();
  const { id } = router.query;
  const projectData = projectsInfo.find((e) => id === e.id);

  return (
    <Layout>
      {projectData ? (
        <div className={styles.projectContainer}>
          <div className={styles.projectImageContainer}>
            <img src={projectData.img} alt={projectData.img_alt} />
          </div>

          <div className={styles.projectInfoContainer}>
            <h3>Name:</h3>
            <p>{projectData.name}</p>

            <h3>Release date:</h3>
            <p>{projectData.release_date}</p>

            <h3>Tech Stack:</h3>
            <p>
              {projectData.tech_used.map((techs) => {
                return `| ${techs} |`;
              })}
            </p>

            <h3>Description</h3>
            <p>{projectData.description}</p>


            <div className={styles.projectLinks}>
              <h3>Project URL</h3>

              <a href={projectData.URL} target="_blank">
                {projectData.URL}
              </a>

              <h3>Project Github URL</h3>
              <a href={projectData.github_URL} target="_blank">
                {projectData.github_URL}
              </a>
            </div>

            <h3>Project status</h3>
            <p>{projectData.status}</p>
          </div>
        </div>
      ) : null}
    </Layout>
  );
}
