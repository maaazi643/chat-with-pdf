"use client";

import { CircleArrowDown, RocketIcon } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const UploadPage = () => {
  const { progress, status, fileId, handleUpload } = useUpload();
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    // Do something with the files

    const file = acceptedFiles[0];
    if (file) {
      // await handleUpload
      await handleUpload(file);
    } else {
      // Do Nothing
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive, isFocused } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "application/pdf": [".pdf"],
    },
  });
  return (
    <div className="flex flex-col gap-4 items-center max-w-7xl mx-auto">
      <div
        {...getRootProps()}
        className={`p-10 border-2 border-dashed mt-10 w-[90%] border-indigo-600 rounded-lg h-96 flex items-center text-center justify-center ${
          isFocused || isDragActive ? "bg-indigo-300" : "bg-indigo-100"
        }`}
      >
        <input {...getInputProps()} />

        <div className=" flex flex-col items-center justify-center">
          {isDragActive ? (
            <>
              <RocketIcon className="h-20 w-20 animate-ping text-indigo-600" />
              <p className="text-indigo-600">Drop the files here ...</p>
            </>
          ) : (
            <>
              <CircleArrowDown className="h-20 w-20 animate-bounce text-indigo-600" />
              <p className="text-indigo-600">
                Drag &apos;n&apos; drop some files here, or click to select
                files
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
