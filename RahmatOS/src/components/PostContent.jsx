
import ReactMarkdown from 'react-markdown';

const PostContent = ({ post }) => {
  const { content, publishedAt } = post;

  const dateString = new Date(publishedAt).toLocaleDateString("en-GB", {
    dateStyle: "full",
  });
  const timeString = new Date(publishedAt).toLocaleTimeString("en-GB", {
    timeStyle: "short",
  });

  return (
    <div >
        <div className="pb-8">
      <time dateTime={publishedAt}>
        {dateString} {timeString}
      </time>
      </div>
      {/* <ReactMarkdown>{content.markdown}</ReactMarkdown> */}
      <ReactMarkdown className="gap-x-2" children={content.markdown} />

 
    </div>
  );
};

export default PostContent;
