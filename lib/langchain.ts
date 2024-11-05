import { auth } from "@clerk/nextjs/server";
import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import pineconeClient from "./pinecone";
import { Index, RecordMetadata } from "@pinecone-database/pinecone";
import { adminDb } from "@/firebaseAdmin";

const model = new ChatOpenAI({
  apiKey: process.env.OPENAPI_API_KEY,
  modelName: "gpt-4o",
});

export const indexName = "chat-with-pdf";

export async function generateDocs(docId: string) {
  const { userId } = await auth()

  if(!userId) {
    throw new Error("User not found")
  }

  console.log("--- Fetching the download URL from Firebase... ---");
  
  const firebaseRef =  await adminDb.collection("users").doc(userId).collection("files").doc(docId).get()
  
  const downloadUrl = firebaseRef.data()?.downloadUrl

  if(!downloadUrl) {
    throw new Error("Download URL not found")
  }
  console.log(`--- Download URL fetched Successfully ${downloadUrl} ---`);

  // Fetch the PDF from the specified URL
  const response = await fetch(downloadUrl)

  // Load the PDF into a PDFDocument object
  const  data = await response.blob()
}

async function namespaceExists(
  index: Index<RecordMetadata>,
  namespace: string
) {
  if (namespace === null) throw new Error("No namespace value provided");
  const { namespaces } = await index.describeIndexStats();
  return namespaces?.[namespace] !== undefined;
}

export async function generateEmbeddingsInPineconeVectorStore(docId: string) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not found");
  }

  let pineconeVectorStore;

  console.log("Generating embeddings");

  const embeddings = new OpenAIEmbeddings();

  const index = await pineconeClient.index(indexName);

  const namespaceAlreadyExists = await namespaceExists(index, docId);

  if (namespaceAlreadyExists) {
    console.log(
      `--- Namespace ${docId} already exists, reusing existing embeddings... ---`
    );

    pineconeVectorStore = await PineconeStore.fromExistingIndex(embeddings, {
      pineconeIndex: index,
      namespace: docId,
    });

    return pineconeVectorStore;
  } else {
    // If namespace does not exist, download the PDF
    const splitDocs = 
  }
}
