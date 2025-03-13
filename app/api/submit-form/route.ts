import { NextRequest, NextResponse } from 'next/server';
const EXTERNAL_API_URL = 'https:somedummyapi';

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
   
    const body = await request.json();
    
   
    try {
      const externalApiResponse = await fetch(EXTERNAL_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(body),
      });
      
      if (!externalApiResponse.ok) {
        const errorData = await externalApiResponse.json().catch(() => ({}));
        console.error('External API error:', errorData);
        
        return NextResponse.json(
          { message: errorData.message || 'Error submitting form' },
          { status: externalApiResponse.status }
        );
      }
      
      const externalData = await externalApiResponse.json();
      
      return NextResponse.json(
        {
          message: 'Form submitted successfully',
          data: externalData
        },
        { status: 200 }
      );
    } catch (apiError) {
      console.error('API request error:', apiError);
      return NextResponse.json(
        { message: 'Failed to communicate with external API' },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}