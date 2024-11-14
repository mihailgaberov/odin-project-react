import * as React from "react";

function Wave() {
  console.log(">>> render Wave");
  return (
    <span role="img" aria-label="hand waving">
      👋
    </span>
  );
}

export default React.memo(Wave);
