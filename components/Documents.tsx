import React from "react";
import PlaceholderDocuments from "./PlaceholderDocuments";

const Documents = () => {
  return (
    <div className="flex flex-wrap p-5 bg-gray-100 justify-center lg:justify-start rounded-sm gap-5 max-w-7xl mx-auto">
      {/* map through documents */}

      {/* Placeholder */}
      <PlaceholderDocuments />
    </div>
  );
};

export default Documents;
