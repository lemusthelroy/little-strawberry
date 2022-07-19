import axios from "axios";
import { List } from "immutable";
import { useQuery } from "react-query";
import shuffle from "utilities/shuffle";

interface ISumsResponse {
  X: number;
  Y: number;
}

export const useGetSumsQuery = (nums: List<number>, enabled: boolean) =>
  useQuery(
    ["getSums", nums],
    async () => {
      const numsQuery = nums.join();
      const response = await axios.get<ISumsResponse[]>(
        `https://sums-api-service-52fa57c-4fgiuwrxiq-ew.a.run.app/sums?numbers=${numsQuery}`
      );

      return shuffle<ISumsResponse>(response.data);
    },
    { enabled, refetchOnWindowFocus: false }
  );
