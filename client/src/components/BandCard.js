import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Card, Image, Text, Badge, Button, Group, Flex } from '@mantine/core';

const BandCard = ({ band }) => {

  let history = useHistory();

  // function viewBand(id) {
  //   history.push(`/bands/${id}`)
  // }

    return (
      <Flex
      gap="xl"
      direction="row"
      wrap="wrap"
      >
        <Card shadow="sm" p="lg" radius="md" withBorder className="band-card">
          <Card.Section>
            <Image
              src={band.image_url}
              height={160}
              alt={band.name}
              className="band-card-image"
            />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}><Link exact to={`/bands/${band.id}`}>{band.name}</Link></Text>
            <Badge color="red" variant="light">
            {band.genre}
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
            {band.secondary_genre}
          </Text>

          <Text size="sm" color="dimmed">
            {band.hometown}
          </Text>
      </Card>
    </Flex>
    );
  };

// original code
// const BandCard = ({ band }) => {
//   return (
//     <>
//       <h1>{band.name}</h1>
//       <img src={band.image_url} alt={band.name} />
//       <p>{band.genre}</p>
//       <p>{band.secondary_genre}</p>
//       <p>{band.hometown}</p>
//     </>
//   );
// };

export default BandCard;
