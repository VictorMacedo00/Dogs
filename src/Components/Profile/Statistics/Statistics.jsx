import React, { useEffect } from "react";
import Head from "../../Helper/Head";
import { useFetch } from "../../../Hooks/useFetch";
import { STATS_GET } from "../../../Api/Api";
import Loading from "../../Helper/Loading";
import { Error } from "../../Helper/Error";
import StatsGraphs from "./StatsGraphs/StatsGraphs";

const Statistics = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        <Head title="EStatísticas" description="Home Dogs" />
        <StatsGraphs data={data} />
      </div>
    );
  else return null;
};

export default Statistics;
