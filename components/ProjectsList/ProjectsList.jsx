import { useState } from "react";
import Link from "next/link";

import projectsInfo from "../../constants/projectsInfo.json";

import styles from "./ProjectsList.module.scss";

export default function ProjectsList() {
  const [searchState, setSearchState] = useState("");

  function handleChange(ev) {
    const value = ev.target.value;
    setSearchState(value);
  }

  function handleClick() {
    setSearchState("");
  }

  const searchFormatted = searchState.trim().toLowerCase();

  return (
    <div className={styles.projectsListContainer}>
      <div className={styles.searchBar}>
        <input
          type="text"
          value={searchState}
          name="searchBar"
          onChange={handleChange}
          placeholder="Tech name or Project name"
        />
        <button onClick={handleClick}>✖</button>
      </div>

      <div className={styles.projectList}>
        {projectsInfo
          .filter(
            (project) =>
              project.tech_used.filter((tech) => tech.toLowerCase().includes(searchFormatted)).length ||
              project.name.toLowerCase().includes(searchFormatted)
          )
          .map((project) => {
            return (
              <div key={project.id} className={styles.singleProject}>
                <img src={project.img} alt={project.img_alt} />
                <h3>{project.name}</h3>
                <p>
                  {project.tech_used.map((tech) => {
                    return `| ${tech} |`;
                  })}
                </p>

                <div className={styles.projectButton}>
                  <Link href="/project/[id]" as={`/project/${project.id}`}>
                    <a>Hmm lets see more</a>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
