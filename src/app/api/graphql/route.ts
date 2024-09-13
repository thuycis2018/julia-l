import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { operationName } = body;
    let uri ='';
    let token = '';
    console.log('HERE');
    if(operationName == 'GetTestimonials'){
      uri = `${process.env.URI_GRAPHQL_DATOCMS}`;
      token = `${process.env.DATOCMS_API_KEY}`;
    }else if(operationName == 'GetBusinesses'){
      uri = `${process.env.URI_GRAPHQL_AWS_YELP}`;
    }else if(operationName == 'SearchRepositories'){
      uri = `${process.env.URI_GRAPHQL_AWS_GITHUB}`;
    }

    console.log(JSON.stringify(body));
    const response = await fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.error();
  }
}
