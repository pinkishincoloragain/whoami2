import React from "react";
import { Directory } from "../devmode/Directory";

export const History = ({ history }) => {
  return (
    <>
      {history.map((entry, index) => (
        <div key={entry.command + index}>
          <div className="flex-row w-full">
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
