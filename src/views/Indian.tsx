import { Link, useParams } from "react-router-dom";
import { Loading } from ".";

import { Container, Card, CardContainer, CardImage, Grid } from "../components";
import { useRecipes } from "../hooks";

const Indian = () => {
  const { category } = useParams();
  const { data, loading } = useRecipes(1, category);
  const recipes = data?.recipes;

  if (loading) {
    return <Loading />;
  }
  return (
    <Container className="my-2" maxWidth="lg">
      <Grid container gap={2}>
        {recipes?.map((recipe: any) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={recipe.recipe_id}>
            <Card style={{ height: "100%" }} variant="outlined">
              <Link to={`/${recipe.recipe_id}`}>
                <CardImage
                  height={120}
                  src={recipe.image.url}
                  alt={recipe.image.title}
                />
              </Link>
              <CardContainer>
                <p>{recipe.title}</p>
              </CardContainer>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Indian;
