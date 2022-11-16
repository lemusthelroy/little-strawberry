import axios from "axios";
import { QueryCache, QueryClient, useQuery, useQueryClient } from "react-query";
import shuffle from "utilities/shuffle";

export interface ISumsResponse {
  x: number;
  y: number;
}

// const queryClient = useQueryClient();

// export const clearGetSumsQuery = (nums: number[]) => {
//   queryClient.invalidateQueries(["getSums", nums]);
// };

export const useGetSumsQuery = (nums: number[], enabled: boolean) =>
  useQuery(
    ["getSums", nums.toString()],
    async () => {
      const numsQuery = nums.join();
      const response = await axios.get<ISumsResponse[]>(
        `/.netlify/functions/get-sums?numbers=${numsQuery}`
      );

      return shuffle<ISumsResponse>(response.data);
    },
    { enabled, refetchOnWindowFocus: false }
  );
