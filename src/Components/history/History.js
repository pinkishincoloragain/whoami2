import React from "react";
import { useStyles } from "../containers/Styles";
import { Directory } from "../devmode/Directory";

export const History = ({ history }) => {
  let classes = useStyles();
  return (
    <>
      {history.map((entry, index) => (
        <div key={entry.command + index}>
          <div className="flex-row">
            <div className="flex-shrink">
              <Directory />
            </div>
            <div className="flex-grow">{entry.command}</div>
          </div>

          <p
            className="whitespace-pre-wrap mb-2"
            style={{ lineHeight: "normal" }}
            dangerouslySetInnerHTML={{ __html: entry.output }}
          />
        </div>
      ))}
    </>
  );
};

export default History;
