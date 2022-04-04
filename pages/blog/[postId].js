import fs from "fs";
import * as matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Header from "../../components/layout/Header";

export default function GetPost(props) {
  const post = props.post;
  if (post) {
    return (
      <>
        <Header blog={true} />
        <main>
          <section>
            <div className="Markdown">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </section>
        </main>
      </>
    );
  } else {
    return (
      <>
        <Header blog={true} />
        <main>
          <p>{post === undefined ? "loading" : "Post not found"}</p>
        </main>
      </>
    );
  }
}

export async function getStaticProps({ params }) {
  // Get the post
  const files = fs.readdirSync(process.cwd() + "/posts");
  let post = null;

  try {
    const file = files.filter((x) => x === params.postId + ".md");
    // Use matter to get the metaData from each md & push
    const fileData = fs.readFileSync(process.cwd() + "/posts/" + file, "utf-8");
    const { data: metaData, content } = matter(fileData);
    post = {
      title: metaData.title,
      desc: metaData.desc,
      date: metaData.date,
      content,
    };
  } catch (e) {
    console.log(`Failed to find ${params.postId}`);
  }

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
