'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useQuery} from '@apollo/client';
import { GET_TESTIMONIALS } from '../../api/queries/queries';

const Testimonials: React.FC = () => {
  const { loading, error, data } = useQuery(GET_TESTIMONIALS, {
    context: {
      fetch:  async () => {
        return await fetch('/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: GET_TESTIMONIALS.loc?.source.body,
            variables: {},
          }),
        }).then(response => response.json());
      },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="m-5">
      <h1 className="text-3xl font-bold mb-8 text-center p-4">Testimonials</h1>
      <div className="mb-5">
        <FontAwesomeIcon icon={faLaptopCode} className="mr-2" /> This feature uses React frontend (TypeScript and Apollo Client) pulling data from DatoCMS using GraphQL query.
      </div>

      <ul className="space-y-4">
        {data?.allTestimonials.map((record: { content: any; name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, index: React.Key | null | undefined) => (
          <div
            key={index}
            className="bg-gray-100 p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
            <p>
              <span dangerouslySetInnerHTML={{ __html: record.content }}></span>
            </p>
            <div className="flex items-center mb-4">
              <p className="text-xl font-bold mt-5">
                <FontAwesomeIcon icon={faThumbsUp} className="mr-2" /> {record.name} , {record.title}
              </p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Testimonials;
