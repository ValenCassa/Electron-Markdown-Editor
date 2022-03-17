import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import rehypeRaw from 'rehype-raw';
import '../styles/Preview.css';

const CodeBlock = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        // eslint-disable-next-line react/no-children-prop
        children={String(children).replace(/\n$/, '')}
        style={oneDark}
        language={match[1]}
        PreTag="div"
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

const Preview = ({ value }) => {
  return (
    <ReactMarkdown
      // eslint-disable-next-line react/no-children-prop
      children={value}
      components={CodeBlock}
      skipHtml={false}
      rehypePlugins={[rehypeRaw]}
      className="markdown"
    />
  );
};

export default Preview;
