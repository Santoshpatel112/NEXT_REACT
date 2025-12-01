import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {

  const isLogged = true;

  if(!isLogged){
    return redirect('/login')
  }

  // const response = await fetch("http://localhost:3000/api/timer" , {
  //   cache:"force-cache"
  // });

  // const response = await fetch("http://localhost:3000/api/timer" , {
  //  next:{revalidate:10}
  // });
// Cache for 10 seconds , the fetch fresh data
  // const data = await response.json()



  const [fresh , cached , revalidated] = await Promise.all([
    // Always fresh
    fetch('http://localhost:3000/api/timer/utc', {
      cache: 'no-store'
    }).then(res => res.json()),

     // Permanently cached
    fetch('http://localhost:3000/api/timer/iso', {
      cache: 'force-cache'
    }).then(res => res.json()),

     fetch('http://localhost:3000/api/timer/local', {
      next: { revalidate: 5 }
    }).then(res => res.json())
  ])

  return (
     <div>
      <h1>Timer Comparison</h1>

      <div style={{border: '1px solid red', padding: '10px', margin: '10px'}}>
        <h3>Fresh Timer (no-store)</h3>
        <p>Time: {fresh.time}</p>
        <p>Request ID: {fresh.requestId}</p>
      </div>

      <div style={{border: '1px solid blue', padding: '10px', margin: '10px'}}>
        <h3>Cached Timer (force-cache)</h3>
        <p>Time: {cached.time}</p>
        <p>Request ID: {cached.requestId}</p>
      </div>

      <div style={{border: '1px solid green', padding: '10px', margin: '10px'}}>
        <h3>5-Second Revalidate</h3>
        <p>Time: {revalidated.time}</p>
        <p>Request ID: {revalidated.requestId}</p>
      </div>
    </div>
  );
}
