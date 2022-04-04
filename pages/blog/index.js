import fs from "fs";
import * as matter from "gray-matter";
import Header from "../../components/layout/Header";
import { useRouter } from "next/router";

export default function BlogHome(props) {
  const posts = props.posts;
  const router = useRouter();

  const getPost = (name) => {
    router.push({
      pathname: `/blog/${name}`,
    });
  };

  return (
    <>
      <Header />
      <main>
        <section className="blog flex flex-col gap-2">
          {posts &&
            posts.map((post) => (
              <div
                key={post.id}
                className="flex flex-col cursor-pointer"
                onClick={() => getPost(post.file)}
              >
                <span className="text-2xl font-bold">{post.title}</span>
                <span className="text-lg">{post.desc}</span>
              </div>
            ))}
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  let posts = [];

  // Get the posts from '~/posts' folder
  const files = fs.readdirSync(process.cwd() + "/posts");
  files.forEach((file, index) => {
    // Use matter to get the metaData from each md & push
    const fileData = fs.readFileSync(process.cwd() + "/posts/" + file, "utf-8");
    const { data: metaData } = matter(fileData);
    posts.push({
      id: index,
      file: file.substr(0, file.lastIndexOf(".")) || file,
      title: metaData.title,
      desc: metaData.desc,
      date: metaData.date,
    });
  });

  return {
    props: {
      posts,
    },
  };
}
