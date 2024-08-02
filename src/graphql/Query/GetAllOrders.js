import { gql, useQuery } from "@apollo/client";

export const GET_ALL_ORDERS = gql`
  query ordersByCompanyId($id: Int!) {
    companyById(id: $id) {
      id
      ordersByCompanyId {
        nodes {
          id
          customerId
          shirt
          pant
          sherwani
          suit
          coat
          orderStatus
          totalCounts
          totalPrice
          deliveryDate
          updatedAt
          createdAt
          customerByCustomerId {
            firstName
            lastName
          }
        }
      }
    }
  }
`;

const GetAllOrders = (id) => {
  const { data, loading, error } = useQuery(GET_ALL_ORDERS, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const allOrders = data?.companyById?.ordersByCompanyId?.nodes;
  const pendingOrders = allOrders.filter(
    (order) => order.orderStatus === "pending"
  );
  const completedOrders = allOrders.filter(
    (order) => order.orderStatus === "Completed"
  );
<<<<<<< HEAD
  console.log("orders", allOrders);
=======
>>>>>>> 77f05dfa66da2d33b144c84cd7c062a2354fdfc6

  return { allOrders, pendingOrders, completedOrders, loading, error };
};

export default GetAllOrders;
