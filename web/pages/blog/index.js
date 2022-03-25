import fs from "fs";
import * as matter from "gray-matter";
import Header from "../../components/layout/Header";

export default function BlogHome(props) {
  const posts = props.posts;
  console.log(posts);

  return (
    <>
      <Header />
      <main className="blog">
        {posts &&
          posts.map((post) => (
            <div key={post.id} className="flex flex-col">
              <span className="text-2xl font-bold">{post.title}</span>
              <span className="text-lg">{post.desc}</span>
            </div>
          ))}
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
    posts.push({ id: index, title: metaData.title, desc: metaData.desc });
  });

  return {
    props: {
      posts,
    },
  };
}
