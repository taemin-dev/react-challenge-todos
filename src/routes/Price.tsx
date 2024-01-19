import { useOutletContext } from "react-router-dom";
import { IPriceData } from "./Coin";
import ApexChart from "react-apexcharts";

interface IPriceContext {
  price: IPriceData;
}

function Price() {
  const { price } = useOutletContext<IPriceContext>();
  const ath_date = new Date(price?.quotes?.USD?.ath_date);
  return (
    <ApexChart
      type="bar"
      series={[
        {
          name: "Now",
          data: [price?.quotes?.USD?.price, price?.quotes?.USD?.ath_price].map(
            (price) => Math.floor(price)
          ),
        },
      ]}
      options={{
        theme: {
          mode: "dark",
        },
        chart: {
          type: "bar",
          width: 1000,
          height: 300,
          background: "transparent",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            columnWidth: 70,
          },
        },
        xaxis: {
          categories: [
            "Now",
            `All Time High ${
              ath_date.getMonth() + 1
            }/${ath_date.getDate()}/${ath_date.getFullYear()}`,
          ],
        },
        colors: ["#0099ff"],
      }}
    />
  );
}
export default Price;
