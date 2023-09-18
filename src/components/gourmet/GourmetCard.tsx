import { Card } from "@nextui-org/react";

export type GourmetCardProps = {
  name: string;
  logo_image: string;
};

export const GourmetCard = (props: GourmetCardProps) => {
  const { name, logo_image } = props;

  return (
    <Card>
      <Card.Body css={{ py: "$2" }}>
        <img alt="nextui logo" src={logo_image} width="100px" height="100px" />
        {name}
      </Card.Body>
    </Card>
  );
};
