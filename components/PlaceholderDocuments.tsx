"use client";
import { PlusCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const PlaceholderDocuments = () => {
  const router = useRouter();

  const handleClick = () => {
    // Check if user is pro or free tier and if over the file limit, push to upgrade
    router.push("/dashboard/upload");
  };
  return (
    <Button
      onClick={handleClick}
      className="flex flex-col items-center justify-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400 hover:bg-gray-700"
    >
      <PlusCircleIcon className="h-16 w-16" />
      <p>Add a document</p>
    </Button>
  );
};

export default PlaceholderDocuments;
