import { Request, Response } from "express";
import NodeCache from "node-cache";

const cache = new NodeCache();

// TODO: Typing
const cacheResponse = (duration: number) => (req: Request, res: any, next: Function) => {
  // Only GET can be cached
  if (req.method !== 'GET') {
    console.error("Cannot cache non-GET requests!");
    return next();
  }

  // check if key is in cache
  const key = req.originalUrl;
  const cachedResponse = cache.get(key);

  if (cachedResponse) {
    console.log(`Cache exists for ${key}`);
    res.send(cachedResponse);
  } else {
    console.log(`Cache does not exist for ${key}`);
    res.originalSend = res.send;
    res.send = (body: Response) => {
      res.originalSend(body);
      cache.set(key, body, duration);
    };
    next();
  }
}

export default cacheResponse
