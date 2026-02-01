import { useState, useEffect } from 'react';
import type { GitHubRepo, GitHubProfile } from '@/types';

const GITHUB_USERNAME = 'dangi-ai';

export function useGitHub() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch profile data
        const profileResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!profileResponse.ok) {
          throw new Error('Failed to fetch GitHub profile');
        }
        const profileData = await profileResponse.json();
        setProfile(profileData);

        // Fetch repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
        );
        if (!reposResponse.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const reposData = await reposResponse.json();
        setRepos(reposData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return { profile, repos, loading, error };
}

export function formatRepoLanguage(language: string | null): string {
  if (!language) return 'Unknown';
  return language;
}

export function formatRepoDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
