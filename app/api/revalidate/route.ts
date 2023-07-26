// https://localhost:3000/api/revalidate?path=/blog&scret=jordan1234

// import { NextApiRequest, NextApiResponse } from 'next';
// export default async function handlerApi(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   const { path, secret } = req.query;
//   if (secret !== process.env.SECRET_KEY)
//     return res.status(401).json({
//       message: 'Unauthorized',
//     });
//   if (!path)
//     return res.status(400).json({
//       message: 'Missing required data!',
//     });
//   await res.revalidate(path as string);
//   const response = await fetch(`http://localhost:3000${path}`);
//   const data = await response.json();
//   return res.status(200).json(data);
// }

import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function GET(request: NextRequest) {
  const tag: any = request.nextUrl.searchParams.get('tag');
  revalidateTag(tag);
  return NextResponse.json({ revalidated: true, now: Date.now(), tag: tag });
}
