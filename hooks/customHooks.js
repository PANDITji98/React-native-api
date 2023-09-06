import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const config = {
          headers: {
            "s-id":
              "CKEY0F1HNJGSZHJFQPYB5HBMJEM79K26YQDJTY0RX7MVPHGHXTKALSTVARSDAYKUGF2Y",
          },
        };

        const url = "https://stagingsite.livelaw.in/dev/h-api/news";
        const response = await axios.get(url, config);
        setData(response.data.news);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };

    getData();
  }, [url]);

  return { data , error , isLoading};
};


export const getLiveDate = (mapValue) => {
  const currentDate = new Date()
  const ISToffSet = 330;
  let offset= ISToffSet*60*1000;
  let ISTTime = new Date(currentDate.getTime())
  let ISTHours = String(ISTTime).split("2023 ")[1].slice(0,2)
  let result = Number(mapValue.date_news.split(" ")[1].slice(0,2)) - Number(ISTHours)
  return result
}