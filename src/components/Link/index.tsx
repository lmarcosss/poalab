import {
  Link as ExternalLink,
  Image,
  Flex,
  Text,
} from '@chakra-ui/react';

export function Link({
  url,
  title,
  image,
  description,
}) {
  return (
    <Flex boxSize="160px" borderRadius="sm" justify="center" align="center">
      <ExternalLink href={url} isExternal>
        <Image
          maxH="150px"
          src={image}
          alt={title}
          title={title}
          objectFit="contain"
        />
        {description && (
          <Text>
            {description}
          </Text>
        )}
      </ExternalLink>
    </Flex>
  )
}
