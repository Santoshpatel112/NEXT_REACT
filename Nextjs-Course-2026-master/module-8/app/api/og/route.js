import {ImageResponse} from "next/og"

export const runtime = "edge"

export async function GET(request) {
    const {searchParams} = new URL(request.url)

    const title = searchParams.get("title") || "Chai or Code";
    const description = searchParams.get("description") || "Chai or Code";

    return new ImageResponse(
         (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          fontSize: 60,
          letterSpacing: -2,
          fontWeight: 700,
          textAlign: 'center',
          color: 'white',
          padding: '0 120px',
        }}
      >
        <div style={{ marginBottom: 20 }}>{title}</div>
        <div
          style={{
            fontSize: 30,
            fontWeight: 400,
            opacity: 0.8,
            lineHeight: 1.4,
          }}
        >
          {description}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  
    )
}