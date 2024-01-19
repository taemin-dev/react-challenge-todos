import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import dayjs from "dayjs";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

function Chart() {
  const { coinId } = useParams();
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId!),
    {
      refetchInterval: 10 * 1000,
    }
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart"
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: "chart",
              data:
                data?.map((price) => {
                  return {
                    x: new Date(price?.time_close),
                    y: [price?.open, price?.high, price?.low, price?.close],
                  };
                }) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              width: 500,
              height: 300,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            xaxis: {
              type: "datetime",
              labels: {
                formatter: (val) => dayjs(val).format("MM/DD HH:mm"),
              },
            },
            yaxis: {
              labels: {
                formatter: (val) => String(Math.floor(val)),
              },
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: "#eb4d4b",
                  downward: "#686de0",
                },
              },
            },
          }}
        />
      )}
    </div>
  );
}
export default Chart;
