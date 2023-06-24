import styles from "./Skillicons.module.scss";

const icons: string[] = [
  "figma",
  "nodejs",
  "react",
  "redux",
  "typescript",
  "javascript",
  "tailwindcss",
  "sass",
];

const SkillIcons = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {icons.map((icon, index) => (
          <div className={styles.slide}>
            <img
              key={index}
              src={`/imgs/icons/${icon}.svg`}
              height="80"
              width="80"
              alt={icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillIcons;
