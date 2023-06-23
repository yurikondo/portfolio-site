import React from "react";

type Props = {
  id: string;
  title: string;
  desc: string;
};

const SectionTitle = (props: Props) => {
  const { id, title, desc } = props;
  return (
    <div>
      <h2 className="secondary-title">{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default SectionTitle;
