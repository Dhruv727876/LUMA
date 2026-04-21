const fs = require('fs');

const urls = [
  "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzM0ZDEzMzMwNDExNTQyMmI5ZmI4YzRmOTYyNDQ2MGVhEgsSBxDs-9aAxx4YAZIBJAoKcHJvamVjdF9pZBIWQhQxODA4MzQ0MDg0ODg0MTgyNzQ0Nw&filename=&opi=89354086", // Hero
  "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzlkZDZhY2Y1YzM3ZjRkNTNiN2EyM2ViZDNkNTJjMzU5EgsSBxDs-9aAxx4YAZIBJAoKcHJvamVjdF9pZBIWQhQxODA4MzQ0MDg0ODg0MTgyNzQ0Nw&filename=&opi=89354086", // Property Story
  "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzdiNWY5NWQ0YzkxOTRhMTdiNjFjNGJlYTMwYTFlYzNiEgsSBxDs-9aAxx4YAZIBJAoKcHJvamVjdF9pZBIWQhQxODA4MzQ0MDg0ODg0MTgyNzQ0Nw&filename=&opi=89354086", // Agent
  "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzU3ZDk5NjM4M2E3YzQ1MmM4YjVmOTRhMTJkYzZjMTgyEgsSBxDs-9aAxx4YAZIBJAoKcHJvamVjdF9pZBIWQhQxODA4MzQ0MDg0ODg0MTgyNzQ0Nw&filename=&opi=89354086" // Gallery
];

const names = ["Hero", "PropertyStory", "Agent", "Gallery"];

async function run() {
  for (let i = 0; i < urls.length; i++) {
    const res = await fetch(urls[i]);
    const text = await res.text();
    
    // Find all src="..." for images and videos
    const srcMatches = Array.from(text.matchAll(/src="([^"]+)"/g)).map(m => m[1]);
    
    // Also find background-image urls
    const bgMatches = Array.from(text.matchAll(/url\(['"]?([^'"]+)['"]?\)/g)).map(m => m[1]);
    
    const all = [...srcMatches, ...bgMatches].filter(url => url.startsWith('http') || url.startsWith('//'));
    console.log(`\n--- ${names[i]} ---`);
    console.log([...new Set(all)].join('\n'));
  }
}
run();
