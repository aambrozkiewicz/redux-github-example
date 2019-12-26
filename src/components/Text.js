import React from "react";

const Text = ({ count }) => {
    return count > 0 && <div>Found {count} repositories</div>;
}

export default Text;
