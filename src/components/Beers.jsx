import { useState, useEffect } from "react";
import Header from "./partials/Header";
import axios from "axios";
import { Link } from "react-router-dom";
import { Box, Flex, Grid, Image } from "@chakra-ui/react";

function Beers() {
  const [allBeers, setallBeers] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setallBeers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {allBeers.length === 0 ? (
        <div>Loading</div>
      ) : (
        <div>
          <Header />
          <Grid
            templateColumns={{
              base: "1fr",
              md: "1fr 1fr",
              lg: "1fr 1fr 1fr",
            }}
            gap={6}
          >
            {allBeers.map((beer) => (
              <Link to={"/beers/" + beer._id} key={beer._id}>
                <Flex justifyContent="space-between" alignItems="center">
                  <Image height="300px" src={beer.image_url} alt={beer.name} />
                  <Flex
                    justifyContent="flex-end"
                    alignItems="center"
                    direction="column"
                    gap="10px"
                  >
                    <h3>{beer.name}</h3>
                    <h4>{beer.tagline}</h4>
                    <p>
                      <strong>Contributed by: </strong>
                      {beer.contributed_by}
                    </p>
                  </Flex>
                </Flex>
              </Link>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
}

export default Beers;
