import { useQuery } from "react-query";
import { getItems } from "../../api/todoItems";

export const useGetItems = () => {
  return useQuery(["getItems"], () => {
    return getItems();
  });
};
