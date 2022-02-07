import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { Loading } from ".";
import {
  Card,
  Container,
  Divider,
  Grid,
  Stack,
  Image,
  Spinner,
} from "../components";
import { TimeIcon, UserGroupIcon } from "../icons";

const Recipe = () => {
  const { recipe_id } = useParams();
  const { data, error } = useSWR(`/recipes/${recipe_id}`);
  const recipe = data?.data;

  if (!data && !error) {
    return <Loading />;
  }
  return (
    <React.Fragment>
      <Container className="my-3" maxWidth="md">
        <Grid container gap={2}>
          <Grid item xs={12} sm={6}>
            <Image src={recipe.image.url} alt="Chilli Idli Recipe" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className="full-height" variant="outlined">
              <Stack className="py-2 px-2">
                <h1 className="text-center">{recipe.title}</h1>
                <p className="text-center">{recipe.description}</p>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container className="my-2" maxWidth="md">
        <Grid container gap={1}>
          {recipe.meta.map((meta: any) => (
            <Grid key={meta.label} item xs={6} md={3}>
              <Card className="py-1" variant="outlined">
                <Stack alignItems="center">
                  {meta.label.includes("Time") && (
                    <TimeIcon className="color-tertiary" />
                  )}
                  {meta.label.includes("Servings") && (
                    <UserGroupIcon className="color-tertiary" />
                  )}
                  <p>{meta.label}</p>
                  <p>{meta.value}</p>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Divider className="my-2" />
        <Grid container className="my-2" gap={3}>
          <Grid item xs={12} sm={6}>
            <Stack>
              <h2>Ingredients:</h2>
              {recipe.ingredients.map((ingredient: any, index: number) => (
                <Stack key={ingredient} direction="row" alignItems="center">
                  <p>
                    {index + 1}
                    {"."}
                  </p>
                  <p className="px-1 py-1" key={ingredient}>
                    {ingredient}
                  </p>
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack gap={1}>
              <h2>How to make {recipe.title}</h2>
              {recipe.steps.map((step: any) => (
                <Card key={step.to_do} className="px-1 py-2" variant="outlined">
                  <Stack gap={2}>
                    <p>
                      Step: {step.step}/{recipe.steps.length}
                    </p>
                    <p className="px-1">{step.to_do}</p>
                  </Stack>
                </Card>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Recipe;
