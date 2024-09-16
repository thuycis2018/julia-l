import React from 'react';
import { FaLaptopCode, FaThumbsUp } from 'react-icons/fa';
import { useQuery} from '@apollo/client';
import { GET_BUSINESSES } from '../../api/queries/queries';
import { PostsSkeleton } from '../../ui/components/Skeletons';

interface Props {
  location: string;
  term?: string;
}

const YelpBusinessList: React.FC<Props> = ({ location, term }) => {
  const { loading, error, data } = useQuery(GET_BUSINESSES, {
    variables: { location, term },
    context: {
      fetch:  async () => {
        return await fetch('/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: GET_BUSINESSES.loc?.source.body,
          }),
        }).then(response => response.json());
      },
    },
  });

  if (loading) return <PostsSkeleton />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div className="py-5"><FaLaptopCode className="inline text-xl mr-2 mb-2" /> This feature uses React frontend (TypeScript and Apollo) sending GraphQL query to AWS API Gateway triggering AWS Lambda (Python) to call Yelp GraphQL endpoint passing API Token and return search result. API Token can be stored in AWS Secret Manager and then use AWS SDK to pull it in Lambda function.</div>
      
      <h1 className="text-center font-bold text-2xl p-4">Coffee Shops in {location}</h1>
      <ul className="space-y-4">
        {data?.search.business.map((business: { name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; rating: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; review_count: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; location: { address1: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; city: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }; categories: any[]; }, index: React.Key | null | undefined) => (
          <li key={index} className="items-start p-4 bg-gray-50 border border-gray-300 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-1">{business.name}</h2>
            <p className="text-gray-700">Rating: {business.rating} stars</p>
            <p className="text-gray-700">{business.review_count} reviews</p>
            <p className="text-gray-700">Address: {business.location.address1}, {business.location.city}</p>
            <p className="text-gray-700">Category: {business.categories.map((cat: { title: any; }) => cat.title).join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YelpBusinessList;
