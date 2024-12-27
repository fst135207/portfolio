const GITHUB_API_TOKEN = process.env.GITHUB_API_TOKEN;

export async function getRepoStats(owner: string, repo: string) {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    headers: {
      Authorization: GITHUB_API_TOKEN ? `Bearer ${GITHUB_API_TOKEN}` : '',
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) return { stars: 0, forks: 0 };
  
  const data = await response.json();
  return {
    stars: data.stargazers_count,
    forks: data.forks_count,
  };
}