import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Star, GitFork, ExternalLink, Users, BookOpen, Calendar, Code2 } from 'lucide-react';
import { useGitHub, formatRepoDate } from '@/hooks/useGitHub';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

const languageColors: Record<string, string> = {
  Java: 'bg-orange-500',
  'JavaScript': 'bg-yellow-400',
  TypeScript: 'bg-blue-500',
  Python: 'bg-green-500',
  Go: 'bg-cyan-500',
  Rust: 'bg-orange-600',
  'C++': 'bg-pink-500',
  'C#': 'bg-purple-500',
  PHP: 'bg-indigo-500',
  Ruby: 'bg-red-500',
  Swift: 'bg-orange-400',
  Kotlin: 'bg-purple-600',
  HTML: 'bg-orange-500',
  CSS: 'bg-blue-400',
  Shell: 'bg-gray-500',
  Dockerfile: 'bg-blue-600',
};

export default function GitHubSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { profile, repos, loading, error } = useGitHub();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="github" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-muted-foreground mb-4">
              Open Source
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              GitHub <span className="text-gradient">Activity</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my latest contributions and open-source projects
            </p>
          </motion.div>

          {/* GitHub Profile Card */}
          <motion.div variants={itemVariants} className="mb-12">
            {loading ? (
              <Card className="bg-card border-border">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row items-center gap-6">
                    <Skeleton className="w-24 h-24 rounded-full" />
                    <div className="flex-1 text-center lg:text-left space-y-3">
                      <Skeleton className="h-8 w-48 mx-auto lg:mx-0" />
                      <Skeleton className="h-4 w-64 mx-auto lg:mx-0" />
                      <div className="flex justify-center lg:justify-start gap-4 pt-2">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-4 w-20" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : error ? (
              <Card className="bg-card border-border">
                <CardContent className="p-8 text-center">
                  <Github className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Unable to load GitHub profile</p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => window.open('https://github.com/dangi-ai', '_blank')}
                  >
                    View on GitHub
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ) : profile ? (
              <Card className="bg-card border-border card-hover">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row items-center gap-6">
                    {/* Avatar */}
                    <div className="relative">
                      <img
                        src={profile.avatar_url}
                        alt={profile.name || profile.login}
                        className="w-24 h-24 rounded-full border-4 border-background shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 text-center lg:text-left">
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {profile.name || profile.login}
                      </h3>
                      <p className="text-muted-foreground mb-4">{profile.bio}</p>

                      {/* Stats */}
                      <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <BookOpen className="w-4 h-4" />
                          <span className="font-semibold text-foreground">{profile.public_repos}</span>
                          <span>repositories</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span className="font-semibold text-foreground">{profile.followers}</span>
                          <span>followers</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Code2 className="w-4 h-4" />
                          <span className="font-semibold text-foreground">{profile.following}</span>
                          <span>following</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button
                      onClick={() => window.open(profile.html_url, '_blank')}
                      className="bg-primary hover:bg-primary/90"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : null}
          </motion.div>

          {/* Repositories Grid */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">Latest Repositories</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://github.com/dangi-ai', '_blank')}
              >
                View All
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="bg-card border-border">
                    <CardContent className="p-5 space-y-4">
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                      <div className="flex gap-2">
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-6 w-16" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : error ? (
              <Card className="bg-card border-border">
                <CardContent className="p-8 text-center">
                  <p className="text-muted-foreground">Unable to load repositories</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((repo) => (
                  <Card
                    key={repo.id}
                    className="group bg-card border-border card-hover border-glow"
                  >
                    <CardContent className="p-5">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                          {repo.name}
                        </h4>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 min-h-[2.5rem]">
                        {repo.description || 'No description available'}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center gap-4 mb-4">
                        {repo.language && (
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`w-3 h-3 rounded-full ${
                                languageColors[repo.language] || 'bg-gray-500'
                              }`}
                            />
                            <span className="text-xs text-muted-foreground">{repo.language}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Star className="w-3.5 h-3.5" />
                          <span className="text-xs">{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <GitFork className="w-3.5 h-3.5" />
                          <span className="text-xs">{repo.forks_count}</span>
                        </div>
                      </div>

                      {/* Topics */}
                      {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {repo.topics.slice(0, 3).map((topic) => (
                            <Badge
                              key={topic}
                              variant="secondary"
                              className="text-xs bg-secondary/50 text-muted-foreground"
                            >
                              {topic}
                            </Badge>
                          ))}
                          {repo.topics.length > 3 && (
                            <Badge
                              variant="secondary"
                              className="text-xs bg-secondary/50 text-muted-foreground"
                            >
                              +{repo.topics.length - 3}
                            </Badge>
                          )}
                        </div>
                      )}

                      {/* Updated */}
                      <div className="flex items-center gap-1.5 mt-4 pt-3 border-t border-border/50">
                        <Calendar className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          Updated {formatRepoDate(repo.updated_at)}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
