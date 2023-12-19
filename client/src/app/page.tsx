import { Post } from "@/components/post";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CloudImage } from "@/lib/types";
import { getImages } from "@/api/images";
import { notFound, redirect } from "next/navigation";
import { getAuth } from "@/api/auth";
import { MessageList } from "@/components/messages";

export default async function Home() {
  try {
    const { token, user } = await getAuth();
    if (!token || !user) {
      redirect("/auth/login");
    }
  } catch (error) {
    console.log(error);
    notFound();
  }

  // const images = await getImages();

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center">
        {/* {images ? (
          images.map((image: CloudImage) => (
            <Post key={image.id} imageURL={image.url} />
          ))
        ) : ( */}
        <p className="pt-20 text-gray-500">No posts...</p>
        <MessageList />
        {/* // )} */}
      </main>
      <Footer />
    </>
  );
}
