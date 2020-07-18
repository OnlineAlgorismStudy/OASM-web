import React from "react";

const check_complete = (complates) => {
  const list = complates.map((complate) => (
    <a
      key={complate.github}
      href={
        "https://github.com/OnlineAlgorismStudy/OnAlSt/blob/master/" +
        filesize.data.find((file) => file.user.split("_")[0] === complate.key)
          .name
      }
      target={"_blank"}
      rel="noopener noreferrer"
    >
      <Badge style={{ fontSize: 18 }} variant="primary">
        {complate.name}
      </Badge>{" "}
    </a>
  ));

  return (
    <div>
      <p>달성자</p>
      <hr />
      {list}
    </div>
  );
};

export default check_complete;
