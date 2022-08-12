import axios from "axios";
import { QueryCache, QueryClient, useQuery, useQueryClient } from "react-query";
import shuffle from "utilities/shuffle";

export interface ISumsResponse {
  X: number;
  Y: number;
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
      console.log({ nums });
      const response = await axios.get<ISumsResponse[]>(
        `https://sums-api-service-52fa57c-4fgiuwrxiq-ew.a.run.app/sums?numbers=${numsQuery}`
      );

      return shuffle<ISumsResponse>(response.data);
    },
    { enabled, refetchOnWindowFocus: false }
  );
