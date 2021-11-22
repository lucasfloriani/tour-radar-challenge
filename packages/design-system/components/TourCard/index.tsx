import {
  Card,
  VisualSidebar,
  CardHeader,
  CardContent,
  ListContent,
  ListText,
  CardInfo,
  ImageFit,
  RatingWrapper,
  DescriptionText,
  PriceInfo,
  FlexTour,
  CheckIcon,
  CardActions,
  ActionButton,
} from "./style";
import Typography from "../Typography";
import Rating from "../Rating";
import { List, ListItem } from "../List";

type TourCardProps = {
  title: string;
  flexibleBooking?: boolean;
  reviews: number;
  rating: number;
  reviewDescription: string;
  mapImg: string;
  image: string;
  minAge: number;
  maxAge: number;
  destinations: string[];
  regions: string[];
  travelStyles: string[];
  operatedIn: string[];
  operator?: string;
  tourLength: number;
  price: number;
};

const TourCard = ({
  title,
  flexibleBooking = false,
  reviews,
  rating,
  reviewDescription,
  mapImg,
  image,
  destinations,
  minAge,
  maxAge,
  regions,
  travelStyles,
  operatedIn,
  operator,
  tourLength,
  price,
}: TourCardProps) => {
  return (
    <Card>
      <VisualSidebar>
        <ImageFit src={image} alt="Tour Image" />
        <ImageFit src={mapImg} alt="Map Image" />
      </VisualSidebar>
      <CardHeader>
        <Typography color="grayscale.200" weight="700" size="medium">
          {title}
        </Typography>
        <RatingWrapper>
          <Rating value={rating} />
          <Typography size="small" color="grayscale.300">
            {reviews} reviews
          </Typography>
        </RatingWrapper>
        <DescriptionText>"{reviewDescription}"</DescriptionText>
      </CardHeader>
      <CardContent>
        <List>
          <ListItem title="Destination">
            <ListContent texts={destinations} maxItems={5} />
          </ListItem>
          <ListItem title="Age Range">
            <ListText>
              {minAge} to {maxAge} year olds
            </ListText>
          </ListItem>
          <ListItem title="Regions">
            <ListContent texts={regions} maxItems={2} />
          </ListItem>
          <ListItem title="Travel Style">
            <ListContent texts={travelStyles} maxItems={3} />
          </ListItem>
          <ListItem title="Operated In">
            <ListContent texts={operatedIn} maxItems={3} />
          </ListItem>
          {/* TODO: Without info in the api */}
          {operator && (
            <ListItem title="Operator">
              <ListText>{operator}</ListText>
            </ListItem>
          )}
        </List>
      </CardContent>
      <CardInfo>
        <PriceInfo>
          <div>
            <Typography size="small" color="grayscale.300">
              Tour length
            </Typography>
            <Typography weight="700" size="normal" color="grayscale.200">
              {tourLength} days
            </Typography>
          </div>
          <div>
            <Typography size="normal" color="grayscale.200">
              From
            </Typography>
            <Typography size="large" color="secondary.100" weight="bold">
              ${price}
            </Typography>
          </div>
          <div>
            <Typography size="small" color="grayscale.300">
              Price per day
            </Typography>
            <Typography weight="700" size="small" color="grayscale.200">
              ${(price / tourLength).toFixed(2)}
            </Typography>
          </div>
        </PriceInfo>
        {flexibleBooking && (
          <FlexTour>
            <CheckIcon />
            <Typography weight="700">Book With Flexibility</Typography>
          </FlexTour>
        )}
        <CardActions>
          <ActionButton>View tour</ActionButton>
        </CardActions>
      </CardInfo>
    </Card>
  );
};

export default TourCard;
