import { Box } from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';

export function Markdown({ children }) {
  return (
    <Box className="markdown">
      <ReactMarkdown skipHtml components={ChakraUIRenderer()}>
        {children}
      </ReactMarkdown>
    </Box>
  );
}
