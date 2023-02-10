import { CardUser } from "../component/cardUser";

export const CardStack = ({ items, input }) => {
  const filteredData = items?.filter((el) => {
    //if no input the return the original
    if (input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.login.toLowerCase().includes(input);
    }
  });
  return (
    <ul>
      {filteredData?.map((item) => (
        <CardUser user={item} />
      ))}
    </ul>
  );
};
