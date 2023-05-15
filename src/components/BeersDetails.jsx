import { useState, useEffect } from "react";
import Header from "./partials/Header";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Grid } from "@chakra-ui/react";

function BeersDetail() {
  const { id } = useParams();
  const [allBeers, setallBeers] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );
      setallBeers([data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

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
                <img src={beer.image_url} alt={beer.name} />
                <div>
                  <div>
                    <div>
                      <h3>{beer.name}</h3>
                      <h4>{beer.tagline}</h4>
                    </div>
                    <div>
                      <h3>{beer.attenuation_level}</h3>
                    </div>
                    <div>
                      <h5>{beer.first_brewed}</h5>
                    </div>
                  </div>

                  <article>{beer.description}</article>

                  <p>
                    <strong>Contributed by: </strong>
                    {beer.contributed_by}
                  </p>
                </div>
              </Link>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
}

export default BeersDetail;
