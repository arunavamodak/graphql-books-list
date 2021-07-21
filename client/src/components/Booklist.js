import React from "react";
import { useQuery, gql } from "@apollo/client";

const ALL_BOOKS = gql`
  query GetAllBooks {
    books {
      id
      name
      genre
      author {
        name
      }
    }
  }
`;

export default function Booklist(props) {
  const { loading, error, data } = useQuery(ALL_BOOKS);

  return (
    <div>
      <h2>Book-List</h2>
    </div>
  );
}
